import { Formik } from "formik";
import React from "react";
import InputTxt from "../../components/Forms/InputTxt";
import { Container, ContainerContent, Subtitle, Title } from "../styles";
import RegisterForm from "./RegisterForm";

const Register = () => {
    return (
        <Formik
            initialValues={{ name: '' }}
            onSubmit={values => console.log(values)}
        >
            <Container>
                <ContainerContent>
                    <Title>
                        Cadastre seu Evento.
                    </Title>
                    <Subtitle>
                        Cadastre seu evento
                    </Subtitle>   

                    <RegisterForm />

                </ContainerContent>
            </Container>
        </Formik>
    )
}

export default  Register;