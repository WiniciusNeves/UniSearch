import React from "react";
import { Body, Body2, ImageView, Input, InputView, Button, ButtonText, BackButton, Text, Icones } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Image } from "react-native";

const Comodidade = () => {
    const navigation = useNavigation();
    return (
        <>
            <Body>
                <BackButton onPress={() => navigation.navigate('Feed')}>
                    <Icones name="angle-left" size={25} style={{ position: 'absolute', left: 17, top: 4, color: '#35B6B4' }} />
                </BackButton>
                <ImageView>
                    <Image
                        source={require('../../../assets/images/Support.png')}
                        resizeMode="cover"
                    />
                </ImageView>
            </Body>
            <Body2>

                <Text style={{ position: 'absolute', top: 50, color: Colors.black }}>Escreva o seu Aviso anonimo, por proteger sua indentidade</Text>
                <InputView>
                    <Input placeholder="Titulo" id="title" />
                    <Input placeholder="Descricão" id="description" />
                </InputView>
                <Button>
                    <ButtonText>Cadastrar</ButtonText>
                </Button>
            </Body2>
        </>
    );
}

export default Comodidade;
