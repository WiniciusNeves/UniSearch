import React, { useState } from "react";
import { Body, Body2, ImageView, Input, InputView, Button, ButtonText, BackButton, Text, Icones, TextView } from "./styles";
import { Arrow } from "../../Suporte/styles";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import Toast from 'react-native-toast-message';

import api from '../../../api/api';
import { useAuth } from '../../../contexts/AuthContext';

const Aviso = () => {
    const navigation = useNavigation();
    const { user } = useAuth();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const toastFill = () => {
        Toast.show({
            type: "error",
            text1: "Preencha todos os campos.",
            text2: "Tente novamente!",
            autoHide: true,
            visibilityTime: 2500,
        });
    }

    const toastError = () => {
        Toast.show({
            type: "error",
            text1: "Erro ao cadastrar aviso.",
            text2: "Tente novamente mais tarde.",
            autoHide: true,
            visibilityTime: 2500,
        });
    }

    const handlePost = async () => {
        if (title === '' || description === '') {
            toastFill();
        } else {
            const formData = new FormData();
            formData.append('user_id', user.id);
            formData.append('name', title);
            formData.append('status', 'pending');
            formData.append('post_type', 'Aviso');
            formData.append('nome', title);
            formData.append('descricao', description);



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
    }

    return (
        <>
            <Body>
                <BackButton onPress={() => navigation.navigate('Feed')}>
                    <Arrow name="arrowleft" />
                </BackButton>
                <ImageView>
                    <Image
                        source={require('../../../assets/images/Support.png')}
                        resizeMode="cover"
                    />
                </ImageView>
            </Body>
            <Body2>
                <TextView>
                    <Text style={{ top: 20 }}>Escreva o seu aviso anônimo, por proteger sua identidade</Text>
                </TextView>
                <InputView>
                    <Input placeholder="Título" placeholderTextColor="#626262" onChangeText={setTitle} value={title} />
                    <Input placeholder="Descrição" placeholderTextColor="#626262" onChangeText={setDescription} value={description} />
                </InputView>
                <Button onPress={handlePost}>
                    <ButtonText>Cadastrar</ButtonText>
                </Button>
            </Body2>
        </>
    );
}

export default Aviso;
