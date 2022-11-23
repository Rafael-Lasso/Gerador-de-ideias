import { StyleSheet, ScrollView, View } from "react-native";

import Header from "../../components/Header";
import CreateIdeiaCard from "../../components/CreateIdeia";
import GenerateIdeia from "../../components/GenerateIdeiaType";
import Menu from "../../components/Menu";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
        <Header />
        <CreateIdeiaCard />
        <GenerateIdeia />
        </View>  
      </ScrollView>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
