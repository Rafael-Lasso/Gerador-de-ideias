import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default function ResolucaoDeProblemas() {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Falta de engajamento" },
    { key: "2", value: "Insatisfação" },
    { key: "3", value: "Trabalho entregue não satisfatório Planejamento" },
    { key: "4", value: "Clima organizacional ruim" },
    { key: "5", value: "Inflexibilidade  Comodismo" },
    { key: "6", value: "Má distribuição de tarefas" },
    { key: "7", value: "Como alcançar objetivos" },
    { key: "8", value: "Sustentabilidade" },
    { key: "9", value: "Crises econômicas" },
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
          // onPress={() => DevolverIdeiaParaPlanejamentoEstrategico()}
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
