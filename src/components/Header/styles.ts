import styled from "styled-components/native";
import Colors from "../../styles/Colors";

export const SafeArea = styled.SafeAreaView`
    flex: 1;
`;

export const Container = styled.View`
    height: 75px;
    width: 100%;
    background-color: ${Colors.background[300]};
`;

export const Title = styled.Text`
    font-size: 10px;
`;