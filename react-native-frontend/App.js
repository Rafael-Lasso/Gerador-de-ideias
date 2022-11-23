import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/Home';
import Profile from './src/pages/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Profile/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
