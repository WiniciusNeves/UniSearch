import styled from "styled-components";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export const Quadrado = styled.View`
  width: ${width * 0.55}px;
  height: ${height * 0.30}px;
  border-radius: 30px;
  background-color: #E4ECF2;
  margin-left: ${width * 0.10}px;
`
export const AlignCircle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px;
`
export const Circle = styled.View`
  width: 38px;
  height: 38px;
  background-color: #A4B3C2;
  z-index: 3;
  border-radius: 100px;
`
export const Text = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: black;
  opacity: 0.43;
`