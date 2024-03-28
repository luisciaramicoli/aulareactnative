import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// import Mensagem from './src/ex_2';
//import Atividade1 from './src/atividade_1';
//import Atividade3 from './src/atividade3';
import Exemplo_4 from './src/ex_4';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_4/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'orange',
    padding:10,
  },
});