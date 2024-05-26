import React from "react";
import { ScrollView, Image, View } from "react-native";
import {
  Body, ImageView, Input, Text, Container, Element, Button,
  Seguindo, Quadrado, Bola, Recente, Retangulo, Menu, Icone,
  ButtonPost, TextPost,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const Feed = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <ImageView>
        <Image
          source={require('../../assets/images/unicuritiba.png')}
          style={{ width: 266, height: 47 }}
          resizeMode="cover"
        />
      </ImageView>
      <Body>
        <Input placeholder="Pesquisar..." />
        <Icone name="search" size={25} color="#00345C" style={{ position: 'absolute', right: 60, top: 275 }} />

        <Container>
          <Button onPress={() => navigation.navigate('Aviso')}>
            <Element activeOpacity={0.5} style={{ backgroundColor: '#B5DEDD' }}>
              <Text>#aviso</Text>
            </Element>
          </Button>
          <Button onPress={() => navigation.navigate('Comodidade')}>
            <Element activeOpacity={0.5} style={{ backgroundColor: '#B6B5DE' }}>
              <Text>#Comodidade</Text>
            </Element>
          </Button>
          <Button onPress={() => navigation.navigate('Atletica')}>
            <Element activeOpacity={0.5} style={{ backgroundColor: '#DECBB5' }}>
              <Text>#Atletica</Text>
            </Element>
          </Button>
        </Container>
        <Seguindo>
          <Text style={{ fontWeight: 'bold', color: '#00345C', fontSize: 17 }}>
            Seguindo
          </Text>
          <Quadrado>
            <ImageView>
              <Text style={{ fontWeight: '600', color: '#00345C', fontSize: 15, marginLeft: 10 }}>
                images
              </Text>
            </ImageView>
            <Text style={{ fontWeight: '600', color: '#00345C', fontSize: 15, marginLeft: 10 }}>
              Titulo
            </Text>
            <Bola />
            <Text style={{ fontWeight: '600', color: '#00345C', fontSize: 15, marginLeft: 60 }}>
              nome de usuario
            </Text>
            <Text style={{ fontWeight: '600', color: '#9397A0', fontSize: 15, marginLeft: 60 }}>
              00/00/0000
            </Text>
          </Quadrado>
        </Seguindo>

        <Recente>
          <Text style={{ fontWeight: 'bold', color: '#00345C', fontSize: 17 }}>
            Recentes
          </Text>
          <Retangulo>
            <ImageView>
              <Text style={{ fontWeight: '600', color: '#00345C', fontSize: 15, position: 'absolute', left: 20 }}>
                images
              </Text>
            </ImageView>

            <Text style={{
              fontWeight: '600', color: '#00345C', fontSize: 15, position: 'absolute', left: 200, top: 50
            }}>
              texto
            </Text>
          </Retangulo>
        </Recente>

        <Menu>
          <Icone name="home" size={30} color="#00345C" />
          <Button onPress={() => navigation.navigate('CriarPost')}>
            <ButtonPost>
              <Icone name="edit" size={30} color="#00345C" style={{ position: 'absolute', left: 10 }} />
              <TextPost>Criar Post</TextPost>
            </ButtonPost>
          </Button>
          <Icone name="book" size={30} color="#00345C" />
        </Menu>
      </Body>
    </ScrollView>
  );
};

export default Feed;
