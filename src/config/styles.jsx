import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 5,
    flex: 1,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
  },
  espacamentoDelicado: {
    marginVertical: 5,
  },
  corDestaque: {
    color: "#42ccc8",
  },
});

export default styles;
