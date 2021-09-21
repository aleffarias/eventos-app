import * as React from "react"
import EventCard from "../components/EventCard"
import Header from "../components/Header";
import { Container, ContainerContent, Subtitle, Title } from "./styles";


const Home = () => {
    return (
        <Container>
            <ContainerContent>
                <Title>
                    Bem vindo.
                </Title>
                <Subtitle>
                    Escolha seus tickets
                </Subtitle>
                <EventCard />
            </ContainerContent>
        </Container>
    )
}

export default Home;