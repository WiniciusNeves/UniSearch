import React from "react";
import { Image, View } from "react-native";
import { ImageView, Body, Apa, Button, Text, LeadMore, Icone, Icone2, ButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";



const Menu = () => {
    const navigation = useNavigation();
    return (
        <Body>
            <ImageView>
                <Image
                    source={require('../../assets/images/Univer.png')}

                    resizeMode="cover"
                />
            </ImageView>
            <Apa>

                <Button onPress={() => navigation.navigate('Notificaçao')}>
                    <ButtonText>
                        <Text style={{ color: '#333333', fontFamily: 'Poppins-SemiBold', fontSize: 16, fontWeight: 'bold' }}>Notificaçao</Text>
                    </ButtonText>
                </Button>
                <Button>

                    <ButtonText onPress={() => navigation.navigate('Admin')}>
                        <Text style={{ color: '#333333', fontFamily: 'Poppins-SemiBold', fontSize: 16, fontWeight: 'bold' }}>Admin</Text>
                    </ButtonText>
                </Button>
            </Apa>
            <LeadMore>
                <Button onPress={() => navigation.navigate('Feed')}>
                    <Icone2 name="exit-outline" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>  
                <Button onPress={() => navigation.navigate('Suporte')}>
                    <Icone name="question-circle-o" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>
                <Button onPress={() => navigation.navigate('Config')}>
                    <Icone name="cog" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>      
            </LeadMore>
        </Body >
    );
}

export default Menu;