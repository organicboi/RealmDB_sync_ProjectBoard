import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TaskList from "./TaskList";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const TaskBoard = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#8711c1", "#2472fc"]}
        style={StyleSheet.absoluteFill}
      />
      <TaskList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
export default TaskBoard;
