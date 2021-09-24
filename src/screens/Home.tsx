import React, { useEffect, useState } from "react"
import { FlatList } from "react-native-gesture-handler";
import EventCard from "../components/EventCard"
import api from "../services/Api"
import { useCart } from "../hooks/useCart";

import { Container, ContainerContent, Subtitle, Title } from "./styles";
export interface DataProps {
  id: number
  name: string
  description: string
  price: number
  type: string
  image: string
}

const Home = () => {
  const [data, setData ] = useState<DataProps[]>();
  const { cart, total } = useCart();

  async function loadingEvents() {
    await api.get('/events').then(response => {
      setData(response.data)
    })
  }

  useEffect(() => {
    loadingEvents()
  }, [])

  return (
      <Container>
          <ContainerContent>
              <Title>
                  Bem vindo.
              </Title>
              <Subtitle>
                  Escolha seus tickets
              </Subtitle>

              <FlatList 
                  data={data}
                  renderItem={({item}) => <EventCard data={item} />}
                  keyExtractor={(item) => item.id.toString()}
                  showsVerticalScrollIndicator={false}
              />     
          </ContainerContent>
      </Container>
  )
}

export default Home;