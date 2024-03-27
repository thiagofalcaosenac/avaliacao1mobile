import { Text, View } from "react-native";
import BuscaCep from "../components/BuscaCep";
import styles from "../config/styles";

export default function BuscaCepScreen() {
  return (
    <View style={styles.container}>
      <Text>Busca CEP</Text>
      <BuscaCep />
    </View>
  );
}
