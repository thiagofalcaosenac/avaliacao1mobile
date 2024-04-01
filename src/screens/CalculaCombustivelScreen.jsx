import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import styles from "../config/styles";
import { Image } from "expo-image";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth, { db } from "../config/firebase";
import { setDoc, doc } from "firebase/firestore";

export default function CalculaCombustivelScreen({ navigation }) {
  const [distancia, setDistancia] = useState("");
  const [consumo, setConsumo] = useState("");
  const [preco, setPreco] = useState("");
  const [resultadoConsumo, setResultadoConsumo] = useState("");
  const [resultadoCusto, setResultadoCusto] = useState("");

  const calcularCombustivel = async () => {
    try {
      var consumoTotal = distancia / consumo;
      var custoTotal = (distancia / consumo) * preco;

      setResultadoConsumo(consumoTotal.toFixed(2));
      setResultadoCusto(custoTotal.toFixed(2));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/falcao.jpg")}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />
        <Text variant="headlineLarge" style={styles.selfCenter}>
          Informe os Dados
        </Text>

        <TextInput
          label="Distância (km)"
          mode="outlined"
          value={distancia}
          onChangeText={setDistancia}
        />

        <TextInput
          label="Consumo do veículo (km/litro)"
          mode="outlined"
          keyboardType="email-address"
          value={consumo}
          onChangeText={setConsumo}
        />
        <TextInput
          keyboardType="numeric"
          label="Preço por litro (R$)"
          mode="outlined"
          value={preco}
          onChangeText={setPreco}
        />
        <TextInput
          label="Custo Total"
          mode="outlined"
          value={resultadoCusto}
          onChangeText={setResultadoCusto}
          disabled
        />        
        <TextInput
          label="Consumo Total"
          mode="outlined"
          
          value={resultadoConsumo}
          onChangeText={setResultadoConsumo}
          disabled
        />
        <Button
          mode="outlined"
          style={{
            marginTop: 10,
            maxWidth: 260,
            alignSelf: "flex-end",
          }}
          onPress={calcularCombustivel}
        >
          Calcular
        </Button>
      </View>
    </View>
  );
}
