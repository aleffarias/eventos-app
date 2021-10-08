import styled from 'styled-components/native'
import Colors from '../../styles/Colors';

export const CenteredView = styled.View`
    flex: 1;
    background-color: ${Colors.background[100]};
`;

export const ModalView = styled.View`
    margin: 20px;
    padding: 35px;
    border-radius: 20px;
    align-items: center;
    
    height: 75PX;
    padding: 22px;
    background-color: ${Colors.background[100]};
`;

export const Text = styled.Text`
    color: ${Colors.white} ;
    font-weight: bold;
    text-align: center;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 75PX;
    padding: 22px;
    background-color: ${Colors.background[300]};
`;
