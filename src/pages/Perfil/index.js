import React from "react";
import { Image } from "react-native";
import { Body, Container, Text, Icone, ScrollViewBaixo, Quadrado, QuadradoMaior } from "./styles";

import { useNavigation } from "@react-navigation/native";
import MenuFeed from "../../components/Feed/MenuFeed";

const Perfil = () => {
    const navigation = useNavigation();
    return (
        <Body>
            <Container>
                <Image
                    style={{ margin: 40 }}
                    source={require("../../assets/images/foto.png")}
                />

                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00345C', textAlign: 'center', position: 'relative', top: -100, left: -70 }}>
                    **NOME**
                </Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#00345C', textAlign: 'center', position: 'relative', top: -100, left: -70 }}>
                    **Titulo**
                </Text>
                <Icone
                    name="edit"
                    style={{ color: '#35B6B4', position: 'relative', top: -140, left: 360, fontSize: 50 }}
                    onPress={() => navigation.navigate('Edit')}
                />
            </Container>

            <ScrollViewBaixo vertical={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'column' }}>
                <Text style={{ color: '#00345C', fontFamily: 'Poppins-Bold', fontSize: 17, marginLeft: 20, marginBottom: 10, opacity: 100 }}>
                    MyPost
                </Text>
                <Quadrado>
                    <Text style={{ position: 'relative', left: -150, top: 50 }}>
                        Image
                    </Text>
                    <Text>
                        Categoria
                    </Text>
                    <Text>
                        Titulo
                    </Text>
                    <Text>
                        <Icone name="calendar" style={{ color: '#35B6B4', fontSize: 25 }} />
                        Data
                    </Text>
                </Quadrado>
                <Text style={{ color: '#00345C', fontFamily: 'Poppins-Bold', fontSize: 17, marginLeft: 20, marginBottom: 10, opacity: 100, marginTop: 20 }}>
                    Followed by you
                </Text>

                <QuadradoMaior>
                    <Text>
                        Image
                    </Text>
                    <Text>
                        Categoria
                    </Text>
                    <Text>
                        Titulo
                    </Text>
                    <Text>
                        <Icone name="calendar" style={{ color: '#35B6B4', fontSize: 25 }} />
                        Data
                    </Text>

                </QuadradoMaior>



            </ScrollViewBaixo>
            <MenuFeed />
        </Body>
    );
};

export default Perfil;
