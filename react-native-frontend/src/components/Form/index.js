import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Form() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput placeholder="Digite seu Nome" style={styles.camp}  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: "#f5f5f5",
    width: 350,
    height: "auto",
    marginTop: 85,
    marginLeft: 25,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  camp: {
    margin: 13,
    paddingLeft: 33,
    width: 300,
    height: 60,
    borderRadius: 45,
    backgroundColor: "#BABABA",
    textAlignVertical: "center",
    textAlign: "left",
  },
});
