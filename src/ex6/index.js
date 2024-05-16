import { View, Text, Touchable, TextInput, Pressable } from "react-native";

import { useState } from "react";


import styles from './styles';

import Input from "./input";
import Botao from "./botao";


export default function Exemplo6 () {

    const [peso , setPeso] = useState(null);
    const [altura, setAltura] = useState(null); 
    const [imc, setImc] = useState(0.00);   

    function calcular(){
        const tmpImc = peso / (altura*altura)
        if (isNaN(tmpImc)){
            setImc(0)
        }else{
            setImc(tmpImc)
        }
    }

    return(

        <View style={styles.container}>

            <Text style={styles.titulo}>Exemplo 6</Text>
            <View style={styles.ladolado}>
             <Input placeHolder='Peso' valor={peso} atualizavalor={setPeso} />
             <Input placeHolder='Altura'  valor={altura} atualizavalor={setAltura}/>
             </View>

            <Text style={styles.imc}> {imc.toFixed(2)} </Text>

            <Botao calcularIMC={calcular}> Calcular </Botao>
        </View>


    )
}