import React from "react";
import { Body, Body2, ImageView, Input, InputView, Button, ButtonText, BackButton, Text, Icones, TextView } from "./styles";
import { Arrow } from "../../Suporte/styles";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Image } from "react-native";

const Aviso = () => {
    const navigation = useNavigation();
    return (
        <>
            <Body>
                <BackButton onPress={() => navigation.navigate('Feed')}>
                    <Arrow name="arrowleft"/>
                </BackButton>
                <ImageView>
                    <Image
                        source={require('../../../assets/images/Support.png')}
                        resizeMode="cover"
                    />
                </ImageView>
            </Body>
            <Body2>
                <TextView>
                    <Text style={{ top: 20 }}>Escreva o seu Aviso anonimo, por proteger sua indentidade</Text>
                </TextView>
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

export default Aviso;
