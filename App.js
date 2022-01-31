import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Button, RecyclerViewBackedScrollViewComponent} from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [data, setData] = useState([]);

  const add = () => {
    setData([...data, { key: item }]);
  }

  const clearAll = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <Text>Shopping List!</Text>
      <TextInput
          style={styles.input}
          onChangeText={item => setItem(item)}
          value={item}
          placeholder="Type an item here"
        />
      <StatusBar style="auto" />
      <View style={styles.buttons}>
        <Button
          title="Add"
          onPress={add}
        />
        <View style={styles.space} />
        <Button
          title="Clear all"
          onPress={clearAll}
        />
      </View>
      <FlatList
        data = {data}
        renderItem={({item}) => <Text>{item.key}</Text>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  flatlist: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: "row",
    justifyContent: 'space-between',
    margin: 10,
  },
  space: {
    width: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  }
});
