import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Colors from "../../../styles/Colors";

export const Container = styled.TouchableWithoutFeedback`
`;

export const ContainerModal = styled.View`
    min-width: 85%;
    margin: 32px;
    border-radius: 8px;
    background-color: ${Colors.background[300]};
    opacity: 1;
`;

export const ContainerContent = styled.View`
    margin: 16px;
`;

export const ContainerTitles = styled.View`
    margin: 16px;
`;

export const ModalContainer = styled.View`

`;

export const ModalImage = styled.Image`
    width: 100%;
    height: ${RFValue(130)}px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const TitleContentModal = styled.Text`
    color: ${Colors.white};
    font-size:  ${RFValue(18)}px;
    font-weight: bold;
`;

export const ContainerBuy = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 8px 0px 8px
`;