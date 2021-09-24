import React, { useState, useEffect } from "react";
import { Platform, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Formik } from "formik";
import api from "../../services/Api";
import uuid from 'react-native-uuid';
import * as ImagePicker from 'expo-image-picker';

import { Btn } from "../../components/common/Btn";
import InputTxt from "../../components/Forms/InputTxt";
import InputSelect  from "../../components/Forms/InputSelect";
import { BtnCamera } from "../../components/common/Btn/BtnCamera";


const RegisterForm = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        
        // Get permissions media library
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

    async function submitEvents(values) {
        
        values.image = image

        await api.post('/events', values)
        setImage(null)
        console.log(values)
      }

    const chooseImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        //console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    return (
        <ScrollView>
            <Formik
                initialValues={{
                    id: uuid.v4(), 
                    name: '',
                    description: '',
                    price: '',
                    type: '',
                    image: '', 
                }}
                onSubmit={(values, actions) => {
                    console.log(values)
                    submitEvents(values)
                    actions.resetForm({ 
                        values: {
                            id: uuid.v4(),
                            name: '',
                            description: '',
                            price: '',
                            type: '',
                            image: '', 
                        }
                    })
                }
            }
            >
                
                {({ handleChange, handleSubmit, values }) => (
                <View>
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

                    <BtnCamera onPress={chooseImage} />

                    <Btn onPress={handleSubmit} title="Enviar" color="blue" />

                </View>
            )}
            
            </Formik>
        </ScrollView>
    )
}

export default RegisterForm;