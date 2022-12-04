import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function IdeiaForm() {
  return (
    <View style={styles.container}>
      <View style={styles.InfoContainer}>
        <Text style={styles.message}>Gere uma ideia em grupo</Text>
        <Text style={styles.subMessage}>
          Para ser realizado deveram ser feitos dois grupos com pelo menos 4
          pessoas, enquanto uma pessoa vai falando o que prescisa os
          participantes vão asinalar os topicos que acreditam ser reelevantes no
          final os grupos deveram escolher qual é a melhor ideia para a situação
          e defendela, assim quando o responsavel pela escolha escolher uma
          ideia é ponto para o grupo, quem fizer 5 pontos primeiro ganha
        </Text>
      </View>
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
});
