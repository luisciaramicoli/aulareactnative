
import { Pressable, Text } from 'react-native';

import styles from './styles';


export default function Botao ({children, calcularIMC}) {
    
    return (
        
    <Pressable style={
        ({pressed}) => pressed ? 
    [styles.botao, styles.btnPress] 
    : 
    styles.botao}

    onPress={() => calcularIMC()}
    >
        <Text style={styles.txtbotao}>{children}</Text>
    </Pressable>
        

    );

}