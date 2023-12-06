import React from "react";
import LoginScreen from "./Kami/Login";
import Home from "./Kami/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ServiceDetail from "./Kami/ServiceDetail";
import 'react-native-gesture-handler';
import Add_Service from "./Kami/AddService";


const Stack = createStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
        <Stack.Navigator
    initialRouteName="Login"
    screenOptions={
      {
        headerShown:true,
        headerStyle:{backgroundColor:'#EF506B',borderBottomEndRadius:10,height:75},
        headerTitleStyle:{color:'white',fontSize:25,fontWeight:'bold'}
      }

    }
    >   
        <Stack.Screen
        name="Login" component={LoginScreen} />
        <Stack.Screen
        name ='Home' component={Home} options={{title:"Huyền Trinh"}}/>

        <Stack.Screen 
        name ='ServiceDetail'
        component={ServiceDetail} options={{title:"Service Detail"}}
        />
        <Stack.Screen name="Add_Service" component={Add_Service} options={{title:"Service"}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;