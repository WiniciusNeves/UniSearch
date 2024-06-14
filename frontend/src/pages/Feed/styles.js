import styled from "styled-components/native";
import { Dimensions } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get('window');

export const Body = styled.View`
  width: ${width * 1}px;
  height: ${height * 1}px;
  background-color: white;
`
export const ImageView = styled.View`
  align-items: center;
  justify-content: space-between;
  height: ${height * .25}px;
  margin : 30px;
`
export const SearchIcon = styled(MaterialIcons)`
  font-size: 30px;
  color: #35B6B4;
`
export const Input = styled.TextInput`
  font-family: 'Poppins-Regular';
  font-size: 14px; 
  height: 64px;
  width: ${width * .9}px;
  border-radius: 30px;
  background-color: #E4ECF2;
  top: -150px;
  left: ${width * .05}px;
`
export const ScrollView = styled.ScrollView`
  position: absolute;
  top: ${height * .25}px;
  left: ${width * 0.02}px;
  overflow: scroll;
  flex: 1;
  paddingHorizontal: ${width * 0.04}px;
  max-width: ${width * .9 }px;
  z-index: 1;
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
export const ScrollViewBaixo = styled.ScrollView` 
  position: fixed;
  bottom: 60px;
  left: 0;
  height: px;
  width: ${width * 1}px;
  overflow: scroll;
  flex: 1;
`
