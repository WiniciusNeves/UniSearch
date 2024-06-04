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
        <Input placeholder="Clique para pesquisar..."  placeholderTextColor="#A7A7A7" style={{ textAlign: 'left', paddingLeft: 20 }} />
        <SearchIcon name="search" style={{ position: 'absolute', right: 45, top: -135, color: '#35B6B4' }}/>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row' }}>
        <Container>
          <ButtonElement backgroundColor={'#B5DEDD'} text={'#avisos'}/>
          <ButtonElement backgroundColor={'#A09FC3'} text={'#eventos'}/>
          <ButtonElement backgroundColor={'#DECBB5'} text={'#comodidades'}/>
          <ButtonElement backgroundColor={'#B5DEDD'} text={'#atléticas'}/>
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
