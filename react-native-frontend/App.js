import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/Home';
import Profile from './src/pages/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blur2: {
    position: "absolute",
    backgroundColor: "#823EF1",
    width: 290,
    height: 290,
    left: 160,
    bottom: -70,
    borderRadius: 10000,
    zIndex: -11,
  },
});
