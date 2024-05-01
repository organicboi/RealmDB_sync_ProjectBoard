// import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import TaskListItem from "./src/components/TaskListItem";
import TaskList from "./src/components/TaskList";
import TaskBoard from "./src/components/TaskBoard";

export default function App() {
  return <View style={styles.container}>{/* <TaskBoard /> */}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F6E9B2",
    // padding: 10,
  },
});
