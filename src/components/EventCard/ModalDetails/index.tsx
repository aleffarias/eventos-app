import React from 'react'
import { BtnBrand } from '../../common/Btn';
import { useCart } from "../../../hooks/useCart";
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
        real: number,
        centavo: string
    }
}

const ModalDetails = ({data}:EventCardProps) => {
    const { add } = useCart()

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
                                {data.real}
                            </PriceReal>
                            <Price>
                                ,{data.centavo}
                            </Price>
                        </ContainerPrice>

                        <ContainerButton>
                            <BtnBrand title="Comprar Ticket" onPress={() => {add(data)}} />
                        </ContainerButton>
                    </ContainerBuy>

                </ContainerContent>

            </ContainerModal>
        </Container>

    )
}

export default ModalDetails;