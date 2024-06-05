import styled from "styled-components";
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const { height, width } = Dimensions.get('window');

export const Menu = styled.View`
  background-color: #E4ECF2;
  width: ${width * 1}px;
  height: ${height * 0.45}px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: row;
  position: absolute;
  bottom: -260px;
`
export const Icone = styled(Icon)`
  margin : 0px;
  padding : 0px;
  color: #00345C;
  font-size: 30px;
`
export const HomeIcon = styled(AntDesign)`
  color: #00345C;
  font-size: 32px;
  margin-top: 30px;
`
export const ButtonPost = styled.View`
  width: ${width * 0.5}px;
  height: ${height * 0.04}px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  margin-top: 30px;
  background-color: #35B6B4;
`
export const TextPost = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 13px;
  color: white;
  margin-left: 10px;
`
export const Button = styled.TouchableOpacity`
`
export const HamburguerIcon = styled(EvilIcons)`
  color: #00345C;
  font-size: 32px;
  margin-top: 30px;
`
