import React, { useState } from "react";
import { Body, Body2, Circular, Input, InputView, Button, ButtonText, BackButton, Text, Icones } from "./styles";
import { Arrow } from "../../Suporte/styles";
import { useNavigation } from "@react-navigation/native";
import { launchImageLibrary } from 'react-native-image-picker';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Image, StyleSheet, Alert } from "react-native";

const Eventos = () => {
    const navigation = useNavigation();
    const [imageUri, setImageUri] = useState(null);

    const handleImagePicker = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
                Alert.alert('Erro ao selecionar imagem', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                setImageUri(response.assets[0].uri);
            }
        });
    };

    return (
        <>
            <Body>
                <BackButton onPress={() => navigation.navigate('Feed')}>
                    <Arrow name="arrowleft" />
                </BackButton>
            </Body>
            <Body2>
                <Circular onPress={handleImagePicker}>
                    {imageUri ? (
                        <Image source={{ uri: imageUri }} style={styles.image} />
                    ) : (
                        <Icones name="camera" size={37} color="#00345C" />
                    )}
                </Circular>
                <Text style={{ position: 'absolute', top: 100, color: Colors.black }}>Escreve os escropo do seu Eventos</Text>
                <InputView showsVerticalScrollIndicator={false} >
                    <Input placeholder="Titulo" id="title" />
                    <Input placeholder="Descricão" id="description" />
                    <Input placeholder="Email de Contato" id="email" />
                    <Input placeholder="Data-inicial" id="dateI" />
                    <Input placeholder="Data-Final" id="dateF" />
                    <Input placeholder="Local" id="local" />
                </InputView>
                <Button style={{ position: 'absolute', bottom: 25 }}>
                    <ButtonText>Cadastrar</ButtonText>
                </Button>
            </Body2>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});

export default Eventos;
