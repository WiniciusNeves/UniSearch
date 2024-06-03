import React from "react";
import { Image } from "react-native";
import { ImageView, Body, Input, ForgotText, Button, ButtonText, Text, RegisterButon } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Auth = () => {
    const navigation = useNavigation();

    return (
        <>
            <ImageView>
                <Image
                    source={require('../../assets/images/unicuritiba.png')}
                    style={{ width: 266, height: 47 }}
                    resizeMode="cover"
                />
            </ImageView>
            <Body>
<<<<<<< HEAD:frontend/src/pages/Auth/index.js
                <Input placeholder="Email" id="email" />
                <Input placeholder="Senha" id="password" />
                <Button onPress={() => navigation.goBack()}>
=======
                <Input placeholder="Email" placeholderTextColor="#626262" id="email"/>
                <Input placeholder="Senha" placeholderTextColor="#626262" id="password"/>
                <ForgotText>Esqueceu sua senha?</ForgotText>
                <Button onPress={() => navigation.navigate('Feed')}>
>>>>>>> c45a067c8482f1501b499673ae757d70f306f599:src/pages/Auth/index.js
                    <ButtonText >Entrar</ButtonText>
                </Button>
            </Body >
        </>
    );
}

export default Auth;