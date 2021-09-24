import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Colors from "../../../styles/Colors";
import { MaterialCommunityIcons  } from "@expo/vector-icons/";

interface ButtonProps {
    color?: string
}

export const Container = styled.View`
    justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
    flex-direction: row;
    width: auto;
    height:  ${RFValue(48)}px;
    margin: 8px 0px 32px 0px;

    border-radius: 8px;
    justify-content: center;
    align-items: center;
    background-color:  ${ 
        props => props.color === "blue" ? Colors.tertiary : Colors.primary
    };
`;

export const ButtonBrand = styled.TouchableOpacity`
    flex-direction: row;
    width: ${RFValue(110)}px;
    height:  ${RFValue(28)}px;
    border-radius: 8px;
    background-color: ${Colors.brand1};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text<ButtonProps>`
    color: ${Colors.white};
    font-size:  ${ props => props.color === "blue" ? RFValue(16) : RFValue(10)}px;
    font-weight: bold;
`;

export const ButtonCamera = styled.TouchableOpacity`
    width: auto;
    height:  ${RFValue(128)}px;
    margin: 26px 0px 24px 0px;

    border-radius: 8px;
    border-width: 1px;
    border-style: dashed;
    border-color: ${Colors.white};
    background-color: ${Colors.background[100]};
    justify-content: center;
    align-items: center;
`;

export const IconButton = styled(MaterialCommunityIcons )`
    color: ${Colors.white};
`;

export const BtnOptions = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Options = styled.Text`
    color: ${Colors.white};
    font-size: ${RFValue(16)}px;
    font-weight: normal;
`;
