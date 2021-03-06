import React, { useState } from "react"
import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../utils/Format";
import { BtnBrand } from "../common/Btn";
import ModalDetails from "./ModalDetails";

import { 
    Container, 
    ContainerContent, 
    ContainerPrice,
    ContainerContentPrice, 
    Image, 
    ContainerImage, 
    Price, 
    PriceReal, 
    SubtitleContent, 
    TitleContent, 
    Modal,
    OutsideModal
} from "./styled";

interface EventCardProps {
    data: {
        name: string,
        description: string,
        price: number,
        type: string
        image: string,
        real: number,
        centavo: string
    }
    isButton?: boolean
}

 const EventCard = ({ data, isButton }: EventCardProps) => {
    const [ showModal, setShowModal ] = useState(false)
    const { add } = useCart()

    const real = Math.floor(data.price * 100 / 100)  
    const centavoAux = formatNumber(data.price)
    const centavo = centavoAux.slice( centavoAux.length - 2 , centavoAux.length)
    data.real = real,
    data.centavo = centavo


    return (
        <Container>
            <ContainerImage onPress={() => {setShowModal(!showModal)}}>
                <Image 
                    source={{uri: data.image}}
                    isButton={isButton}
                />
            </ContainerImage>

            <ContainerContent>
                <TitleContent>
                    {data.name}
                </TitleContent>

                { isButton === true &&
                    <SubtitleContent 
                        numberOfLines={2}
                        ellipsizeMode='tail'
                    >
                        {data.description}
                    </SubtitleContent>
                }
                
                <ContainerPrice isButton={isButton} >
                    <ContainerContentPrice>
                        <Price>
                            R$
                        </Price>
                        <PriceReal>
                            {real}
                        </PriceReal>
                        <Price>
                            ,{centavo}
                        </Price>
                    </ContainerContentPrice>

                    { isButton === true &&
                    
                        <BtnBrand title="Comprar Ticket" onPress={() => {add(data)}} />
                    }

                </ContainerPrice>

            </ContainerContent>

            <Modal
                transparent={true}
                visible={showModal}
                onRequestClose={() => {setShowModal(!showModal)}}
            >
                <OutsideModal activeOpacity={0} onPress={() => {setShowModal(false)}} >
                    <ModalDetails data={data} isButton={true} />
                </OutsideModal>
            </Modal>

        </Container>
    )
}

export default EventCard;
