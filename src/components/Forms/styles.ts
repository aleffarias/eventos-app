import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../styles/Colors";
import { TextInputProps } from "react-native";
import {Picker} from '@react-native-picker/picker';

interface InputProps extends TextInputProps {
    isLongText?: boolean
}

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    color: ${Colors.white};
    font-size: ${RFValue(14)}px;
    font-weight: bold;
`;

export const Input = styled.TextInput<InputProps>` 
    height: ${ props => props.isLongText ? RFValue(64) : RFValue(30)}px;
    
    background-color: ${Colors.white};
    border-radius: 8px;
    margin: 8px 0px 8px 0px;
    padding-left: 8px;
`;

export const ContainerSelect = styled.View`
    border-radius: 8px;
`;

export const Select = styled(Picker)` 
    height: ${RFValue(30)}px;
    
    background-color: ${Colors.white};
    border-top-left-radius: 8px;
    margin: 8px 0px 8px 0px;
    padding-left: 8px;
`;