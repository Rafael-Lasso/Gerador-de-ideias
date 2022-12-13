import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default function IdeiasInovadores() {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Onboarding" },
    { key: "2", value: "Omnichannel " },
    { key: "3", value: "Criatividade" },
    { key: "4", value: "Feedback" },
    { key: "5", value: "Valorizados e confortáveis" },
  ];

  return (
    <View>
      <ScrollView>
        <Text style={styles.LabelMessage}>
          Selecione seu Principal problema
        </Text>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
        />
        <TouchableOpacity
          // onPress={() => }
          style={styles.generateIdeia}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            Gerar Ideia
          </Text>
        </TouchableOpacity>
        <View style={styles.ResultIdeia}>
          <Text>Sua Ideia</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
  },
  LabelMessage: {
    marginTop: 50,
    marginBottom: 30,
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  generateIdeia: {
    alignSelf: "center",
    width: 135,
    height: 65,
    marginTop: 40,
    borderRadius: 25,
    justifyContent: "center",
    backgroundColor: "#54329C",
  },
  ResultIdeia: {
    marginTop: 50,
    alignSelf: "center",
    width: 360,
    height: "auto",
  },
});
