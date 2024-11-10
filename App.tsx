import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>("malgnuT");
  const [count, setCount] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Text style={{
        color: "red",
        fontSize: 30
      }}>
        Hello {name}
      </Text>
      <View>
        <Text style={{
          fontSize: 30
        }}>
          Count: {count}
        </Text>
        <View style={{}}>
          <Button title='Increase' onPress={() => setCount(count + 1)} color={"green"} />
        </View>
      </View>
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
