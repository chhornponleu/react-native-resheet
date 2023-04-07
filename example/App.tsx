import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeResheet from 'react-native-resheet';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeResheet.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
