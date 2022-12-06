import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";

import Home from "./src/pages/Home";
import Profile from "./src/pages/Profile";
import IdeiaForm from "./src/pages/IdeiaForm";
import ResolucaoDeProblemas from "./src/pages/ResolucaoDeProblemas";
import PlanejamentoEstrategico from "./src/pages/PlanejamentoEstrategico";
import IdeiasInovadores from './src/pages/IdeiasInvadores'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Principal" component={Home} />
          <Stack.Screen name="Perfil" component={Profile} />
          <Stack.Screen name="Como se joga ?" component={IdeiaForm} />
          <Stack.Screen name="Planejamento estratégico" component={PlanejamentoEstrategico} />
          <Stack.Screen name="Resolução de problemas" component={ResolucaoDeProblemas} />
          <Stack.Screen name="Ideias Inovadoras" component={IdeiasInovadores} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
  },
  blur2: {
    position: "absolute",
    backgroundColor: "#823EF1",
    width: 290,
    height: 290,
    left: 160,
    bottom: -70,
    borderRadius: 10000,
    zIndex: -11,
  },
});
