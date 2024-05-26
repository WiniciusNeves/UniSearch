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
                <Input placeholder="Email" />
                <Input placeholder="Senha" />
                <ForgotText>Esqueceu sua senha?</ForgotText>
                <Button>
                    <ButtonText onPress={() => navigation.navigate('Feed')}>Entrar</ButtonText>
            </Button>
            <RegisterButon>
                <Text onPress={() => navigation.navigate('Register')}>Cadastre-se</Text>
            </RegisterButon>
        </Body >
        </>
      );
    }

export default Auth;