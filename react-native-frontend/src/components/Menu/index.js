import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Home from "../../pages/Home/index"

const newHome = Home

export default function Menu() {
  return (
    <View>
      <View style={styles.navigator}>
        <TouchableOpacity onPress={newHome} style={styles.NavList}><Text>Home</Text></TouchableOpacity>
        <TouchableOpacity onPress={newHome} style={styles.NavList}><Text>Pesquisar</Text></TouchableOpacity>
        <TouchableOpacity onPress={newHome} style={styles.NavList}><Text>Perfil</Text></TouchableOpacity>
        <TouchableOpacity onPress={newHome} style={styles.NavList}><Text>Configuração</Text></TouchableOpacity>
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
  },
  NavList: {
    alignItems: "center",
    marginLeft: 22,
    marginRight: 5,
  },
});
