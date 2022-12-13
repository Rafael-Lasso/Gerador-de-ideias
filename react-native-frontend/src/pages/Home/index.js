import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import Header from "../../components/Header";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header/>
          <View style={styles.card}>
            <View style={styles.Maincard}>
              <Text style={styles.textCard}>Entenda como jogar!</Text>
              <View style={styles.buttonCard}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Como se joga ?")}
                  style={styles.buttonText}
                >
                  <Text>O Jogo</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Image
              style={styles.nextSteps}
              source={{
                uri: "https://images.squarespace-cdn.com/content/v1/581b0af76a49632b8e102924/1561831291801-6AJMBNAHF9SHXGWKR0C8/3+important+things+to+know+before+buying+a+condo.png",
              }}
            />
          </View>
          <View style={styles.containerCards}>
            <Text style={styles.TypeIdeia}>Você prescisa de...</Text>

            <View style={styles.card}>
              <View style={styles.internalCard}>
                <Text style={styles.textCard}>Planejamento estratégico</Text>
                <View style={styles.buttonCard}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Planejamento estratégico")
                    }
                    style={styles.buttonText}
                  >
                    <Text>Gerar Ideia</Text>
                  </TouchableOpacity>
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
                <Text style={styles.textCard}>Resolução de problemas</Text>
                <View style={styles.buttonCard}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Resolução de problemas")
                    }
                    style={styles.buttonText}
                  >
                    <Text>Gerar Ideia</Text>
                  </TouchableOpacity>
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
                <Text style={styles.textCard}>Tenha uma Ideia Inovadora!</Text>
                <View style={styles.buttonCard}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Ideias Inovadoras")}
                    style={styles.buttonText}
                  >
                    <Text>Gerar Ideia</Text>
                  </TouchableOpacity>
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
        </View>
      </ScrollView>
      <View>
        <View style={styles.blur2}></View>
        <View style={styles.navigator}>
          <TouchableOpacity
            style={styles.NavList}
            onPress={() => navigation.navigate("Principal")}
          >
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.NavList}
            onPress={() => navigation.navigate("Perfil")}
          >
            <Text>Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCards: {
    marginLeft: 30,
  },
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
  card: {
    flexDirection: "row",
    alignSelf: "center",
  },
  Maincard: {
    backgroundColor: "#842A9A",
    width: 360,
    height: 173,
    borderRadius: 35,
    marginLeft: 30,
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
    alignSelf: "center",
    justifyContent: "center",
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    zIndex: -1,

    elevation: 6,
    zIndex: -1,
  },
  externalCard: {
    backgroundColor: "#54329C",
    width: 350,
    height: 170,
    borderRadius: 35,
    marginTop: 13,
    marginBottom: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    zIndex: -1,

    elevation: 6,
  },
  innovativeCard: {
    backgroundColor: "#7A329C",
    width: 350,
    height: 170,
    borderRadius: 35,
    marginTop: 13,
    marginBottom: 53,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    zIndex: -1,

    elevation: 6,
    zIndex: -11,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    zIndex: -1,

    elevation: 6,
    zIndex: -1,
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
