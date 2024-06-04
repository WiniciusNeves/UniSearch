import styled from "styled-components";
import { Dimensions } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
    height: ${height * 1}px;
`
export const Header = styled.View`
    margin: 20px 10px;
    flex-direction: row;
    align-items: center;
`
export const ViewBack = styled.View`
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 20px;
    border: 1px #35B6B4;
    align-items: center;
    justify-content: center;
`
export const Arrow = styled(AntDesign)`
    font-size: 25px;
    color: #35B6B4;
`
export const TitleView = styled.View`
    margin-right: 70px;
    align-items: center;
    width: ${width * 0.7}px;
`
export const Title = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 18px;
    color: #00345C;
`
export const Body = styled.View`
    align-items: center;
    margin-top: 30px;
`
export const InfoView = styled.View`
    align-items: center;
    width: ${width * 0.9}px;
`
export const Info = styled.Text`
    font-family: 'Poppins-Medium';
    font-size: 14px;
    color: #19202D;
    text-align: center;
`
export const IconsView = styled.View`
    flex-direction: row;
    gap: 20px;
    margin-top: 20px;
`
export const ViewIcons = styled.TouchableOpacity`
    width: ${width * 0.15}px;
    height: ${height * 0.07}px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: #00345C;
`
export const Phone = styled(Feather)`
    font-size: 25px;
    color: white;
`
export const Whatsapp = styled(FontAwesome)`
    font-size: 30px;
    color: white;
`
export const InfoHour = styled.View`
    margin-top: 40px;
    align-items: center;
    width: ${width * 0.65}px;
`
