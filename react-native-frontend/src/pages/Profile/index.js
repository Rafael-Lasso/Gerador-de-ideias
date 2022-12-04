import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Button,
} from "react-native";

import Form from "../../components/Form";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.blur1}></View>
        <Image
          style={styles.profile}
          source={{
            uri: "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png",
          }}
        />
        <Text style={styles.nameProfile}>Seu nome</Text>
        <Form />
        <View style={styles.saveIdeias}>
          <Text style={styles.ideiasSavedMessage}>Ideias Salvas </Text>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}
          >
            <View style={styles.card}>
              <View style={styles.innovativeCard}>
                <Text style={styles.textCard}>Que tal...</Text>
                <Text style={styles.ideiaValue}>Ideia Aqui!</Text>
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
                <Text style={styles.textCard}>Que tal...</Text>
                <Text style={styles.ideiaValue}>Ideia Aqui!</Text>
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
                <Text style={styles.textCard}>Que tal...</Text>
                <Text style={styles.ideiaValue}>Ideia Aqui!</Text>
              </View>
              <Image
                style={styles.nextSteps}
                source={{
                  uri: "https://images.squarespace-cdn.com/content/v1/581b0af76a49632b8e102924/1561831291801-6AJMBNAHF9SHXGWKR0C8/3+important+things+to+know+before+buying+a+condo.png",
                }}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    marginTop: 60,
    width: 70,
    height: 70,
    borderRadius: 100,
    alignSelf: "center",
  },
  nameProfile: {
    fontSize: 28,
    fontWeight: "bold",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  blur1: {
    position: "absolute",
    backgroundColor: "#823EF1",
    width: 380,
    height: 380,
    right: 160,
    bottom: 490,
    borderRadius: 10000,
  },
  saveIdeias: {
    marginTop: 30,
    marginLeft: 40,
  },
  ideiasSavedMessage: {
    fontSize: 18,
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4.65,
    elevation: 6,
  },
  card: {
    flexDirection: "row",
    marginRight: 95,
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

    elevation: 6,
  },
  textCard: {
    color: "white",
    width: 150,
    fontSize: 20,
    marginLeft: 25,
    marginTop: 35,
  },
  ideiaValue: {
    color: "white",
    width: 150,
    fontSize: 20,
    marginLeft: 25,
    fontWeight: "bold",
  },
  buttonText: {
    marginLeft: 8,
    marginTop: 12,
  },
  nextSteps: {
    width: 125,
    height: 170,
    marginLeft: -145,
    marginTop: 12.9,
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
