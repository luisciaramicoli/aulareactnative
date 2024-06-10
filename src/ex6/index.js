import { View, Text } from "react-native";
import { useState } from "react";
import styles from './styles';
import Input from "./input";
import Botao from "./botao";

export default function Exemplo6() {
    const [peso, setPeso] = useState();
    const [alt, setAlt] = useState();
    const [imc, setImc] = useState(0.00);
    const [mensagem, setMensagem] = useState("");

    function calcular() {
        if (!peso || !alt) {
            setMensagem("Coloque seu peso e altura para o cálculo!");
            setImc(0);
            return;
        }

        const clImc = peso / (alt * alt);

        setImc(clImc);

        let mensagemImc;
        if (clImc < 18.5) {
            mensagemImc = "Abaixo do peso";
        } else if (clImc >= 18.5 && clImc < 24.9) {
            mensagemImc = "Peso normal";
        } else if (clImc >= 25 && clImc < 29.9) {
            mensagemImc = "Sobrepeso";
        } else if (clImc >= 30 && clImc < 34.9) {
            mensagemImc = "Obesidade grau I";
        } else if (clImc >= 35 && clImc < 39.9) {
            mensagemImc = "Obesidade grau II";
        } else {
            mensagemImc = "Obesidade grau III";
        }

        setMensagem(mensagemImc);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 6</Text>

            <View style={styles.ladolado}>
                <Input placeHolder='Peso' valor={peso} atualizavalor={setPeso} />
                <Input placeHolder='Altura' valor={alt} atualizavalor={setAlt} />
            </View>

            <Text style={styles.imc}>{imc.toFixed(2)}</Text>
            <Text style={styles.mensagem}>{mensagem}</Text>

            <Botao calcular={calcular}>Calcular</Botao>
        </View>
    );
}
