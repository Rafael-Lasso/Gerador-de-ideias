import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
} from "react-native";

import Header from "../../components/Header";
import GenerateIdeia from "../../components/GenerateIdeiaType";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header />
          <View style={styles.card}>
            <View style={styles.Maincard}>
              <Text style={styles.textCard}>Entenda como jogar!</Text>
              <View style={styles.buttonCard}>
                <Button
                  onPress={() => navigation.navigate("Que tal se...")}
                  title="O Jogo"
                  style={styles.buttonText}
                ></Button>
              </View>
            </View>
            <Image
              style={styles.nextSteps}
              source={{
                uri: "https://images.squarespace-cdn.com/content/v1/581b0af76a49632b8e102924/1561831291801-6AJMBNAHF9SHXGWKR0C8/3+important+things+to+know+before+buying+a+condo.png",
              }}
            />
          </View>
          <GenerateIdeia />
        </View>
      </ScrollView>
      <View>
        <View style={styles.blur2}></View>
        <View style={styles.navigator}>
          <Button
            title="Home"
            style={styles.NavList}
            onPress={() => navigation.navigate("Principal")}
          ></Button>
          <Button
            title="Perfil"
            style={styles.NavList}
            onPress={() => navigation.navigate("Perfil")}
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
