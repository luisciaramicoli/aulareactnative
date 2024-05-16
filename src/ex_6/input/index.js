import { TextInput  } from "react-native";

import styles from "./styles";

export default function input(placeholder, valor, atualizaValor){
    return(
        <TextInput
        style={[styles.Input, {outline:'none'}]}
        placeholder={placeholder}
        placeholderTextColor={'lightgray'}
        keyboardType='numeric'
        value={valor}
        onChangeText={vlr => atualizaValor(vlr)}/>
    );
}