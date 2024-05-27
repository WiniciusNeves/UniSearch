import React, { useState } from "react";
import { Body, Body2, Icones, BackButton, ImagenView, Selecione } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import { Image } from "react-native";

const MenuRegister = () => {
    const navigation = useNavigation();
    const [selectedValue, setSelectedValue] = useState("");

    const handleValueChange = (itemValue) => {
        setSelectedValue(itemValue);
        if (itemValue) {
            navigation.navigate(itemValue);
        }
    };

    return (
        <>
            <Body>
                <BackButton onPress={() => navigation.goBack()}>
                    <Icones name="angle-left" size={25} style={{ position: 'absolute', left: 17, top: 4, color: '#35B6B4' }} />
                </BackButton>
                <ImagenView>
                    <Image
                        source={require('../../assets/images/Create.png')}  style={{ width: 280, height: 280 , objectFit: 'cover'}}/>
                </ImagenView>
            </Body>
            <Body2>
                <Selecione>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 300 }}
                        onValueChange={handleValueChange}
                    >
                        <Picker.Item label="Selecione qual tipo postagem voce deseja criar" value="" />
                        <Picker.Item label="Comodidade" value="Comodidade" />
                        <Picker.Item label="Atletica" value="Atletica" />
                        <Picker.Item label="Eventos" value="Eventos" />
                        <Picker.Item label="Aviso" value="Aviso" />
                    </Picker>
                </Selecione>
            </Body2>
        </>
    );
}

export default MenuRegister;
