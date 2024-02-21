import { View, Text, FlatList, StyleSheet } from "react-native";

const ToDoList = ({ todos }) => {
  return (
    <View>
      <Text>Todo List</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    fontSize: 24,
    padding: 10,
    backgroundColor: "red",
    margin: 5,
    borderRadius: 5,
  },
});

export default ToDoList;
