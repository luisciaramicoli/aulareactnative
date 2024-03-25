import { useState } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';

export default function Atividade3(){

    const [numero, setNumero] = useState(0);

    function diminuir() {
        setNumero(numero - 1);
    }
    function incrementar(){
        setNumero(numero + 1);
    }
    function zero(){
        setNumero(0);
    }

    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Atividade 3</Text>

        <View  style={styles.container1}>
        <TouchableOpacity style={styles.botao} onPress={() => diminuir()} >
            <Text style={styles.txtbotao}>-</Text>,
        </TouchableOpacity>

        <Text style={styles.titulo}> {numero} </Text>

        <TouchableOpacity style={styles.botao}  onPress={() => incrementar()}>
            <Text style={styles.txtbotao}>+</Text>
        </TouchableOpacity>

        </View>
        
        <TouchableOpacity style={styles.botao}  onPress={() => zero()}>
      <Text style={styles.txtbotao}>Zerar</Text>
  </TouchableOpacity>
 

    </View>
  
);
}