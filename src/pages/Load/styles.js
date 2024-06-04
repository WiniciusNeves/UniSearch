import styled from "styled-components";
import { Dimensions } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
`
export const ImageView = styled.View`
    align-items: center;
    justify-content: flex-end;
    height: ${height * .2}px;
`
export const Body = styled.View`
    height: ${height * .5}px;
    align-items: center;
`
export const TextView = styled.View`
    width: ${width * .75}px;
    align-items: center;
`
export const Text = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 24px;
    text-align: center;
    color: #00345C;
`
export const ButtonView = styled.View`
    height: ${height * .2}px;
    justify-content: flex-end;
`
export const Button = styled(LinearGradient).attrs({
    colors: ['#00345C', '#35B6B4'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0.37, 1],
})`
    height: 57px;
    width: ${width * .75}px;
    background-color: purple;
    justify-content: center;
    align-items: center;
    border-radius: 10px
`
export const TextButton = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: 20px;
    color: white;
`