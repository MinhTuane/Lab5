import 'react-native-gesture-handler';
import{StyleSheet,View,Text} from 'react-native';



const ServiceDetail=({route})=>{
    const{data}=route.params;
    const{name,price,createdBy,createdAt,updatedAt} =data;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Service Name : {name}
                </Text>
                <Text style={styles.title}>
                    Price : {price} đ
                </Text>
                <Text style={styles.title}>
                    Creator : {createdBy}
                </Text>
                <Text style={styles.title}>
                    Time : {createdAt}
                </Text>
                <Text style={styles.title}>
                    Final Update : {updatedAt}
                </Text>
            </View>
        )
};
const styles=StyleSheet.create({
    container:{
        margin:10,
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    },
});
export default ServiceDetail;