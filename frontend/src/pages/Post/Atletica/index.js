import React, { useState } from "react";
import { Body, Body2, Circular, Input, InputView, Button, ButtonText, BackButton, Text, Icones } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Image, StyleSheet, Alert } from "react-native";
import Toast from 'react-native-toast-message';

import api from '../../../api/api';
import { launchImageLibrary } from 'react-native-image-picker';
import { useAuth } from '../../../contexts/AuthContext';

const Atletica = () => {
    const navigation = useNavigation();
    const { user } = useAuth();
    const [mediaUri, setMediaUri] = useState(null);
    const [videoUri, setVideoUri] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [email_contato, setEmail_contato] = useState('');

    const handleMediaPicker = async (mediaType) => {
        const options = {
            mediaType: mediaType,
            quality: 1,
        };

        try {
            const response = await launchImageLibrary(options);
            if (response.didCancel) {
                console.log('Usuário cancelou a seleção de media');
            } else if (response.errorCode) {
                console.log('Erro no MediaPicker: ', response.errorCode);
                Alert.alert('Erro ao selecionar media', response.errorMessage);
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
            text1: "Preencha todos os campos.",
            text2: "Tente novamente!",
            autoHide: true,
            visibilityTime: 2500,
        })
    }

    const toastError = () => {
        Toast.show({
            type: "error",
            text1: "Erro ao cadastrar usuário.",
            text2: "Tente novamente mais tarde.",
            autoHide: true,
            visibilityTime: 2500,
        })
    }

    const handlePost = async () => {
        if (!title || !description || !email_contato) {
            toastFill();
            return;
        }

        const formData = new FormData();
        formData.append('user_id', user.id);
        formData.append('name', title);
        formData.append('status', 'pending');
        formData.append('post_type', 'Atletica');
        formData.append('nome', title);
        formData.append('descricao', description);
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
                <Circular onPress={() => handleMediaPicker('foto')}>
                    {mediaUri ? (
                        <Image source={{ uri: mediaUri }} style={styles.image} />
                    ) : (
                        <Icones name="camera" size={37} color="#00345C" />
                    )}
                </Circular>
                <Text style={{ position: 'absolute', top: 100, color: Colors.dark }}>Escreva sobre sua atletica</Text>
                <InputView>
                    <Input placeholder="Título" placeholderTextColor="#626262" value={title} onChangeText={setTitle} id=" title" key="title" />
                    <Input placeholder="Descrição" placeholderTextColor="#626262" value={description} onChangeText={setDescription} id=" description" key="description" />
                    <Input placeholder="Email Contato" placeholderTextColor="#626262" value={email_contato} onChangeText={setEmail_contato} id="email_contato" key="email_contato" />
                </InputView>
                <Button onPress={() => handleMediaPicker('video')} style={{ opacity: mediaUri ? 1 : 0.5 }}>
                    <ButtonText>Vídeo (Opcional)</ButtonText>
                </Button>
                <Button onPress={handlePost}>
                    <ButtonText>Cadastrar</ButtonText>
                </Button>
            </Body2>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
    }
});

export default Atletica;
