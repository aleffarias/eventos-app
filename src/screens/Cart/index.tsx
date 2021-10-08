import React from 'react'
import { Alert } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { RootTabScreenProps } from '../../../types';

import { BtnBrand } from '../../components/common/Btn';
import EventCard from '../../components/EventCard';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../utils/Format';

import { Container, ContainerContent, Title, Subtitle } from '../styles';
import { CenteredView, ModalView, Text, Footer } from './style';

const Cart = ({ navigation }) => {
    const { cart, total, clear } = useCart()
    
    return (
        <Container>
            <ContainerContent>
              <Title>
                  Carrinho
              </Title>
              <Subtitle>
                  Confira os itens do seu carrinho!
              </Subtitle>

                <CenteredView>
                    <FlatList 
                        data={cart}
                        renderItem={({item}) => <EventCard data={item} />}
                        keyExtractor={(item) => item.name}
                        showsVerticalScrollIndicator={false}
                    />
           
                </CenteredView>

            </ContainerContent>

            <Footer>
                <Text>{"Total R$ " + formatNumber(total)}</Text>
                <BtnBrand title="Finalizar" onPress={() => {
                    clear()
                    Alert.alert("Compra realizada com sucesso!")
                    navigation.navigate("Home")
                    }}/>
            </Footer>
        </Container>
    )
}

export default Cart;