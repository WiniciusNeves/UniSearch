import React from "react";
import { Image, View } from "react-native";
import {
  Body, ImageView, Icone, Input, Text, Container, Element, Button, ScrollView, ScrollViewBaixo, Quadrado, Bola
  , Retangulo, Recentes, Menu, ButtonPost, TextPost
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TEXT } from "@sequelize/core/_non-semver-use-at-your-own-risk_/abstract-dialect/data-types.js";

const Feed = () => {
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
        <Icone name="search" size={25} color="#00345C" style={{ position: 'absolute', right: 45, top: -135, color: '#35B6B4' }} />
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
        <Text style={{ color: '#00345C', fontWeight: 'bold', fontSize: 20, marginLeft: 20, }}>
          Seguindo
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row' }} style={{ position: 'relative', top: 1, left: -20, maxWidth: 9999 }}>
          <Quadrado>
            <Text style={{ fontWeight: '600', color: '#00345C', fontSize: 15, marginLeft: 50, marginTop: 10 }}>
              images
            </Text>
            <Text style={{ fontWeight: '600', color: '#00345C', fontSize: 15, position: 'absolute', top: 190, left: 20 }}>
              Titulo
            </Text>
            <Text style={{ fontWeight: '600', color: '#00345C', fontSize: 15, position: 'absolute', top: 240, left: 80 }}>
              nome de usuario
            </Text>
            <Text style={{ fontWeight: '600', color: '#9397A0', fontSize: 15, position: 'absolute', top: 260, left: 80 }}>
              00/00/0000
            </Text>
            <Bola />
          </Quadrado>
          <Quadrado>
            <Text style={{ fontWeight: '600', color: '#00345C', fontSize: 15, marginLeft: 50, marginTop: 10 }}>
              images
            </Text>
            <Text style={{ fontWeight: '600', color: '#00345C', fontSize: 15, position: 'absolute', top: 190, left: 20 }}>
              Titulo
            </Text>
            <Text style={{ fontWeight: '600', color: '#00345C', fontSize: 15, position: 'absolute', top: 240, left: 80 }}>
              nome de usuario
            </Text>
            <Text style={{ fontWeight: '600', color: '#9397A0', fontSize: 15, position: 'absolute', top: 260, left: 80 }}>
              00/00/0000
            </Text>
            <Bola />
          </Quadrado>
        </ScrollView>

        <Recentes>

          <Text style={{ fontSize: 20, color: '#00345C', marginLeft: 20, marginTop: 40, fontWeight: 'bold' }}>
            Recentes
          </Text>
          <Retangulo>

            <Text style={{ fontSize: 20, color: '#00345C', fontWeight: 'bold' }}>
              images
            </Text>

            <Text style={{ fontSize: 20, color: '#00345C', marginLeft: 50, fontWeight: 'bold', alignItems: 'center' }}>
              Titulo
            </Text>

          </Retangulo>
        </Recentes>
      </ScrollViewBaixo>
      <Menu>
        
      </Menu>
    </Body >
  );
};

export default Feed;