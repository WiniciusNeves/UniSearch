import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');


export const Body = styled.View`
  margin : 0px;
  padding : 0px;
  height: ${height * 1}px;
  background-color: #E2E2E2;
`;

export const ImageView = styled.View`
  align-items: center;
  justify-content: space-between;
  height: ${height * .2}px;
  margin : 30px;
`


export const Icone = styled(Icon)`
  margin : 0px;
  padding : 0px;
  color: #00345C;
  font-size: 30px;
`

export const Input = styled.TextInput`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  height: 64px;
  width: ${width * .9}px;
  border-radius: 30px;
  background-color: #E4ECF2;
  color: #626262;
  position: fixed;
  top: -150px;
  left: ${width * .05}px;
`
export const ScrollView = styled.ScrollView`
  position: absolute;
  top: ${height * .2}px;
  left: ${width * 0.05}px;
  right: ${width * 0.02}px;
  overflow: scroll;
  flex: 1;
  paddingHorizontal: ${width * 0.05}px;
  max-width: ${width * .9}px;
`
export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;

`

export const Text = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: black;
  opacity: 0.43;
`
export const Button = styled.TouchableOpacity`
`;

export const Element = styled.View`
  height: 30px;
  width: 180px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-right: 25px;


`

export const ScrollViewBaixo = styled.ScrollView` 
 position: fixed;
  top: ${height * -.05}px;
  height: ${height * .9}px;
  width: ${width * 1}px;

  overflow: scroll;
  flex: 1;

`

export const Quadrado = styled.View`
  width: ${width * 0.55}px;
  height: ${height * 0.3}px;
  border-radius: 30px;
  background-color: #E4ECF2;
  margin-left: ${width * 0.05}px;
`
export const Bola = styled.View`
  width: ${width * 0.09}px;
  height: ${height * 0.04}px;
  background-color: white;
  z-index: 3;
  position: absolute;
  top: ${height * 0.24}px;
  left: ${width * 0.02}px;
  border-radius: 50px;
  margin-left: 10px;
`;
export const Recentes = styled.View`
`;

export const Retangulo = styled.View`
  width: ${width * 0.8}px;
  height: ${height * 0.08}px;
  margin-top: ${height * 0.02}px;
  margin-left: ${width * 0.08}px;
  border-radius: 30px;
  background-color: #E4ECF2;
  align-items: center;
  justify-content: center;
  border: 2px solid #E4ECF2;
  flex-direction: row;
`;

export const Menu = styled.View`
background-color: black;
  width: ${width * 1}px;
  height: ${height * 0.15}px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  z-index: 3;
`;
