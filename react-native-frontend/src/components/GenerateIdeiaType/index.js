import { StyleSheet, Text, View, Image } from "react-native";

export default function GenerateIdeia() {
  return (
    <View style={styles.container}>
      <Text style={styles.TypeIdeia}>Você prescisa de...</Text>

      <View style={styles.card}>
        <View style={styles.internalCard}>
          <Text style={styles.textCard}>Problemas dentro da empresa ?</Text>
          <View style={styles.buttonCard}>
            <Text style={styles.buttonText}>Gerar Ideia</Text>
          </View>
        </View>
        <Image
          style={styles.nextSteps}
          source={{
            uri: "https://images.squarespace-cdn.com/content/v1/581b0af76a49632b8e102924/1561831291801-6AJMBNAHF9SHXGWKR0C8/3+important+things+to+know+before+buying+a+condo.png",
          }}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.externalCard}>
          <Text style={styles.textCard}>Problema fora de alcance ?</Text>
          <View style={styles.buttonCard}>
            <Text style={styles.buttonText}>Gerar Ideia</Text>
          </View>
        </View>
        <Image
          style={styles.nextSteps}
          source={{
            uri: "https://images.squarespace-cdn.com/content/v1/581b0af76a49632b8e102924/1561831291801-6AJMBNAHF9SHXGWKR0C8/3+important+things+to+know+before+buying+a+condo.png",
          }}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.innovativeCard}>
          <Text style={styles.textCard}>Tenha uma ideia Inovadora!</Text>
          <View style={styles.buttonCard}>
            <Text style={styles.buttonText}>Gerar Ideia</Text>
          </View>
        </View>
        <Image
          style={styles.nextSteps}
          source={{
            uri: "https://images.squarespace-cdn.com/content/v1/581b0af76a49632b8e102924/1561831291801-6AJMBNAHF9SHXGWKR0C8/3+important+things+to+know+before+buying+a+condo.png",
          }}
        />
      </View>
      <View style={styles.blur2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    backgroundColor: "#fff",
  },
  TypeIdeia: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  card: {
    flexDirection: "row",
  },
  internalCard: {
    backgroundColor: "#3458B7",
    width: 350,
    height: 170,
    borderRadius: 35,
    marginTop: 13,
    marginBottom: 13,
  },
  externalCard: {
    backgroundColor: "#54329C",
    width: 350,
    height: 170,
    borderRadius: 35,
    marginTop: 13,
    marginBottom: 13,
  },
  innovativeCard: {
    backgroundColor: "#7A329C",
    width: 350,
    height: 170,
    borderRadius: 35,
    marginTop: 13,
    marginBottom: 53,
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
  blur2: {
    position: "absolute",
    backgroundColor: "#823EF1",
    width: 290,
    height: 290,
    left: 160,
    bottom: -70,
    borderRadius: 10000,
    zIndex: -1
  },
});