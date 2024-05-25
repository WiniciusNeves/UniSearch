import React from "react";
import { Body, Body2, Circular, Input, InputView, Cam, Button, ButtonText, BackButton, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
    const navigation = useNavigation();

    return (
        <>
            <Body>
            </Body>
            <Body2 >
                <Circular>
                    <Cam name='camera'/>
                </Circular>
                <InputView>
                    <Input placeholder="Nome" />
                    <Input placeholder="Email" />
                    <Input placeholder="Senha" />
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