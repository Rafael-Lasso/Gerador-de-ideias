import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Home from "../../pages/Home/index";

const newHome = Home;

export default function Menu() {
  return (
    <View>
      <View style={styles.blur2}></View>
      <View style={styles.navigator}>
        <TouchableOpacity onPress={newHome} style={styles.NavList}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={newHome} style={styles.NavList}>
          <Text>Pesquisar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={newHome} style={styles.NavList}>
          <Text>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={newHome} style={styles.NavList}>
          <Text>Configuração</Text>
        </TouchableOpacity>
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
    alignItems: "center",
    marginLeft: 22,
    marginRight: 5,
  },
  blur2: {
    position: "absolute",
    backgroundColor: "#823EF1",
    width: 260,
    height: 260,
    left: 280,
    bottom: -70,
    borderRadius: 10000,
  },
});
