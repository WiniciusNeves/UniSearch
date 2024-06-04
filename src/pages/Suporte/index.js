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


const Suporte = () => {
    const navigation = useNavigation();

    return (

        <Container>
            <Header>
                <ViewBack>
                    <Arrow name="arrowleft" onPress={() => navigation.navigate('Menu')}/>
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
                    <ViewIcons>
                        <Phone name="phone"/>
                    </ViewIcons>
                    <ViewIcons style={{backgroundColor: '#00c04c'}}>
                        <Whatsapp name="whatsapp"/>
                    </ViewIcons>
                </IconsView>
                <InfoHour>
                    <Info>
                        Horário de Atendimento:
                        Segunda - Sexta das 8h30 as 17h
                        Sábado das 8h30 as 13h
                    </Info>
                </InfoHour>
            </Body>
        </Container>

    );
};
export default Suporte;