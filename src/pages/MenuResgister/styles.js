import styled from "styled-components";
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

export const Body = styled.View`
    height: ${height * .5}px;
    background-color: #E2E2E2;
`
export const Body2 = styled.View`
    width: 100%; 
    height: ${height * .5}px;
    border-top-left-radius: 34px;
    border-top-right-radius: 34px;
    align-items: center;
    position: absolute;
    bottom: 0;
    z-index: 1;
    background-color: white;
`
export const BackButton = styled.TouchableOpacity`
    height: 50px;
    width: ${width * .12}px;
    margin: 20px;
    align-items: left;
    justify-content: center;
    border-radius: 20px;
    border: 2px solid #35B6B4;

`
export const Icones = styled(Icon)`
    font-size: 37px;
    color: #606060;
`

export const ImagenView = styled.View`
    align-items: flex-end;
    justify-content: flex-end;
    height: ${height * .33}px;
    margin : 30px;
`

export const Selecione = styled.View`
    width: ${width * .8}px;
    height: ${height * .10}px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #E4ECF2;
    position: absolute;
    top: 100px;
`
