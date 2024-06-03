import React, { useState } from "react";
import { Body, Body2, Circular, Input, InputView, CameraIcon, Button, ButtonText, BackButton, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { launchImageLibrary } from 'react-native-image-picker';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Image, StyleSheet, Alert } from "react-native";

const Register = () => {
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

            <Body />
            <Body2 >
                <Circular onPress={handleImagePicker}>
                    {imageUri ? (
                        <Image source={{ uri: imageUri }} style={styles.image} />
                    ) : (
                        <CameraIcon name="camera" size={37} color="#00345C" />
                    )}
                </Circular>
                <Text style={{ position: 'absolute', top: 100, color: Colors.black, textAlign: 'center', width: 400 }}>Faça o seu cadastro, para compartilhar suas experiências</Text>
                <InputView>
                    <Input placeholder="Nome" placeholderTextColor="#626262" id="name" />
                    <Input placeholder="Email" placeholderTextColor="#626262" id="email" />
                    <Input placeholder="Senha" placeholderTextColor="#626262" id="password" />
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
