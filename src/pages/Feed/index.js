import React from "react";
import { Image, View } from "react-native";
import {
  Body, ImageView, Input, Text, 
  Container, ScrollView, ScrollViewBaixo, 
  SearchIcon
} from "./styles";
import ButtonElement from "../../components/Feed/HashtagButtons/index";
import QuadradoElement from "../../components/Feed/PostCard/index";
import Recents from "../../components/Feed/Recents/index";
import Menu from "../../components/Feed/MenuFeed/index";
import { useNavigation } from "@react-navigation/native";

export default function Feed() {
  const navigation = useNavigation();

  return (
    <Body>
      <ImageView>
        <Image
          source={require('../../assets/images/unicuritiba.png')}
          style={{ width: 266, height: 47 }}
          resizeMode="cover"
        />
      </ImageView>
      <View>
        <Input placeholder="Clique para pesquisar..." style={{ textAlign: 'left', paddingLeft: 20 }} />
        <SearchIcon name="search" style={{ position: 'absolute', right: 45, top: -135, color: '#35B6B4' }}/>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row' }}>
        <Container>
          <Button onPress={() => navigation.navigate('Aviso')}>
            <Element activeOpacity={0.5} style={{ backgroundColor: '#B5DEDD' }}>
              <Text>#aviso</Text>
            </Element>
          </Button>
          <Button onPress={() => navigation.navigate('Comodidade')}>
            <Element activeOpacity={0.5} style={{ backgroundColor: '#A09FC3' }}>
              <Text>#Comodidade</Text>
            </Element>
          </Button>
          <Button onPress={() => navigation.navigate('Atletica')}>
            <Element activeOpacity={0.5} style={{ backgroundColor: '#DECBB5' }}>
              <Text>#Atletica</Text>
            </Element>
          </Button>
          <Button onPress={() => navigation.navigate('Eventos')}>
            <Element activeOpacity={0.5} style={{ backgroundColor: '#FFE55D' }}>
              <Text>#Eventos</Text>
            </Element>
          </Button>
        </Container>
      </ScrollView>
      <ScrollViewBaixo verfical={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'column' }}>
        <Text style={{ color: '#00345C', fontFamily: 'Poppins-Bold', fontSize: 17, marginLeft: 20, marginBottom: 10, opacity: 100 }}>
          Seguindo
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row' }} style={{ position: 'relative', top: 1, left: -20, maxWidth: 9999 }}>
          <QuadradoElement />
          <QuadradoElement />
        </ScrollView>
        <Recents />
      </ScrollViewBaixo>
      <Menu />
    </Body >
  );
};
