import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

import Home from "../../pages/Home";
import Profile from "../../pages/Profile";

export default function Menu() {
  return (
    <View>
      <View style={styles.blur2}></View>
      <View style={styles.navigator}>
        <Button
          title="Home"
          style={styles.NavList}
          onPress={() => navigation.navigate("Home")}
        ></Button>
        <Button
          title="Perfil"
          style={styles.NavList}
          // style={styles.NavList}
          onPress={() => navigation.navigate("Profile")}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigator: {
    width: 380,
    height: 79,
    margin: 15,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    position: "relative",
    justifyContent: "space-around",
    zIndex: 111,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 4.65,
    zIndex: -1,
    elevation: 6,
  },
  NavList: {
    fontSize: 33,
  },
  blur2: {
    position: "absolute",
    backgroundColor: "#823EF1",
    width: 260,
    height: 260,
    left: 280,
    bottom: -70,
    borderRadius: 10000,
    zIndex: -1,
  },
});
