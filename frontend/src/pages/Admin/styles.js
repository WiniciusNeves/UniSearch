import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

export const Body = styled.View`
    width: ${width * 1}px;
    height: ${height * 0.9}px;
    background-color: #E2E2E2;
`

export const Icones = styled(Icon)`
    margin : 0px;
    padding : 0px;
    color: #00345C;
    font-size: 40px;
`
export const ImageView = styled.View`
    align-items: center;
    justify-content: center;
    height: ${height * .04}px;
    margin : 30px;
    padding : 0px;
`

