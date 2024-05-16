import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container: {
    flex: 1, 
   backgroundColor: '#eee',
    width: '100%',
    //height: '100%',
    alignItems: 'center',
    padding: 8,
    borderRadius: 20,
    justifyContent: 'space-between',
   
},  


ladolado: {

    flexDirection: 'row ',
    marginVertical: 30,
   
},  


titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#aaa',
    margin: 6,
},

txtsaida: {
    margin: 6,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E91E63',
},

txtentrada: {
   borderWidth: 4,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: '#E91E63',
    color: '#e53935',
    borderRadius: 10,
    marginTop: 10,
    padding: 10

},

butao: {
    backgroundColor: '#e91e63',
    height: 60,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
},

butaotouch: {
    backgroundColor: '#c51162',
},

txtbutao: {
    fontSize: 30,
    color: '#ff80ab',
    textAlign: 'center',
},

textlabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C51162',
},
imc:{
    color: 'lightgray',
    fontSize: 65,
    marginVertical: 15,
}
}
);

export default styles;