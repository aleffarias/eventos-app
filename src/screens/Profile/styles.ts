import styled from "styled-components/native";
import Colors from "../../styles/Colors";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons  } from "@expo/vector-icons/";

export const ConatinerUser = styled.View`
    flex: 1;
    flex-direction: row;

    margin-top: 32px; 
`;

export const Image = styled.Image`
    width: ${RFValue(80)}px;
    height: ${RFValue(80)}px;
    
    border-radius: 100px;
`;

export const Username = styled.Text`
    color: ${Colors.white};
    font-size: ${RFValue(20)}px;
    font-weight: bold;

    margin: 8px 0px 0px 24px;
`;

export const ContainerOptions = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${Colors.background[300]};
    
    border-radius: 8px;
    margin: 32px 0px 32px 0px;
    padding: 16px;
`;

export const ContainerBtn = styled.View`
    flex: 1;
    justify-content: center; 

    margin: 24px 0px 16px 0px;
`;