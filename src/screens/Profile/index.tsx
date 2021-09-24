import React, { useEffect, useRef, useState } from "react"
import { Btn } from "../../components/common/Btn";
import BtnText from "../../components/common/Btn/BtnText";
import api from "../../services/Api";
import { DataProps } from "../Home";

import { Container, ContainerContent, Title } from "../styles";
import { 
    ConatinerUser, 
    Image, 
    Username, 
    ContainerOptions, 
    ContainerBtn
} from "./styles";

interface UsersProps {
    id: number
    username: string
    email: string
    image: string
    myEvents: Array<DataProps>
  }

const Profile = () => {
    const [users, setUsers] = useState<UsersProps>();

     function loadingUsers() {
         api.get('/users').then(response => {
            const dataUsers:UsersProps[] = response.data
            if (dataUsers) setUsers(dataUsers[0])
            console.log("2")
        })
      }

    useEffect(() => {
        console.log("1")
        loadingUsers()
    }, [])

    return (
        <Container>
            <ContainerContent>
                <Title>Meu Perfil</Title> 

                <ConatinerUser>
                    <Image 
                        source={{uri: users.image}}
                    />
                    <Username>{users.username}</Username>
                    {console.log("3a")}
                </ConatinerUser>

                <ContainerOptions>
                    <BtnText titleOptions="Meus Eventos" onPress={() => {}}/>
                    <BtnText titleOptions="Meus Ingressos" onPress={() => {}}/>
                </ContainerOptions>
                
                <ContainerBtn>
                    <Btn title="Sair" onPress={() => {}} color="blue" />
                </ContainerBtn>

            </ContainerContent>
        </Container>
    )
}

export default Profile;