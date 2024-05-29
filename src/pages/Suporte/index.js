import React from "react";
import { Image } from "react-native";
import { Body, Container, Text } from "./styles";

import { useNavigation } from "@react-navigation/native";
import MenuFeed from "../../components/Feed/MenuFeed";
import { ScrollViewBaixo } from "../Feed/styles";


const Suporte = () => {
    const navigation = useNavigation();
    return (

        <Body>
            <Container>
                <Image
                    style={{ margin: 40 }}
                    source={require("../../assets/images/unicuritiba.png")}
                />
            </Container>
            <ScrollViewBaixo vertical={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'column' }} style={{ position: 'relative', top: 1, maxHeight: 700 }}>

                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00345C', textAlign: 'left', }}>
                </Text>
            </ScrollViewBaixo>
            <MenuFeed />

        </Body>

    );
};
export default Suporte;