import { StyleSheet, Text, ScrollView, View } from "react-native";

export default function Form() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.camp}>Seu Nome</Text>
        <Text style={styles.camp}>Seunome@email.com</Text>
        <Text style={styles.camp}>(55) +18 99999-9999</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    backgroundColor: "#f5f5f5",
    width: 350,
    height: "auto",
    marginTop: 25,
    marginLeft: 25,
    borderRadius: 15,
  },
  camp: {
    margin: 13,
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#BABABA",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
