import { useState,useEffect } from 'react';
import styleDefault from './Style';
import {ScrollView, View, Text, TextInput,TouchableOpacity, Alert} from 'react-native';
import 'react-native-gesture-handler';
import axios from 'axios';

const LoginScreen =({navigation})=>{
    const[isAccept,setAccept]=useState(true);
    const[phone,setPhone]=useState('');
    const[password,setPassword] = useState('');
    useEffect(()=>{
        LoginFunction();
    },[]);
    const LoginFunction=()=>{
        const path='https://kami-backend-5rs0.onrender.com/auth';
        axios.post(path,{
            Phone:phone,
            password:password,
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error;
            }
            return res.json();
        })
        .then((data)=>{
            setAccept(data)
            console.log(data);
        })
        .catch((error)=>{
            console.log(error);
        });
    };
    const HandleLogin=()=>{
        if(isAccept){
            navigation.navigate('Home');
        }else{
            Alert.alert('Phone or password is uncorrect.');
        }
    }
    return(
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style= {styleDefault.container}>
            <Text style={styleDefault.title}>
                Login
            </Text>
            <TextInput style={styleDefault.input} keyboardType="numeric" placeholder="Phone" onChangeText={newText=>setPhone(newText)}
            />
            <TextInput style={styleDefault.input} placeholder="Password" onChangeText={newText=>setPassword(newText)}
            secureTextEntry/>
            <TouchableOpacity style={styleDefault.button} onPress={()=>HandleLogin()}>
                <Text style={styleDefault.buttonText}>Login</Text>
            </TouchableOpacity>      
        </View>
    </ScrollView>
    );
};
export default LoginScreen;