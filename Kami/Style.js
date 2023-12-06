import { DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const Apptheme  = {
    ...DefaultTheme.colors,
    colors: {
        ...DefaultTheme.colors,
        primary:'#EF506B',
    },
};

const styleDefault= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:34,
    },
    title: {
        fontSize: 54,
        marginTop: 100,
        marginBottom: 100,
        color: Apptheme.colors.primary,
        fontWeight: 'bold',
    },
    input: {
        borderColor: Apptheme.colors.primary,
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        marginTop: 12,

    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: Apptheme.colors.primary,
        borderRadius:10,
        width:'100%',
        margin: 16,
    },
    buttonText: {
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
        padding: 12,
    },

});
export default styleDefault;