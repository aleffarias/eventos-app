import React, { useState } from "react"
import { Btn } from "../common/Btn";
import ModalDetails from "./ModalDetails";

import { 
    Container, 
    ContainerButton, 
    ContainerContent, 
    ContainerPrice, 
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
        title: string,
        image: string,
    }
}

 const EventCard = ({ data }: EventCardProps) => {
    const [ showModal, setShowModal ] = useState(false)
    
    return (
        <Container>
            <ContainerImage onPress={() => {setShowModal(!showModal)}}>
                <Image 
                    source={{uri: data.image}}
                />
            </ContainerImage>

            <ContainerContent>
                <TitleContent>
                    Lorem Ipsum dolor
                </TitleContent>
                <SubtitleContent>
                    Lorem Ipsum dolor
                </SubtitleContent>
                
                <ContainerPrice>
                    <Price>
                        R$
                    </Price>
                    <PriceReal>
                        99
                    </PriceReal>
                    <Price>
                        ,99
                    </Price>
                </ContainerPrice>

                <ContainerButton>
                    <Btn title="Comprar Ticket" onPress={() => {console.log(data.title)}} />
                </ContainerButton>

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
