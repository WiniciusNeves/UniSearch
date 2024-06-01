import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');

export const Body = styled.View`
    width: ${width * 1}px;
    height: ${height * 0.9}px;
    background-color: #E2E2E2;
`

export const Icone = styled(Icon)`
    margin : 0px;
    padding : 0px;
    color: #00345C;
    font-size: 40px;
`

export const Icone2 = styled(Icon2)`
    margin : 0px;
    padding : 0px;
    color: #00345C;
    font-size: 40px;
`
export const ImageView = styled.View`
    align-items: center;
    justify-content: space-between;
    height: ${height * .2}px;
    margin : 30px;
    position: absolute;
    top: 200px;
`

export const Apa = styled.View`
    align-items: center;
    height: ${height * .3}px;
    width: ${width * 1}px;
    position: absolute;
    bottom: -60px;
    background-color: white;
    border-top-left-radius: 34px;
    border-top-right-radius: 34px;
    elevation: 22;
`

export const Text = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 16px;
    color: black;
    opacity: 0.43;
`
export const Button = styled.TouchableOpacity`
    
`;

export const LeadMore = styled.View`
    background-color: #E4ECF2;
    width: ${width * 1}px;
    height: ${height * 0.20}px;
    position: absolute;
    bottom: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    z-index: 1;
    border-top-left-radius: 34px;
    border-top-right-radius: 34px;


`;


export const ButtonText = styled.View`
display: block;
    height: 57px;
    width: ${width * .8}px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    border-radius: 40px;
    border: 2px solid #000000;    
`;