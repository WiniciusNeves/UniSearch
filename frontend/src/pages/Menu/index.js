import React from "react";
import { Image, Alert } from "react-native";
import { ImageView, Body, Apa, Button, Text, LeadMore, Icone, Icone2, ButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BackButton} from "../MenuResgister/styles";
import { Arrow } from "../Suporte/styles";


const Menu = () => {
    const navigation = useNavigation();

    function handleExit() {
        Alert.alert(
            "Confirmação de Saída",
            "Deseja sair?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => navigation.navigate('Load') }
            ],
            { cancelable: false }
        );
    }

    return (
        <Body>
            <BackButton onPress={() => navigation.goBack()}>
                <Arrow name="arrowleft"/>
            </BackButton>
            <ImageView>
                <Image
                    source={require('../../assets/images/Univer.png')}

                    resizeMode="cover"
                />
            </ImageView>
            <Apa>
                <Button>
                    <ButtonText onPress={() => navigation.navigate('Admin')}>
                        <Text style={{ color: '#333333', fontFamily: 'Poppins-SemiBold', fontSize: 16, fontWeight: 'bold' }}>Admin</Text>
                    </ButtonText>
                </Button>
            </Apa>
            <LeadMore>
                <Button onPress={handleExit}>
                    <Icone2 name="exit-outline" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>
                <Button onPress={() => navigation.navigate('Suporte')}>
                    <Icone name="question-circle-o" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>
                <Button onPress={() => navigation.navigate('Auth')}>
                    <Icone name="user-circle-o" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>
            </LeadMore>
        </Body >
    );
}

export default Menu;