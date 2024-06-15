import React from "react";
import { Image, Alert } from "react-native";
import { ImageView, Body, Apa, Button, Text, LeadMore, Icone, Icone2, ButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../MenuResgister/styles";
import { Arrow } from "../Suporte/styles";
import { useAuth } from '../../contexts/AuthContext';

const Menu = () => {
    const navigation = useNavigation();
    const { user, logout } = useAuth();
    
   
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
                {
                    text: "OK",
                    onPress: () => {
                        logout();
                        navigation.navigate('Feed');
                    }
                }
            ],
            { cancelable: false }
        );
    }

    return (
        <Body>
            <BackButton onPress={() => navigation.goBack()}>
                <Arrow name="arrowleft" />
            </BackButton>
            <ImageView>
                <Image
                    source={require('../../assets/images/Univer.png')}
                    resizeMode="cover"
                />
            </ImageView>
            {user?.role === 'admin' ? (
                <Apa>
                    <Button onPress={() => navigation.navigate('Admin')}>
                        <ButtonText>
                            <Text style={{ color: '#333333', fontFamily: 'Poppins-SemiBold', fontSize: 16, fontWeight: 'bold' }}>Admin</Text>
                        </ButtonText>
                    </Button>
                </Apa>
            ) : (
                <Apa>
                    <Button alert onPress={() =>
                        Alert.alert(
                            'Acesso Restrito',
                            'Você precisa ser um administrador para acessar essa página.',
                            [{ text: 'OK', style: 'cancel' }],
                            { cancelable: false }
                        )
                    }>
                        <ButtonText style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icone name="lock" color="#333333" style={{ textAlign: 'left', paddingRight: 10 }} />
                            <Text style={{ color: 'black', fontFamily: 'Poppins-SemiBold', fontSize: 16, fontWeight: 'bold', opacity: 0.8 }}>Admin</Text>
                        </ButtonText>
                    </Button>
                </Apa>
            )}

            <LeadMore>
                {user?.id > 0 && (
                    <Button onPress={handleExit}>
                        <Icone2 name="exit-outline" color="#00345C" style={{ color: '#35B6B4' }} />
                    </Button>
                )}

                <Button onPress={() => navigation.navigate('Suporte')}>
                    <Icone name="question-circle-o" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>
                {user?.id > 0 ? (
                    <Button alert onPress={() => Alert.alert("Atenção", "Você já está logado.", [{ text: "OK", style: "cancel" }], { cancelable: false })}>
                        <Icone name="user-circle-o" color="#00345C" style={{ color: '#35B6B4' }} />
                    </Button>
                ) : (
                    <Button onPress={() => navigation.navigate('Auth')}>
                        <Icone name="user-circle-o" color="#00345C" style={{ color: '#35B6B4' }} />
                    </Button>
                )}
            </LeadMore>
        </Body>
    );
}

export default Menu;
