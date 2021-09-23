import React, { ChangeEvent } from 'react'
import { TextInputProps } from 'react-native';
import Colors from '../../styles/Colors';
import { Container, Input, Title } from './styles';

interface InputTxtProps extends TextInputProps {
    title?: string
    placeholder?: string
    onChangeText?: (value: string) => void
    isNumeric?: boolean
    isLongText?: boolean
}

const InputTxt = ({title, isLongText, placeholder, onChangeText, isNumeric}: InputTxtProps) => {
    return (
        <Container>
            <Title>
                {title}
            </Title>

            <Input
                isLongText={isLongText}
                placeholder={placeholder} 
                onChangeText={onChangeText} 
                keyboardType={isNumeric? "numeric" : "default"} />
        </Container>
    )
}

export default InputTxt;