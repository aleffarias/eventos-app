import React from 'react';
import { Button, ButtonBrand, Container, Title } from './styles'

interface BtnProps {
    accessibilityLabel?: string
    title: string
    color?: string
    onPress: () => void
}

export const Btn = ( {onPress, accessibilityLabel, title, color}: BtnProps) => {
    return (
        <Container>
            <Button onPress={onPress} accessibilityLabel={accessibilityLabel} color={color} >
                <Title color={color} >
                    {title}
                </Title>
            </Button>
        </Container>
    )
}

export const BtnBrand = ( {onPress, accessibilityLabel, title}: BtnProps) => {
    return (
        <Container>
            <ButtonBrand onPress={onPress} accessibilityLabel={accessibilityLabel} >
                <Title>
                    {title}
                </Title>
            </ButtonBrand>
        </Container>
    )
}