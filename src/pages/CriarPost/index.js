import React from "react";
import { Body, Body2, Circular, Input, InputView, Icones, Button, ButtonText, BackButton, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Register = () => {
    const navigation = useNavigation();

    return (
        <>
            <Body>
                <BackButton onPress={() => navigation.goBack()}>
                    <Icones name="angle-left" size={25} style={{ position: 'absolute', left: 17, top: 4, color: '#35B6B4' }} />
                </BackButton>
            </Body>
            <Body2 >
                <Circular>
                    <Icones name="camera" size={37} color="#00345C" />
                </Circular>
                <Text style={{ position: 'absolute', top: 100, color: Colors.black }}>Crie seu post, para compartilhar suas experiências</Text>
                <InputView>
                    <Input placeholder="Titulo" />
                    <Input placeholder="Sobre" style={{ height: 200, textAlign: 'left-top' }} />
                    <Input placeholder="Categoria" />
                </InputView>
                <Button>
                    <ButtonText>Cadastrar</ButtonText>
                </Button>
                
            </Body2>
        </>
    );
}

export default Register;