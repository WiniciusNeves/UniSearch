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
                <Input placeholder="Email" placeholderTextColor="#626262" id="email"/>
                <Input placeholder="Senha" placeholderTextColor="#626262" id="password"/>
                <ForgotText>Esqueceu sua senha?</ForgotText>
                <Button onPress={() => navigation.navigate('Feed')}>
                    <ButtonText >Entrar</ButtonText>
            </Button>
            <RegisterButon>
                <Text onPress={() => navigation.navigate('Register')}>Cadastre-se</Text>
            </RegisterButon>
        </Body >
        </>
      );
    }

export default Auth;