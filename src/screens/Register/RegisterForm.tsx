import { Formik } from "formik";
import React, { useState } from "react";
import { Btn } from "../../components/common/Btn";
import InputTxt from "../../components/Forms/InputTxt";
import InputSelect  from "../../components/Forms/InputSelect";
import { Container } from "./styles";
import { BtnCamera } from "../../components/common/Btn/BtnCamera";
import CameraInput from "../../components/CameraInput";


const RegisterForm = () => {
    return (
        <Formik
            initialValues={{ 
                name: '',
                description: '',
                price: '',
                type: '', 
            }}
            onSubmit={values => console.log(values)}
        >
            
            {({ handleChange, handleSubmit, values }) => (
            <Container>
                <InputTxt 
                    title="Nome"
                    placeholder="Digite seu nome"

                    onChangeText={handleChange('name')}
                    value={values.name}
                />

                <InputTxt
                    title="Descrição"
                    placeholder="Insira a descrição do evento"
                    isLongText
                    multiline={true}
                    numberOfLines={4} 

                    onChangeText={handleChange('description')}
                    value={values.description}
                />

                <InputTxt
                    title="Preço do ticket"
                    placeholder="R$ 99,99"
                    isNumeric

                    onChangeText={handleChange('price')}
                    value={values.price}
                />

                <InputSelect 
                    title="Tipo"
                    onValueChange={handleChange('type')}
                    selectedValue={values.type}
                />

                <BtnCamera onPress={() => { <CameraInput />}} />

                <Btn onPress={handleSubmit} title="Enviar" color="blue" />

            </Container>
        )}
        
        </Formik>
    )
}

export default RegisterForm;