import styled from "styled-components/native";
import Colors from "../styles/Colors";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${Colors.background[100]};
`;

export const ContainerScroll = styled.ScrollView`
    background-color: ${Colors.background[100]};
`;

export const ContainerContent = styled(Container)`
    margin: 20px 32px 0px;
`;

export const Title = styled.Text`
    color: ${Colors.white};
    font-size: ${RFValue(32)}px;
    font-weight: bold;
`;

export const Subtitle = styled.Text`
    color: ${Colors.text.default};
    font-size: ${RFValue(18)}px;
    font-weight: normal;
    margin: 8px 0px 24px 0px;

`;