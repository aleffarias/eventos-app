import { Formik } from "formik";
import React from "react";
import InputTxt from "../../components/Forms/InputTxt";
import { ContainerScroll, ContainerContent, Subtitle, Title } from "../styles";
import RegisterForm from "./RegisterForm";

const Register = () => {
    return (
        <ContainerScroll>
            <ContainerContent>
                <Title>
                    Cadastre seu Evento.
                </Title>
                <Subtitle>
                    Cadastre seu evento
                </Subtitle>   

                <RegisterForm />
            </ContainerContent>
        </ContainerScroll>

    )
}

export default  Register;