import { View } from "react-native"; // NUNCA WEB SE ESTIVER WEB REMOVA
import styles from "../config/styles";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    // useEffect é usado para executar código quando a tela é carregada
    // useState(()=>{
    //     // vou perguntar, o usuário está logado?
    //     checkIfUserIsLogged();
    // },[])

    // // função para verificar se o usuário está logado
    // function checkIfUserIsLogged() {
    //     // vou pegar o usuário que está salvo no AsyncStorage
    //     AsyncStorage.getItem('usuario')
    //         .then((usuario) => {
    //             if (usuario) {
    //                 // se existir um usuário, vou direcionar para a tela TabNavigator
    //                 navigation.navigate('TabNavigator');
    //             }
    //         });
    // }

    const fazerLogin = async () => {
        // console.log(email, senha);
        try {
          const usuario = await signInWithEmailAndPassword(auth, email, senha);
          console.log(usuario);
          navigation.navigate("TabNavigator");
        } catch (error) {
          console.log(error);
        }
      };

    // async function salvarNome() {
    //     setLoading(true);
    //     console.log("Salvando nome");
    //     try {
    //         const usuario = {
    //             email,
    //             senha
    //         }
    //         await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
    //         navigation.navigate('TabNavigator');
    //         setLoading(false);

    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    return (
        <View
            style={styles.container}
        >
            <Text>Faça seu Login</Text>
            {
                loading && <Text>Carregando...</Text>
            }
            <TextInput
                label="E-mail"
                value={email}
                onChangeText={email => setEmail(email)}
                style={styles.espacamentoDelicado}
                keyboardType="email-address"
            />
            <TextInput
                label="Senha"
                value={senha}
                onChangeText={senha => setSenha(senha)}
                style={styles.espacamentoDelicado}
                secureTextEntry

            />
            <Button mode="contained"
                onPress={fazerLogin}
            >Entrar</Button>

        </View>
    )
}