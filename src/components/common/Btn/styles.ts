import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Colors from "../../../styles/Colors";
import { MaterialCommunityIcons  } from "@expo/vector-icons/";

export const Container = styled.View`
    justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    width: ${RFValue(110)}px;
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

export const ButtonCamera = styled.TouchableOpacity`
    width: auto;
    height:  ${RFValue(128)}px;
    margin: 26px 0px 24px 0px;

    border-radius: 8px;
    border-width: 1px;
    border-style: dashed;
    border-color: ${Colors.white};
    background-color: ${Colors.background[100]};;
    justify-content: center;
    align-items: center;
`;

export const IconButton = styled(MaterialCommunityIcons )`
    color: ${Colors.white};
`;