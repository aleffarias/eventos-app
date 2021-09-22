import React from 'react';
import { ButtonProps, Pressable } from 'react-native';
import { Button, Container, Title } from './styles'

interface BtnProps {
    accessibilityLabel?: string
    title: string
    color?: string
    onPress: () => void
}

export const Btn = ( {onPress, accessibilityLabel, title, color}: BtnProps) => {
    return (
        <Container>
            <Button onPress={onPress} accessibilityLabel={accessibilityLabel} >
                <Title>
                    {title}
                </Title>
            </Button>
        </Container>
    )
}