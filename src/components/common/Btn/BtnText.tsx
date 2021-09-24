import React from "react"
import {  
    BtnOptions,
    Options, 
    IconButton
} from "./styles";

interface BtnTextProps {
    titleOptions: string
    onPress: () => void
}

const BtnText = ({titleOptions, onPress}: BtnTextProps) => {
    return (
        <BtnOptions onPress={onPress}>
            <Options>{titleOptions}</Options>
            <IconButton name="chevron-right" size={16} />
        </BtnOptions>
)
}

export default BtnText;