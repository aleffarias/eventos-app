import * as React from "react"
import { FlatList } from "react-native-gesture-handler";
import EventCard from "../components/EventCard"
import { Container, ContainerContent, Subtitle, Title } from "./styles";


const Home = () => {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
          image: 'https://cdn.pixabay.com/photo/2017/11/14/05/14/universe-2947500_960_720.jpg'
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
          image: 'https://cdn.pixabay.com/photo/2017/11/14/05/14/universe-2947500_960_720.jpg'
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
          image: 'https://cdn.pixabay.com/photo/2017/11/14/05/14/universe-2947500_960_720.jpg'
        },
        {
            id: '58694a0f-3da1-471f-brewd96-145571e29d72',
            title: 'Third Item',
            image: 'https://cdn.pixabay.com/photo/2017/11/14/05/14/universe-2947500_960_720.jpg'
          },
          {
            id: '58694a0f-3da1-471f-bdqawerqw96-145571e29d72',
            title: 'Third Item',
            image: 'https://cdn.pixabay.com/photo/2017/11/14/05/14/universe-2947500_960_720.jpg'
          },
          {
            id: '58694a0f-3da1-471f-bdfgd96-145571e29d72',
            title: 'Third Item',
            image: 'https://cdn.pixabay.com/photo/2017/11/14/05/14/universe-2947500_960_720.jpg'
          },
          {
            id: '58694a0f-3da1-471f-bfdgd96-145571e29d72',
            title: 'Third Item',
            image: 'https://cdn.pixabay.com/photo/2017/11/14/05/14/universe-2947500_960_720.jpg'
          },
      ];

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
                    data={DATA}
                    renderItem={({item}) => <EventCard data={item} />}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                />     
            </ContainerContent>
        </Container>
    )
}

export default Home;