import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.blur1}></View>

      <View style={styles.Header}>
        <View style={styles.mainMessage}>
          <Text style={styles.hello}>Olá</Text> 
          <Text style={styles.name}>Seu Nome</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.profile}
          source={{
            uri: "https://www.promoview.com.br/uploads/images/unnamed%2819%29.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    marginTop: 55,
    marginLeft: 50,
    display: "flex",
    flexDirection: "row",
  },
  Header: {
    alignItems: "center",
  },
  mainMessage: {
    flex: 1,
    marginRight: 160,
    textAlign: "left",
    alignItems: "center",
    flexDirection: "column",
  },
  hello: {
    color: "#fff",
    marginLeft: -80,
    fontSize: 18,
    fontStyle: "italic",
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  profile: {
    width: 44,
    height: 46,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowRadius: 4.65,
    elevation: 6,
  },
  blur1: {
    position: "absolute",
    backgroundColor: "#823EF1",
    width: 380,
    height: 380,
    right: 160,
    bottom: -80,
    borderRadius: 10000,
  },
});
