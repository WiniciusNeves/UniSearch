// src/pages/Auth/index.js
import React, { useState } from "react";
import { Image, Alert } from "react-native";
import { ImageView, Body, Input, ForgotText, Button, ButtonText, Text, RegisterButon } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../MenuResgister/styles";
import { Arrow } from "../Suporte/styles";
import api from '../../api/api';
import { useAuth } from '../../contexts/AuthContext';  // Importando o useAuth

const Auth = () => {
    const navigation = useNavigation();
    const { login } = useAuth();  // Usando o hook useAuth para acessar a função login do contexto
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await api.post('/auth/login', { email, password });
            if (response.status === 200) {
                login(response.data);  // Salvando os dados do usuário no contexto
                navigation.navigate('Feed');
            } else {
                Alert.alert('Erro', 'Credenciais inválidas. Por favor, verifique seu e-mail e senha.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro ao acessar sua conta. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <>
            <BackButton onPress={() => navigation.goBack()}>
                <Arrow name="arrowleft" />
            </BackButton>
            <ImageView>
                <Image
                    source={require('../../assets/images/unicuritiba.png')}
                    style={{ width: 266, height: 47 }}
                    resizeMode="cover"
                />
            </ImageView>
            <Body>
                <Input
                    placeholder="Email"
                    placeholderTextColor="black"
                    value={email}
                    onChangeText={setEmail}
                    style={{ color: 'black' }}
                />
                <Input
                    placeholder="Senha"
                    placeholderTextColor="#626262"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={{ color: 'black' }}
                />
                <ForgotText>Esqueceu sua senha?</ForgotText>
                <Button onPress={handleLogin}>
                    <ButtonText>Entrar</ButtonText>
                </Button>
                <RegisterButon>
                    <Text onPress={() => navigation.navigate('Register')}>Cadastre-se</Text>
                </RegisterButon>
            </Body>
        </>
    );
};

export default Auth;
