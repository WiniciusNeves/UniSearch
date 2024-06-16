import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/AntDesign';

const { height, width } = Dimensions.get('window');

export const Body = styled.View`
    height: ${height * 0.4}px;
    background-color: #d6d6d6;
`;

export const Body2 = styled.View`
    width: 100%;
    height: ${height * 0.8}px;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-top-left-radius: 34px;
    border-top-right-radius: 34px;
    position: absolute;
    bottom: 0;
`;

export const ImageView = styled.View`
    align-items: center;
    justify-content: center;    
    margin-left: 20px;
`;

export const Icone = styled(Icon)`
    font-size: 25px;
    color: #35B6B4;
`