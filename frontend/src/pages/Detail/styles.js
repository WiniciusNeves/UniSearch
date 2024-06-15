import styled from "styled-components/native";
import { Dimensions } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const { height, width } = Dimensions.get('window');

export const Body = styled.View`
  width: ${width * 1}px;
  height: ${height * 0.5}px;
  background-color: black;

`

export const ImageView = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;

`;

export const BackButton = styled.TouchableOpacity`
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 20px;
    border: 1px #BFBFBF;
    align-items: center;
    justify-content: center;
    margin: 20px;
    background-color: #E2E2E2;
`

export const Image = styled.Image`
  width: ${width * 1}px;
  height: ${height * 0.5}px;
  border-radius: 10px;
  object-fit: cover;
  z-index: -1;
`;

export const Arrow = styled(AntDesign)`
  font-size: 25px;
  color: #318280;
  position: fixed;
  z-index: 1;
  `;

export const Icones = styled(AntDesign)`
  font-size: 45px;
  color: #318280;
  margin: 0px 10px ;
  border-radius: 20px;
  background-color: rgba(255,255,255,0.5);
  padding: 10px;
`;

export const Body2 = styled.View`
  background-color: #D9D9D9;
  width: ${width * 1}px;
  height: ${height * 0.56}px;
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  align-items: center;
  position: absolute;
  bottom: 0;
`

export const ScrollView = styled.View`
  
`

