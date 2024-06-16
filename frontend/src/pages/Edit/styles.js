import styled from "styled-components";
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

export const Body = styled.View`
    height: ${height * 1}px;
    background-color: #E2E2E2;
`;
