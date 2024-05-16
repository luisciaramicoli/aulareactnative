
import { TextInput } from 'react-native';

import styles from './styles';

export default function Input ({placeHolder, valor, atualizavalor}) {

    return (
        <TextInput 
        style={[styles.input, {outline:'none'}]}
        placeholder={placeHolder}
        placeholderTextColor='lightgray'
        keyboardType='numeric'
        value={valor}
        onChangeText={vlr => atualizavalor(vlr)}
        />

    );

}