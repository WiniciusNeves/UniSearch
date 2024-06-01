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
                <Button onPress={() => navigation.navigate('Admin')}>
                    <ButtonText>
                        <Text style={{ color: '#333333', fontFamily: 'Poppins-SemiBold', fontSize: 16, fontWeight: 'bold' }}>Admin</Text>
                    </ButtonText>
                </Button>
            </Apa>
            <LeadMore>
                <Button style={{ position: 'absolute', left: 50, top: 25 }} onPress={() => navigation.navigate('Logout')}>
                    <Icone2 name="exit-outline" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>
                <Button style={{ position: 'absolute', right: 200, top: 25 }} onPress={() => navigation.navigate('Auth')}>
                    <Icone name="user-circle-o" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>




                <Button style={{ position: 'absolute', right: 45, top: 90 }} onPress={() => navigation.navigate('Feed')}>
                    <Icone name="chevron-down" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>
            </LeadMore>


        </Body >
    );
}

export default Menu;