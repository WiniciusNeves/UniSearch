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
                <Input placeholder="Email" id="email" />
                <Input placeholder="Senha" id="password" />
                <Button onPress={() => navigation.goBack()}>
                    <ButtonText >Entrar</ButtonText>
                </Button>
            </Body >
        </>
    );
}

export default Auth;