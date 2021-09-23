import React from 'react'
import { BtnBrand } from '../../common/Btn';

import { 
    ContainerButton, 
    ContainerPrice, 
    Price, 
    PriceReal,  
    SubtitleContent 
} from '../styled';

import { 
    ContainerModal, 
    ContainerContent, 
    ModalImage, 
    TitleContentModal, 
    ContainerBuy,
    Container,
    ModalContainer,  
} from './styles';

interface EventCardProps {
    data: {
        name: string,
        description: string,
        price: number,
        type: string
        image: string,
    }
}

const ModalDetails = ({data}:EventCardProps) => {
    return (
        <Container>
            <ContainerModal>
                <ModalContainer>
                    <ModalImage 
                        source={{uri: data.image}}
                    />
                </ModalContainer>

                <ContainerContent>
                    <TitleContentModal>
                        {data.name}
                    </TitleContentModal>
                    <SubtitleContent>
                        {data.description}
                    </SubtitleContent> 

                    <ContainerBuy>
                        <ContainerPrice>
                            <Price>
                                R$
                            </Price>
                            <PriceReal>
                                {data.price}
                            </PriceReal>
                            <Price>
                                ,99
                            </Price>
                        </ContainerPrice>

                        <ContainerButton>
                            <BtnBrand title="Comprar Ticket" onPress={() => {console.log(data.name)}} />
                        </ContainerButton>
                    </ContainerBuy>

                </ContainerContent>

            </ContainerModal>
        </Container>

    )
}

export default ModalDetails;