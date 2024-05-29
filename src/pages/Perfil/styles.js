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
    justify-content: space-between;
    background-color: #FCFCFC;
    margin : 0px;
    padding : 0px;
    align-items: start;
    Flex-direction: row;
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
    color: #00345C;
    font-size: 30px;
`
export const ScrollViewBaixo = styled.ScrollView`
    height: ${height * .1}px;
    margin-top : -50px;
    overflow: scroll;

`
export const Quadrado = styled.View`
    height: ${height * .15}px;
    width: ${width * .9}px;
    background-color: #E4ECF2;
    margin-left: 20px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;

export const QuadradoMaior = styled.View`
    height: ${height * .25}px;
    width: ${width * .9}px;
    background-color: #E4ECF2;
    margin-left: 20px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;
