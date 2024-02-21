import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import ToDoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <View style={styles.container}>
      <ToDoList todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 50,
  },
});
