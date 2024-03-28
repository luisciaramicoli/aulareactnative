import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        width:'100%',
        borderRadius:20,
        alignItems: 'center',
        padding: 200,
        justifyContent:"space-around",
        
    },
    container1: {
       //flex:1,
       width:'100%',
        borderRadius:20,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-around'
        
    },
    container2: {
        //flex:1,
        width:'170%',
        borderRadius:20,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'space-around'
         
     },
    titulo:{
        fontSize: 30,
        fontWeight:'bold',
    },
    botao:{
        width:'20%',
        padding: 20,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor:'#000',
        flexDirection:"row"

    },
 
    txtbotao:{
        fontSize:25,
        color:'#fafafa',
        alignItems:"center",
        justifyContent:'space-between',
        
    },
    
});

export default styles;


