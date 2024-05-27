import styled from "styled-components";
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

export const Body = styled.View`
    height: ${height * .4}px;
    background-color: #E2E2E2;
`
export const Body2 = styled.View`
    width: 100%; 
    height: ${height * .72}px;
    border-top-left-radius: 34px;
    border-top-right-radius: 34px;
    align-items: center;
    position: absolute;
    bottom: 0;
    z-index: 1;
    background-color: white;
`
export const Circular = styled.View`
    height: 154px;
    width: 154px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -70px;
    z-index: 0;
    background-color: white;
    border-radius: 100px;
    elevation: 10; 
    shadow-color: #000;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.3;
    shadow-radius: 4.65px;
`
export const Icones = styled(Icon)`
    font-size: 37px;
    color: #606060;
`

export const InputView = styled.View`
    height: ${height * .42}px;
    justify-content: flex-end;
    gap: 20px;
    position: absolute;
    top: ${height * .10}px;
   
`
export const Input = styled.TextInput`
    font-family: 'Poppins-Medium';
    font-size: 16px;
    height: 64px;
    width: ${width * .8}px;
    border-radius: 10px;
    padding-left: 20px;
    background-color: #E4ECF2;
    color: #626262;
`
export const Button = styled.TouchableOpacity`
    height: 57px;
    width: ${width * .8}px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    border-radius: 10px;
    background-color: #35B6B4;
    position: absolute;
    top: ${height * .50}px;
`
export const ButtonText = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 20px;
    color: white;
`
export const BackButton = styled.TouchableOpacity`
height: 50px;
width: ${width * .12}px;
margin: 10px;
align-items: left;
justify-content: center;
border-radius: 20px;
border: 2px solid #35B6B4;

`
export const Text = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 16px;
    color: black;
    opacity: 0.43;
`