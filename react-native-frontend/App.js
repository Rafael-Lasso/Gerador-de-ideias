import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";

import Home from "./src/pages/Home";
import Profile from "./src/pages/Profile";
import IdeiaForm from "./src/pages/IdeiaForm";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Principal" component={Home} />
          <Stack.Screen name="Perfil" component={Profile} />
          <Stack.Screen name="Que tal se..." component={IdeiaForm} />
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
