import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function CreateIdeiaCard({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.Maincard}>
          <Text style={styles.textCard}>Como se usa ?</Text>
          <View style={styles.buttonCard}>
            <Button
              onPress={() => navigation.navigate("IdeiaForm")}
              title="Gerar Ideia"
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
    </View>
  );
}
