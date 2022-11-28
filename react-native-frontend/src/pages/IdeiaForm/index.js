import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function IdeiaForm() {
  return (
    <View style={styles.container}>
      <View style={styles.InfoContainer}>
      <Text style={styles.message}>Gere uma ideia em grupo</Text>
      <Text style={styles.subMessage}>
        Sera em grupo de 4 mas pode ser realizado sosinho se não puder, cada um
        ira responder a pergunta que aparecer, depois que todas as perguntas
        forem preenchidas devem conversar entre voces para tentar advinhar a
        ideia que pode vir
      </Text>
      </View>
      <View style={styles.form}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  InfoContainer: {
    alignSelf: "center",
  },
  message: {
    marginTop: 65,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  subMessage: {
    fontSize: 15,
    textAlign: "justify",
    margin: 15,
    marginRight: 15,
  },
  form: {
    marginTop: 25,
    marginRight: 20,
    backgroundColor: "#d1d1d1",
    borderRadius: 30,
    width: 340,
    height: 200,
    alignSelf: "center",
  },
});
