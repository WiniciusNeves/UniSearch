import React, { useState, useEffect } from "react";
import { Body, Body2, Circular, Input, InputView, Button, ButtonText, BackButton, Text, Icones } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Image, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Toast from 'react-native-toast-message';
import { launchImageLibrary } from 'react-native-image-picker';
import { useAuth } from '../../../contexts/AuthContext';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import api from '../../../api/api';

const Evento = () => {
    const navigation = useNavigation();
    const { user } = useAuth();
    const [title, setTitle] = useState('');
    const [descricao, setDescricao] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [uf, setUf] = useState('');
    const [complemento, setComplemento] = useState('');
    const [email_contato, setEmail_Contato] = useState('');
    const [mediaUri, setMediaUri] = useState(null);
    const [videoUri, setVideoUri] = useState(null);
    const [data_inicio, setDataInicio] = useState('');
    const [data_fim, setDataFim] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDateField, setSelectedDateField] = useState(null);
    useEffect(() => {
        if (data_inicio && !moment(data_inicio, 'DD/MM/YYYY', true).isValid()) {
            const formattedDataInicio = moment(data_inicio, 'DD/MM/YYYY').toDate();
            setDataInicio(formattedDataInicio);
        }
        if (data_fim && !moment(data_fim, 'DD/MM/YYYY', true).isValid()) {
            const formattedDataFim = moment(data_fim, 'DD/MM/YYYY').toDate();
            setDataFim(formattedDataFim);
        }
    }, [data_inicio, data_fim]);


    // Função para lidar com a seleção de uma data
    const handleConfirmDate = (date) => {
        if (selectedDateField === 'data_inicio') {
            setDataInicio(moment(date).format('DD/MM/YYYY'));
        } else if (selectedDateField === 'data_fim') {
            setDataFim(moment(date).format('DD/MM/YYYY'));
        }
        hideDatePicker();
    };

    // Função para exibir o seletor de data
    const showDatePicker = (field) => {
        setSelectedDateField(field);
        setDatePickerVisibility(true);
    };

    // Função para ocultar o seletor de data
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleMediaPicker = async (mediaType) => {
        const options = {
            mediaType: mediaType,
            quality: 1,
        };

        try {
            const response = await launchImageLibrary(options);
            if (response.didCancel) {
                console.log('Usuário cancelou a seleção de mídia');
            } else if (response.errorCode) {
                console.log('Erro no MediaPicker: ', response.errorCode);
                Alert.alert('Erro ao selecionar mídia', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                if (mediaType === 'video') {
                    setVideoUri(response.assets[0].uri);
                } else {
                    setMediaUri(response.assets[0].uri);
                }
            }
        } catch (error) {
            console.error('Erro no MediaPicker:', error);
        }
    };

    const toastFill = () => {
        Toast.show({
            type: "error",
            text1: "Por favor, preencha todos os campos.",
            text2: "Por favor, tente novamente!",
            autoHide: true,
            visibilityTime: 2500,
        });
    };

    const toastError = () => {
        Toast.show({
            type: "error",
            text1: "Erro ao criar postagem.",
            text2: "Por favor, tente novamente mais tarde.",
            autoHide: true,
            visibilityTime: 2500,
        });
    };

    const handlePost = async () => {
        if (!title || !descricao || !email_contato) {
            toastFill();
            return;
        }

        const formData = new FormData();
        formData.append('user_id', user.id);
        formData.append('name', title);
        formData.append('status', 'pending');
        formData.append('post_type', 'Eventos');
        formData.append('nome', title);
        formData.append('descricao', descricao);
        formData.append('data_inicio', moment(data_inicio, 'DD/MM/YYYY').format('YYYY-MM-DD'));
        formData.append('data_fim', moment(data_fim, 'DD/MM/YYYY').format('YYYY-MM-DD'));
        formData.append('endereco', endereco);
        formData.append('cidade', cidade);
        formData.append('cep', cep);
        formData.append('uf', uf);
        formData.append('complemento', complemento);
        formData.append('email_contato', email_contato);

        if (mediaUri) {
            formData.append('foto', {
                uri: mediaUri,
                type: 'image/jpeg',
                name: 'image.jpg',
            });
        }
        if (videoUri) {
            formData.append('video', {
                uri: videoUri,
                type: 'video/mp4',
                name: 'video.mp4',
            });
        }

        try {
            const response = await api.post('/createPost', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            if (response.status === 201) {
                console.log('Resposta da API:', response.data);
                navigation.navigate('Feed');
            } else {
                console.error('Erro na API:', response);
                toastError();
            }
        } catch (error) {
            console.error('Erro na API:', error);
            if (error.response) {
                const errorData = error.response.data;
                let errorMessage = '';
                if (errorData.error) {
                    errorMessage += errorData.error;
                }
                if (errorData.message) {
                    errorMessage += `: ${errorData.message}`;
                }
                console.error('Dados da resposta:', errorMessage);
                console.error('Status da resposta:', error.response.status);
                console.error('Headers da resposta:', error.response.headers);
            }
            toastError();
        }
    };
    return (
        <>
            <Body>
                <BackButton onPress={() => navigation.navigate('Feed')}>
                    <Icones name="angle-left" size={25} style={{ position: 'absolute', left: 17, top: 4, color: '#35B6B4' }} />
                </BackButton>
            </Body>
            <Body2>
                <Circular onPress={() => handleMediaPicker('photo')}>
                    {mediaUri ? (
                        <Image source={{ uri: mediaUri }} style={styles.image} />
                    ) : (
                        <Icones name="camera" size={37} color="#00345C" />
                    )}
                </Circular>
                <Text style={{ position: 'absolute', top: 100, color: Colors.dark }}>Escreva as informações do seu evento</Text>
                <InputView showsVerticalScrollIndicator={false}>
                    <Input
                        placeholder="title"
                        placeholderTextColor="#626262"
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Input
                        placeholder="Descrição"
                        placeholderTextColor="#626262"
                        value={descricao}
                        onChangeText={setDescricao}
                    />
                    <Input
                        placeholder="Endereço"
                        placeholderTextColor="#626262"
                        value={endereco}
                        onChangeText={setEndereco}
                    />
                    <Input
                        placeholder="Cidade"
                        placeholderTextColor="#626262"
                        value={cidade}
                        onChangeText={setCidade}
                    />
                    <Input
                        placeholder="CEP"
                        placeholderTextColor="#626262"
                        value={cep}
                        onChangeText={setCep}
                    />
                    <Input
                        placeholder="UF"
                        placeholderTextColor="#626262"
                        value={uf}
                        onChangeText={setUf}
                    />
                    <Input
                        placeholder="Complemento"
                        placeholderTextColor="#626262"
                        value={complemento}
                        onChangeText={setComplemento}
                    />
                    <Input
                        placeholder="E-mail de Contato"
                        placeholderTextColor="#626262"
                        value={email_contato}
                        onChangeText={setEmail_Contato}
                    />
                    <TouchableOpacity onPress={() => showDatePicker('data_inicio')}>
                        <Input
                            placeholder="Data de Início (dd/mm/yyyy)"
                            placeholderTextColor="#626262"
                            value={data_inicio}
                            onChangeText={setDataInicio}
                            editable={false} // para evitar a edição direta
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showDatePicker('data_fim')}>
                        <Input
                            placeholder="Data de Fim (dd/mm/yyyy)"
                            placeholderTextColor="#626262"
                            value={data_fim}
                            onChangeText={setDataFim}
                            editable={false} // para evitar a edição direta
                        />
                    </TouchableOpacity>
                </InputView>
                <Button onPress={() => handleMediaPicker('video')} style={{ opacity: mediaUri ? 1 : 0.5, position: 'absolute', bottom: 120 }}>
                    <ButtonText>Vídeo (Opcional)</ButtonText>
                </Button>
                <Button onPress={handlePost} style={{ position: 'absolute', bottom: 50 }}>
                    <ButtonText>Cadastrar</ButtonText>
                </Button>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirmDate}
                    onCancel={hideDatePicker}
                />
            </Body2>
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
    }
});

export default Evento;


