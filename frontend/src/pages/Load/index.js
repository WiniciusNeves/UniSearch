import React from "react";
import { Image } from "react-native";
import {
    Body, Button, ButtonView, Container,
    ImageView, Text, TextButton, TextView
} from "./styles";
import { useNavigation } from '@react-navigation/native'

const Load = () => {
    const navigation = useNavigation();

    return (
        <>
            <Container>
                <ImageView>
                    <Image
                        source={require('../../assets/images/unicuritiba.png')}
                        style={{ width: 266, height: 47 }}
                        resizeMode="cover"
                    />
                </ImageView>
            </Container>
            <Body>
                <TextView>
                    <Text>
                        Conecte-se com estudantes e docentes através do UniSearch
                    </Text>
                </TextView>
                <ButtonView >
                    <Button>
                        <TextButton onPress={() => navigation.navigate('Feed')}>Acessar</TextButton>
                    </Button>
                </ButtonView>
            </Body>
        </>
    );
}

export default Load;