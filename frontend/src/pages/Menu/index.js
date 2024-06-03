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
<<<<<<< HEAD:frontend/src/pages/Menu/index.js
                <Button style={{ position: 'absolute', left: 50, top: 25 }} onPress={() => navigation.navigate('Logout')}>
                    <Icone2 name="exit-outline" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>
                <Button style={{ position: 'absolute', right: 200, top: 25 }} onPress={() => navigation.navigate('Auth')}>
                    <Icone name="user-circle-o" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>




                <Button style={{ position: 'absolute', right: 45, top: 90 }} onPress={() => navigation.navigate('Feed')}>
                    <Icone name="chevron-down" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>
=======
                <Button onPress={() => navigation.navigate('Feed')}>
                    <Icone2 name="exit-outline" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>  
                <Button onPress={() => navigation.navigate('Suporte')}>
                    <Icone name="question-circle-o" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>
                <Button onPress={() => navigation.navigate('Config')}>
                    <Icone name="cog" color="#00345C" style={{ color: '#35B6B4' }} />
                </Button>      
>>>>>>> c45a067c8482f1501b499673ae757d70f306f599:src/pages/Menu/index.js
            </LeadMore>
        </Body >
    );
}

export default Menu;