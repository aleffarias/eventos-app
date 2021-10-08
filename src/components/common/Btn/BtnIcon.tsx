import React from 'react';
import { ContainerButtonIcon, ButtonIcon, IoniconsIcon } from './styles'

interface BtnProps {
    onPress: () => void
    accessibilityLabel?: string
    size?: number
}

export const BtnIcon = ( {onPress, accessibilityLabel, size}: BtnProps) => {
    return (
        <ContainerButtonIcon>
            <ButtonIcon onPress={onPress} accessibilityLabel={accessibilityLabel} >
                <IoniconsIcon name="cart-outline" size={size} />
            </ButtonIcon>
        </ContainerButtonIcon>
    )
}