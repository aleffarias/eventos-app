import * as React from "react"
import { Btn } from "../common/Button";
import { Button } from "react-native";

import { 
    Container, 
    ContainerButton, 
    ContainerContent, 
    ContainerPrice, 
    Image, 
    Modal, 
    Price, 
    PriceReal, 
    SubtitleContent, 
    TitleContent 
} from "./styled";

 const EventCard = () => {
    return (
        <Container>
            <Modal>
                <Image 
                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />
            </Modal>

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
                    <Btn title="Comprar Ticket" onPress={() => {}} />
                </ContainerButton>

            </ContainerContent>
        </Container>
    )
}

export default EventCard;
