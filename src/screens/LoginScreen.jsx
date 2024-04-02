import { View } from "react-native"; // NUNCA WEB SE ESTIVER WEB REMOVA
import styles from "../config/styles";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";
import { Image } from "expo-image";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const fazerLogin = async () => {
    console.log(email, senha);
    try {
      const usuario = await signInWithEmailAndPassword(auth, email, senha);
      navigation.navigate("TabNavigator");
    } catch (error) {
      alert("Login/Senha inválidos!");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/falcao.jpg")}
        style={{ width: 200, height: 200 }}
      />

      <Text>Faça seu Login</Text>
      {loading && <Text>Carregando...</Text>}
      <TextInput
        label="E-mail"
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={styles.espacamentoDelicado}
        keyboardType="email-address"
      />
      <TextInput
        label="Senha"
        value={senha}
        onChangeText={(senha) => setSenha(senha)}
        style={styles.espacamentoDelicado}
        secureTextEntry
      />
      <Button mode="contained" onPress={fazerLogin}>
        Entrar
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("RegistroScreen")}
      >
        Registre-se
      </Button>
    </View>
  );
}
