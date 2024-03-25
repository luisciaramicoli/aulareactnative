import { useState } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';

export default function Exemplo_3(){

    const [numero, setNumero] = useState(0);

    function mensagem() {
        alert('Você clicou no botão')
    }
    function incrementar(){
        setNumero(numero + 1);
    }

    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 3</Text>

        <TouchableOpacity style={styles.botao} onPress={() => mensagem()} >
            <Text style={styles.txtbotao}>Botão</Text>,
        </TouchableOpacity>

        <Text style={styles.titulo}> {numero} </Text>

        <TouchableOpacity style={styles.botao}  onPress={() => incrementar()}>
            <Text style={styles.txtbotao}>Incrementar nº</Text>
        </TouchableOpacity>

    </View>
     
);
}