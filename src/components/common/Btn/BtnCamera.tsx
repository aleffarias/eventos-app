import React from 'react';
import { ButtonProps, Pressable } from 'react-native';
import { ButtonCamera, IconButton, Container } from './styles'

interface BtnProps {
    accessibilityLabel?: string
    onPress: () => void
}

export const BtnCamera = ( {onPress, accessibilityLabel}: BtnProps) => {
    return (
        <Container>
            <ButtonCamera onPress={onPress} accessibilityLabel={accessibilityLabel} >
                <IconButton name="camera-plus-outline" size={40} />
            </ButtonCamera>
        </Container>
    )
}