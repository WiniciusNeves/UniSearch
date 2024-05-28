import styled from "styled-components";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export const Recentes = styled.View`
`
export const Retangulo = styled.View`
  width: ${width * 0.8}px;
  height: ${height * 0.08}px;
  margin-top: ${height * 0.02}px;
  margin-left: ${width * 0.08}px;
  border-radius: 30px;
  background-color: #E4ECF2;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
export const Text = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: black;
  opacity: 0.43;
`