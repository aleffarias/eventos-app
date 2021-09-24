import React, { useEffect, useState } from "react"
import { Btn } from "../../components/common/Btn";
import BtnText from "../../components/common/Btn/BtnText";
import api from "../../services/Api";
import { DataProps } from "../Home";

import { Container, ContainerContent, Title } from "../styles";
import { 
    ConatinerUser,
    ContainerInfo, 
    Image, 
    Username, 
    Email,
    ContainerOptions, 
    ContainerBtn,
} from "./styles";

interface UsersProps {
    id: number
    username: string
    email: string
    image: string
    myEvents: Array<DataProps>
  }

const Profile = () => {
    const [users, setUsers] = useState<UsersProps>({} as UsersProps);

     async function loadingUsers() {
         await api.get('/users').then(response => {
            const dataUsers:UsersProps[] = response.data
            if (dataUsers) setUsers(dataUsers[0])
        })
      }

    useEffect(() => {
        loadingUsers()
    }, [])

    return (
        <Container>
            <ContainerContent>
                <Title>Meu Perfil</Title> 

                <ConatinerUser>
                    <Image 
                        source={{uri: "https://avatars.githubusercontent.com/u/36940969?v=4"}}
                        />
                     <ContainerInfo>
                        <Username>{users.username}</Username>
                        <Email>{users.email}</Email>
                    </ContainerInfo>

                    
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