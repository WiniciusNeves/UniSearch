import React from "react";
import { Image, View } from "react-native";
import {
    Body, ImageView , Icones
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../MenuRegister/styles";
import { ScrollView } from "react-native-gesture-handler";




const Admin = () => {
    const navigation = useNavigation();
    return (
        <Body>
            <BackButton onPress={() => navigation.goBack()}>
                <Icones name="angle-left" size={25} style={{ position: 'absolute', left: 17, top: 4, color: '#35B6B4' }} />
            </BackButton>
            <ImageView>

                <Image
                    source={require('../../assets/images/unicuritiba.png')}

                    resizeMode="cover"
                />
            </ImageView>

            <ScrollView/>



        </Body >
    );
}

export default Admin;