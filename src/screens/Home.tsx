import React, { useEffect, useState } from "react"
import { FlatList } from "react-native-gesture-handler";
import EventCard from "../components/EventCard"
import { Container, ContainerContent, Subtitle, Title } from "./styles";
import api from "../services/Api"

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
                  keyExtractor={(item, index) => item.id.toString()}
                  showsHorizontalScrollIndicator={false}
              />     
          </ContainerContent>
      </Container>
  )
}

export default Home;