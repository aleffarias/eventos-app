import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Colors from "../../styles/Colors";

export const Container = styled.View`
    flex-direction: row;
    width: auto;
    height:  ${RFValue(120)}px;
    margin: 16px 0px 16px 0px;
    border-radius: 8px;
    background-color: ${Colors.background[200]};
`;

export const Modal = styled.TouchableOpacity`
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`;

export const Image = styled.Image`
    width: ${RFValue(120)}px;
    height: ${RFValue(120)}px;

`;

export const ContainerContent = styled.View`
    flex: 1;
    margin: 8px 8px 8px 21px;
`;

export const TitleContent = styled.Text`
    color: ${Colors.white};
    font-size:  ${RFValue(14)}px;
    font-weight: bold;
`;

export const SubtitleContent = styled.Text`
    color: ${Colors.text.default};
    font-size:  ${RFValue(10)}px;
    font-weight: normal;
`;

export const ContainerPrice = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin: 0px 26px 0px 0px;
`;

export const Price = styled.Text`
    color: ${Colors.text.light};
    font-size:  ${RFValue(10)}px;
    font-weight: bold;
`;

export const PriceReal = styled(Price)`
    font-size:  ${RFValue(22)}px;
`;

export const ContainerButton = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin: 8px 12px 0px 0px; 
`;