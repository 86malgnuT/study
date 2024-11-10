import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>This is header</Text>
        <Text style={styles.parent}>
          Parent
          <Text style={styles.children}>
            Children
          </Text>
        </Text>
      </View>
      <Text style={
        {
          color: 'red',
          fontSize: 30,
          borderColor: 'blue',
          borderWidth: 1
        }
      }>
        Hello World 1
      </Text>
      <Text style={styles.hello}>Hello World 2</Text>
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
  hello: {
    color: 'red',
    fontSize: 30,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 20,
    marginTop: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "600",
  },
  parent: {
    fontSize: 60,
    fontWeight: "600",
    color: "green"
  },
  children: {
    fontSize: 30,
    fontWeight: "200",
  }
});
