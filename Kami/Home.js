import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import 'react-native-gesture-handler';


const Home=({navigation})=>{
    const [data,setData] = useState([]);
    
    const getData=()=>{
        const path='https://kami-backend-5rs0.onrender.com/services/';
        fetch(path)
        .then((res)=>{
            if(!res.ok){
                throw new Error;
            }
            return res.json();
        })
        .then((d)=>{
            setData(d);
            console.log(d);
        })
        .catch((error)=>{
            console.log(error);
        });
        
    };
    
    useEffect(()=>{
        getData();
        console.log(data);
    });
    return(
        <View style={styles.container}>
            <View style={styles.containerAdd}>
                <Text style={styles.title}>
                    Danh sách dịch vụ
                </Text>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Add_Service')}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View> 
            <FlatList
                data={data}
                renderItem={({item})=>(
                    <TouchableOpacity style={styles.containList} onPress={()=>navigation.navigate('ServiceDetail',({data :item,}))}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>{item.price}d</Text>
                    </TouchableOpacity>
                )}
                />
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        margin: 5,
    },
    containerAdd:{
        
        marginTop:100,
        flexDirection:'row',
        justifyContent:'space-between',
    },  
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginVertical:10,
    },
    button:{
        backgroundColor:'#EF506B',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        padding:0,
        borderRadius:50,
        height:30,
        width:30
    },
    textButton:{
        color:'white',
        fontWeight:'bold',
        fontSize:25,
    },
    containList:{
        flex:1,
        margin:5,
        flexDirection:'row',
        borderRadius:10,
        alignItems:'center',
        padding:10,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'#EF506B',
        justifyContent:'space-between',
    },
    name:{
        fontWeight:'bold',
        marginLeft:0,
        color:'white',
    },
    price:{
        color:'white',
        marginRight:0,
    },
});
export default Home;