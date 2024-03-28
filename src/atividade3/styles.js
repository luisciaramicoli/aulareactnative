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
       width:'80%',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent:'center',
        borderWidth:3,
        marginTop:20,
        borderRadius:30,
        
    },
    
    titulo:{
        fontSize: 30,
        fontWeight:'bold',
    },
    botao:{
        width:'70%',
        padding: 20,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor:'#000',
       

    },
 
    txtbotao:{
        fontSize:25,
        color:'#fafafa',
        alignItems:"center",
        justifyContent:'space-between',
        
    },

    botaocontainer:{
        width:'30%',
        margin:20,
    },
    
});

export default styles;


