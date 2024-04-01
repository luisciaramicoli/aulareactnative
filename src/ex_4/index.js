import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Exemplo_4(){

  const [txtDigitado, setTxtDigitado] = useState('Texto digitado');
  const [txt2, setTxt2] = useState('');
  const [textTela, setTxtTela] = useState('');

  function atualizaTextoHandle (txt){
    setTxtDigitado(txt);
  }

    return(
    <View style={styles.container}>
      <Text style={styles.titulo}> Exemplo 4</Text>

      <Text style={styles.texto}>{txtDigitado}</Text>

      <TextInput 
      style={styles.input} 
      onChangeText={(valor) => atualizaTextoHandle(valor)}
      />

      <View style={styles.linha}></View>
      
      <View style={styles.texto}>{textTela}</View>
      
      <TextInput
      style={styles.input}
      onChangeText={(vlr) => setTxt2(vlr)}
      value={txt2}
      />

      <Pressable style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao} >
        <Text style={styles.textBotao}>Exibir texto</Text>
      </Pressable>

    </View>
     
);
}