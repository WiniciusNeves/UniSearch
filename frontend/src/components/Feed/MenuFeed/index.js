import React from 'react';
import { View } from 'react-native';
import { Menu, HomeIcon, HamburguerIcon, Button, ButtonPost, TextPost, Icone } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from '../../../contexts/AuthContext';
import { useToast } from '../../../contexts/toastContext';

const MenuFeed = () => {
    const { user } = useAuth() || {};  // Definir user como um objeto vazio por padrão se useAuth() retornar null
    const { show } = useToast() || {};
    const navigation = useNavigation();

    const toastVerify = () => {
        if (show) {
            show({
                type: "error",
                text1: "Acesso restrito.",
                text2: "Você precisa entrar como administrador para acessar a página.",
                autoHide: true,
                visibilityTime: 3500,
            });
        }
    };

    const handlePostPress = () => {
        if (user && (user.role === 'admin' || user.role === 'representante')) {
            navigation.navigate('MenuResgister');
        } else {
            toastVerify();
        }
    };

    return (
        <Menu>
            <Button onPress={() => navigation.navigate('Feed')}>
                <HomeIcon name="home" />
            </Button>
            <Button onPress={handlePostPress}>
                <ButtonPost>
                    <Icone name="edit" style={{ position: 'absolute', left: 30, fontSize: 20, color: 'white' }} />
                    <TextPost>escrever post</TextPost>
                </ButtonPost>
            </Button>
            <Button onPress={() => navigation.navigate('Menu')}>
                <HamburguerIcon name="navicon" />
            </Button>
        </Menu>
    );
}

export default MenuFeed;
