
import {  useState } from 'react';
import {StyleSheet,View,Text, Alert, TouchableOpacity,TextInput} from 'react-native';


const Add_Service=()=>{
    const [name,setName]= useState('');
    const [price,setPrice] = useState('');
    
    const handleAdd=()=>{
        const path='https://kami-backend-5rs0.onrender.com/services';
        fetch(path,{
            method:"POST",
            
            body:JSON.stringify({
                name:name,
                price:price,
            }),
        })
        .then((res)=>{
            Alert.alert("Add Successfully")
            return res.json();
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.log(error)
        })
        ;
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Service Name*
            </Text>
            <TextInput style={styles.input} onChangeText={newText=>setName(newText)}/>
            <Text style={styles.title}>
                Price*
            </Text>
            <TextInput style={styles.input} onChangeText={newText=>setPrice(newText)}/>
            <TouchableOpacity style={styles.button} onPress={()=>handleAdd()}>
                <Text style={styles.textButton}>Add</Text>
            </TouchableOpacity>
        </View>
    )
};
const styles=StyleSheet.create({
    container:{
        margin:10,
        flex:1,
    },
    title:{
        margin:5,
        fontWeight:'bold',
        fontSize:18,
    },
    input:{
        backgroundColor:'#d3dbe8',
        padding:10,
        marginLeft:5,
        borderRadius:10,
    },
    button:{
        backgroundColor:'#EF506B',
        width:'100%',
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginVertical:20,
        marginLeft:5,
        
    },
    textButton:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    },
});
export default Add_Service;