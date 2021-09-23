import React, { useState } from 'react'
import { TextInputProps } from 'react-native';
import Colors from '../../styles/Colors';
import { Container, ContainerSelect, Select, Title } from './styles';

interface InputSelectProps extends TextInputProps {
    title?: string
    placeholder?: string
    onValueChange?: (value: any) => void
    selectedValue?: any
}

const InputSelect = ({title, onValueChange, selectedValue}:InputSelectProps ) => {    
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <ContainerSelect>    
                <Select 
                    mode="dropdown"
                    prompt="Selecione o tipo do evento"
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}  
                >
                    <Select.Item label="Palestra" value="palestra" />
                    <Select.Item label="Feira" value="feira" />
                    <Select.Item label="Conferência" value="conferencia" />
                    <Select.Item label="Simpósio" value="simposio" />
                    <Select.Item label="Congresso" value="congresso" />
                    <Select.Item label="Show" value="show" />
                    <Select.Item label="Eventos esportivos" value="eventos-esportivos" />
                </Select>
            </ContainerSelect>
        </Container>
    )
}

export default InputSelect;