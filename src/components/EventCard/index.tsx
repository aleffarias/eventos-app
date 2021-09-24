import React, { useState } from "react"
import { View } from "react-native";
import { BtnBrand } from "../common/Btn";
import ModalDetails from "./ModalDetails";

import { 
    Container, 
    ContainerButton, 
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
    }
}

 const EventCard = ({ data }: EventCardProps) => {
    const [ showModal, setShowModal ] = useState(false)

    const real = Math.floor(data.price * 100 / 100)  
    const centavoAux = data.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    const centavo = centavoAux.slice( centavoAux.length - 2 , centavoAux.length)
    console.log("Real: " + real)
    console.log("CentavoAux: " + centavoAux)
    console.log("Centavo: " + centavo)

    
    return (
        <Container>
            <ContainerImage onPress={() => {setShowModal(!showModal)}}>
                <Image 
                    source={{uri: data.image}}
                />
            </ContainerImage>

            <ContainerContent>
                <TitleContent>
                    {data.name}
                </TitleContent>
                <SubtitleContent 
                    numberOfLines={2}
                    ellipsizeMode='tail'
                >
                    {data.description}
                </SubtitleContent>
                
                <ContainerPrice>
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
                    
                    <BtnBrand title="Comprar Ticket" onPress={() => {console.log(data.name)}} />
                </ContainerPrice>

            </ContainerContent>

            <Modal
                transparent={true}
                visible={showModal}
                onRequestClose={() => {setShowModal(!showModal)}}
            >
                <OutsideModal activeOpacity={0} onPress={() => {setShowModal(false)}} >
                    <ModalDetails data={data} />
                </OutsideModal>
            </Modal>

        </Container>
    )
}

export default EventCard;
