import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SobreScreen from "../screens/SobreScreen";
import QuemSomosScreen from "../screens/QuemSomosScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BuscaCepScreen from "../screens/BuscaCepScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen" // como se fosse um id da tela
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TabNavigator" // como se fosse um id da tela
        component={TabNavigator}
        options={{
          title: "Início",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Início",
          tabBarLabel: "Início",
          tabBarIcon: "home-variant-outline",
        }}
      />
      <Tab.Screen
        name="BuscaCepScreen"
        component={BuscaCepScreen}
        options={{
          title: "Busca CEP",
          tabBarLabel: "CEP",
          tabBarIcon: "map-marker-multiple-outline",
        }}
      />
      <Tab.Screen
        name="QuemSomosScreen"
        component={QuemSomosScreen}
        options={{
          title: "Quem Somos",
          tabBarLabel: "Quem Somos",
          tabBarIcon: "account-convert",
        }}
      />
      <Tab.Screen
        name="SobreScreen"
        component={SobreScreen}
        options={{
          title: "Sobre",
          tabBarLabel: "Sobre",
          tabBarIcon: "comment-question-outline",
        }}
      />
    </Tab.Navigator>
  );
}
