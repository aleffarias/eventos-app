import React from "react"
import {  
    BtnOptions,
    Options, 
    MeterialIcon
} from "./styles";

interface BtnTextProps {
    titleOptions: string
    onPress: () => void
}

const BtnText = ({titleOptions, onPress}: BtnTextProps) => {
    return (
        <BtnOptions onPress={onPress}>
            <Options>{titleOptions}</Options>
            <MeterialIcon name="chevron-right" size={16} />
        </BtnOptions>
)
}

export default BtnText;