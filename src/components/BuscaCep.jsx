import { Text, TextInput, View } from "react-native";
import { useState } from "react";
import { TextInput as TextInputNP } from "react-native-paper";
import styles from "../config/styles";

export default function BuscaCep() {
  // variáveis em React Native são estados / states
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    logradouro: "",
    uf: "",
    localidade: "",
  });

  function buscaCep() {
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEndereco({
          logradouro: data.logradouro,
          uf: data.uf,
          localidade: data.localidade,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.h1, // unsando o spread operator
          ...styles.corDestaque, // unsando o spread operator
        }}
      >
        Encontre o local pelo CEP
      </Text>
      <Text
        style={{
          ...styles.h2,
          ...styles.espacamentoDelicado,
        }}
      >
        Faça sua busca abaixo
      </Text>
      <TextInputNP
        value={cep}
        onChangeText={setCep}
        maxLength={8}
        inputMode="numeric"
        placeholder="Digite o CEP"
        onBlur={buscaCep}
        mode="outlined"
      />

      <TextInputNP
        style={styles.espacamentoDelicado}
        value={endereco.logradouro}
        placeholder="Rua / Logradouro"
      />
      <TextInputNP
        style={styles.espacamentoDelicado}
        value={endereco.localidade}
        placeholder="Cidade"
      />
      <TextInputNP
        style={styles.espacamentoDelicado}
        value={endereco.uf}
        placeholder="Estado"
      />
    </View>
  );
}
