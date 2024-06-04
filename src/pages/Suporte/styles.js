import styled from "styled-components";
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

export const Body = styled.View`
    height: ${height * .9}px;
    background-color: #FCFCFC;
    margin : 0px;
    padding : 0px;
`

export const Container = styled.View`
    background-color: #FCFCFC;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
`

export const Text = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 16px;    
    color: black;
    opacity: 0.43;
    margin-left: 20px;
`

export const Icone = styled(Icon)`
    margin : 0px;
    padding : 0px;
    color: #35B6B4;
    font-size: 40px;
`
