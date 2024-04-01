import { Button, Text, View } from "react-native";
import styles from "../config/styles";
import { Image } from "expo-image";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function HomeScreen({ navigation }) {
  const [email, setEmail] = useState("");

  useState(() => {
    getUserInfo();
  }, [email])

  async function getUserInfo() {
    try {
      const user = await AsyncStorage.getItem('usuario')
      if (user) {

        const usuarioObj = JSON.parse(user);
        console.log(usuarioObj);
        console.log(usuarioObj.email);
        setEmail(usuarioObj.email);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/falcao.jpg")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.h1}>Bem vindo
        {
          email && <Text style={styles.h1}> {email}</Text>
        } ao Sistema do Falcão</Text>
    </View>
  );
}
