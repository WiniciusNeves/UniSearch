import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Certifique-se de que está importando da biblioteca correta

const { height, width } = Dimensions.get('window');

export const ImageView = styled.View`
  align-items: center;
  height: ${height * 0.2}px;
  margin-top: 20px;
`;

export const Body = styled.View`
  height: ${height * 0.7}px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  top: -350px;
  margin: 0;
  padding: 0;
`;

export const Input = styled.TextInput`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  height: 64px;
  width: ${width * 0.8}px;
  border-radius: 10px;
  padding-left: 20px;
  background-color: #E4ECF2;
  color: #626262;
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${width * 0.8}px;
  overflow: hidden;
`;

export const Element = styled.View`
  padding: 10px;
  background-color: #FFFFFF;
  border-radius: 50px;
  width: ${width * 0.3}px;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;

export const Text = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 12px;
  color: #626262;
`;

export const Button = styled.TouchableOpacity``;

export const Seguindo = styled.View`
  width: ${width * 0.8}px;
`;

export const Quadrado = styled.View`
  width: ${width * 0.55}px;
  height: ${height * 0.3}px;
  background-color: #E4ECF2;
  z-index: 2;
  position: absolute;
  top: ${height * 0.03}px;
  left: 0px;
  border-radius: 10px;
`;

export const Bola = styled.View`
  width: ${width * 0.09}px;
  height: ${height * 0.04}px;
  background-color: white;
  z-index: 3;
  position: absolute;
  top: ${height * 0.25}px;
  left: 0px;
  border-radius: 50px;
  margin-left: 10px;
`;

export const Recente = styled.View`
  position: absolute;
  top: ${height * 0.77}px;
  width: ${width * 0.8}px;
`;

export const Retangulo = styled.View`
  width: ${width * 0.8}px;
  height: ${height * 0.12}px;
  background-color: #E4ECF2;
  position: absolute;
  top: ${height * 0.03}px;
  left: 0px;
  border-radius: 20px;
`;

export const Menu = styled.View`
  position: absolute;
  bottom: -360px;
  width: ${width * 1}px;
  height: ${height * 0.10}px;
  background-color: #e4ecf2;

  z-index: 1;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-direction: row;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Icone = styled(Icon)`
  font-size: 30px;
  color: black;
  margin-right: 10px;
`;

export const ButtonPost = styled.View`
  width: ${width * 0.5}px;
  height: ${height * 0.04}px;
  align-items: center;
  justify-content: left;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  background-color: #35B6B4;

`;

export const TextPost = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 20px;
  color: white;
  margin-left: 10px;
  position: absolute;
  left: 60px;
`;
