import { View, Text, Image } from 'react-native'; 

import Ola from './ola/ola';

import styles from './styles';

import logo from '../../assets/logo.png';



export default function Atividade1 () { 

    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.image}/>
            <Text style={styles.titulo}>
            </Text>
               <Saudacoes name='Mario'/>
               <Saudacoes name='Mario'/>
               <Saudacoes name='Mario'/>
               <Saudacoes name='Mario'/>
            
              
        </View>
    );
}
