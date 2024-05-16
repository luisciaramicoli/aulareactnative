import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
//import Exemplo5 from './src/atividade5';
//import Exemplo6 from './src/ex_6';
import Exemplo_6 from './src/ex6';

//import Exemplo_5 from './src/ex_5';

// import Mensagem from './src/ex_2';
//import Atividade1 from './src/atividade_1';
//import Atividade3 from './src/atividade3';
//import Exemplo_4 from './src/ex_4';
//import Atividade4 from './src/4';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_6/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#aaa',
    padding:10,
  },
});