import React from 'react';
import { Alert } from 'react-native';
import { Menu, HomeIcon, HamburguerIcon, Button, ButtonPost, TextPost, Icone } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from '../../../contexts/AuthContext';

const MenuFeed = () => {
    const { user } = useAuth();
    const navigation = useNavigation();
    
    const handlePostPress = () => {
        if (user?.role === 'admin' || user?.role === 'representante') {
            navigation.navigate('MenuResgister');
        } else {
            Alert.alert(
                'Acesso Restrito',
                'Você precisa ser um administrador ou representante para acessar essa página.',
                [{ text: 'OK', style: 'cancel' }]
            );
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
