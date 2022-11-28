import { StyleSheet, ScrollView, View, Button } from "react-native";

import Header from "../../components/Header";
import CreateIdeiaCard from "../../components/CreateIdeia";
import GenerateIdeia from "../../components/GenerateIdeiaType";
import Menu from "../../components/Menu";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header />
          <CreateIdeiaCard />
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
});
