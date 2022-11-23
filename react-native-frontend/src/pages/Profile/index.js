import { StyleSheet, ScrollView, View } from "react-native";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Form from "../../components/Form";

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Form />
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
