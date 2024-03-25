import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#fafafa',
        width:'100%',
        borderRadius:20,
        alignItems: 'center',
        padding: 200,
        flexDirection:'row',
        justifyContent:"center",
        
    },
    container: {
       flex:1,
        backgroundColor: '#fafafa',
        width:'100%',
        borderRadius:20,
        alignItems: 'center',
        padding: 100,
        
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


