import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default function PlanejamentoEstrategico() {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Missão Visão e Valores" },
    { key: "2", value: "Matrizwot" },
    { key: "3", value: "Indicadores de desempenho" },
    { key: "4", value: "Publico Alvo" },
    { key: "5", value: "Imprensa" },
    { key: "6", value: "Estratégia" },
    { key: "7", value: "Plano de Ação" },
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
          onPress={() => DevolverIdeiaParaPlanejamentoEstrategico()}
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
          <Text>
            Sua Ideia
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function DevolverIdeiaParaPlanejamentoEstrategico() {
  return "retornou";
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
