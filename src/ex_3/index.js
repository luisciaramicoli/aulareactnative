import { Text, View, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';

export default function Exemplo_3(){

    function mensagem() {
        alert('Você clicou no botão')
    }

    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 3</Text>
        <TouchableOpacity style={styles.botao} onPress={() => mensagem()} >
            <Text style={styles.txtbotao}>Botão</Text>,
        </TouchableOpacity>
    </View>
     
);
}