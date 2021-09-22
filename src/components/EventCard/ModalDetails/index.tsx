import React from 'react'
import { Btn } from '../../common/Btn';

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
        title: string,
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
                        Lorem Ipsum dolor
                    </TitleContentModal>
                    <SubtitleContent>
                        Lorem ipsum urna tempor ornare urna quisque blandit nisi, nunc vitae in integer aliquam mattis 
                        justo porttitor eros, condimentum nec libero pharetra proin commodo per. ut donec vel tortor 
                        pellentesque nunc leo praesent.
                        Lorem ipsum urna tempor ornare urna quisque blandit nisi, nunc vitae in integer aliquam mattis 
                        justo porttitor eros, condimentum nec libero pharetra proin commodo per. ut donec vel tortor 
                        pellentesque nunc leo praesent. 
                    </SubtitleContent> 

                    <ContainerBuy>
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
                    </ContainerBuy>

                </ContainerContent>

            </ContainerModal>
        </Container>

    )
}

export default ModalDetails;