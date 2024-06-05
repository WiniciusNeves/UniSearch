import React from "react";
import { Arrow, Container, Header, ViewBack, 
    Title, TitleView, Info, InfoView, Body,
    ViewIcons,
    Phone,
    Whatsapp,
    IconsView,
    InfoHour
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Linking } from 'react-native';

const Suporte = () => {
    const navigation = useNavigation();

    const openWhatsApp = () => {
        const phoneNumber = '5541998486650'; 
        const url = `whatsapp://send?phone=${phoneNumber}`;
        Linking.openURL(url).catch(() => {
            alert('Certifique-se de que o WhatsApp está instalado no seu dispositivo');
        });
    };

    const dialPhoneNumber = () => {
        const phoneNumber = '5541998486650'; 
        const url = `tel:${phoneNumber}`;
        Linking.openURL(url).catch(() => {
            alert('Não foi possível abrir o discador de telefone');
        });
    };

    return (
        <Container>
            <Header>
                <ViewBack onPress={() => navigation.navigate('Menu')}>
                    <Arrow name="arrowleft"/>
                </ViewBack>
                <TitleView>
                    <Title>Suporte</Title>
                </TitleView>
            </Header>
            <Body>
                <InfoView>
                    <Info>
                        Para entrar em contato com nosso suporte, acesse
                        um dos nossos canais de atendimento abaixo.
                    </Info>
                </InfoView>
                <IconsView>
                    <ViewIcons onPress={dialPhoneNumber}>
                        <Phone name="phone"/>
                    </ViewIcons>
                    <ViewIcons style={{backgroundColor: '#00c04c'}} onPress={openWhatsApp}>
                        <Whatsapp name="whatsapp"/>
                    </ViewIcons>
                </IconsView>
                <InfoHour>
                    <Info>
                        Horário de Atendimento:
                        {"\n"}
                        Segunda - Sexta das 8h30 as 17h
                        {"\n"}
                        Sábado das 8h30 as 13h
                    </Info>
                </InfoHour>
            </Body>
        </Container>
    );
};

export default Suporte;
