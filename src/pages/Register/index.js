import React from "react";
import { Body, Body2, Circular, Input, InputView, CameraIcon, Button, ButtonText, BackButton, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Register = () => {
    const navigation = useNavigation();

    return (
        <>
            <Body>
            </Body>
            <Body2 >
                <Circular>
                    <CameraIcon name="camera" size={37} color="#00345C" />
                </Circular>
                <Text style={{ position: 'absolute', top: 100, color: Colors.black }}>Faça o seu cadastro, para compartilhar suas experiências</Text>
                <InputView>
                    <Input placeholder="Nome" id="name" />
                    <Input placeholder="Email" id="email" />
                    <Input placeholder="Senha" id="password" />
                </InputView>
                <Button>
                    <ButtonText>Cadastrar</ButtonText>
                </Button>
                <BackButton>
                    <Text onPress={() => navigation.navigate('Auth')}>Voltar?</Text>
                </BackButton>
            </Body2>
        </>
    );
}

export default Register;