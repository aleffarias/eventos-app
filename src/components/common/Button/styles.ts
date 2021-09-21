import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Colors from "../../../styles/Colors";

export const Container = styled.View`
    justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    width: ${RFValue(110)}px;;
    height:  ${RFValue(28)}px;
    border-radius: 8px;
    background-color: ${Colors.brand1};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${Colors.white};
    font-size:  ${RFValue(10)}px;
    font-weight: bold;

`;