import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Menu() {
  return (
    <View>
      <View style={styles.navigator}>
        <TouchableOpacity style={styles.NavList}><Text>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.NavList}><Text>Pesquisar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.NavList}><Text>Perfil</Text></TouchableOpacity>
        <TouchableOpacity style={styles.NavList}><Text>Configuração</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigator: {
    width: 420,
    height: 79,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    position: "relative",
  },
  NavList: {
    alignItems: "center",
    marginLeft: 22,
    marginRight: 15,
  },
});
