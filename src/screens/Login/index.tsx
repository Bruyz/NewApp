import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from 'react-native';
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { ComponentButtonInterface } from '../../components';
import { LoginTypes } from '../../navigations/login.navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

export function Login({ navigation }: LoginTypes) {
    const [data, setData] = useState<IAuthenticate>();
    async function handleSignIn() {
        if (data?.email && data.password) {
            console.log(data)
        }else{
            Alert.alert("Preencha todos os campos!");
        }
    }
    function handleSignIn(){
        navigation.navigate("Register")
    }
    function handleSignIn(item: IAuthenticate){
        setData({...data, ...item})
    }
    export function Login({navigation}: LoginTypes) {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView>
                    <Text style={styles.tittle}>Login</Text>
                    <View style={styles.formRow}>
                        <MaterialIcons name="email" style={styles.icon}/>
                        <TextInput
                        placeholderTextColor={colors.third}
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(i) => handleChange({email: i})}
                        />
                        </View>
                        <View style={styles.formRow}>
                            <Entypo name="key" style={styles.icon} />
                            <TextInput
                            placeholderTextColor={colors.third}
                            style={styles.input}
                            placeholder="Senha"
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(i) => HashChange({ password: i})}
                            />
                    </View>
                    <ComponentButtonInterface tittle='Login' type='primary' onPressI={handleREgister} />
                    <ComponentButtonInterface tittle='Cadastre-se' type='secondary' onPressI={hnadleREgister} />
                </KeyboardAvoidingView>
            </View>
        );
    }