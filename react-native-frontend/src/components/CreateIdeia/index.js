import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function CreateIdeiaCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.Maincard}>
          <Text style={styles.textCard}>Não sabe nem por onde começar</Text>
          <View style={styles.buttonCard}>
          <Button title="Gerar Ideia" style={styles.buttonText}></Button>
          </View>
        </View>
        <Image
          style={styles.nextSteps}
          source={{
            uri: "https://images.squarespace-cdn.com/content/v1/581b0af76a49632b8e102924/1561831291801-6AJMBNAHF9SHXGWKR0C8/3+important+things+to+know+before+buying+a+condo.png",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginLeft: 30,
  },
  card: {
    flexDirection: "row",
  },
  Maincard: {
    backgroundColor: "#842A9A",
    width: 360,
    height: 173,
    borderRadius: 35,
  },
  textCard: {
    color: "white",
    width: 150,
    fontSize: 15,
    marginLeft: 25,
    marginTop: 35,
  },
  buttonText: {
    marginLeft: 8,
    marginTop: 12,
  },
  buttonCard: {
    width: 105,
    height: 50,
    fontSize: 15,
    marginLeft: 25,
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  nextSteps: {
    width: 125,
    height: 170,
    marginLeft: -145,
    marginTop: 12.9,
  },
});
