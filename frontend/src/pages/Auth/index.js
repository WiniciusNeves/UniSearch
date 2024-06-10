// src/pages/Auth/index.js
import React, { useState } from "react";
import { Image, View } from "react-native";
import { ImageView, Body, Input, ForgotText, Button, ButtonText, Text, RegisterButon } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Toast, { BaseToast } from 'react-native-toast-message';
import { BackButton } from "../MenuResgister/styles";
import { Arrow } from "../Suporte/styles";
import api from '../../api/api';
import { useAuth } from '../../contexts/AuthContext';  // Importando o useAuth

const Auth = () => {
    const navigation = useNavigation();
    const { login } = useAuth();  // Usando o hook useAuth para acessar a função login do contexto
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toastConfig = {
        error: ({ text1, text2 }) => (
          <BaseToast
            {...{ text1, text2 }}
            style={{ backgroundColor: '#fff', borderLeftColor: 'red' }}
            textStyle={{ color: '#909090' }}
          />
        ),
      };
    
    const toastVerify = () => {
        Toast.show({
          type: "error",
          text1: "Credenciais inválidas.",
          text2: "Por favor, verifique seu e-mail e senha.",
          autoHide: true,
          visibilityTime: 2500,
        })
      }
    
    const toastRetry = () => {
        Toast.show({
          type: "error",
          text1: "Erro ao acessar sua conta.",
          text2: "Por favor, tente novamente mais tarde.",
          autoHide: true,
          visibilityTime: 2500,
        })
      }

    const handleLogin = async () => {
        try {
            const response = await api.post('/auth/login', { email, password });
            if (response.status === 200) {
                login(response.data);  // Salvando os dados do usuário no contexto
                navigation.navigate('Feed');
            } else {
                toastVerify();
            }
        } catch (error) {
            toastRetry();
        }
    };

    return (
        <>
            <View style={{ zIndex: 9999 }}>
                <Toast config={toastConfig} />
            </View>
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
