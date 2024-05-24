import styled from "styled-components";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

export const ImageView = styled.View`
    align-items: center;
    justify-content: flex-end;
    height: ${height * .2}px;
`
export const Body = styled.View`
    height: ${height * .7}px;
    align-items: center;
    justify-content: center;
    gap: 20px;
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
export const ForgotText = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 14px;
    margin-top: 20px;
    color: #1F41BB;
`
export const Button = styled.TouchableOpacity`
    height: 57px;
    width: ${width * .8}px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    border-radius: 10px;
    background-color: #35B6B4;
`
export const ButtonText = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 20px;
    color: white;
`
export const RegisterButon = styled.TouchableOpacity`
    height: 57px;
    width: ${width * .8}px; 
    margin-top: -10px;
    align-items: center;
    justify-content: center;
`
export const Text = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 14px;
    color: #494949;
`



