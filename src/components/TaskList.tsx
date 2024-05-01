import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import TaskListItem from "./TaskListItem";
import { useQuery, useRealm } from "@realm/react";
import { Task } from "../models/Task";

const TaskList = () => {
  const realm = useRealm();
  const tasks = useQuery(Task);
  const [newTask, setNewTask] = useState("");

  const createTask = () => {
    realm.write(() => {
      realm.create(Task, { description: newTask, user_id: "123" });
    });
    setNewTask("");
  };

  return (
    <View style={styles.taskListBackground}>
      <Text style={styles.TaskListText}>TaskList</Text>

      {/* The list of Tasks */}
      <FlatList
        data={tasks}
        contentContainerStyle={styles.FlatListStyle}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
      {/* New Task Input */}
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder="New Task"
        placeholderTextColor="gray"
        style={styles.InputStyle}
      />
      <Button color="#8711c1" title="Add Task" onPress={createTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskListBackground: {
    backgroundColor: "#101112",
    padding: 10,
    borderRadius: 5,
    gap: 25,
  },
  TaskListText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  FlatListStyle: {
    gap: 7,
  },
  InputStyle: {
    color: "#fff",
    padding: 15,
    backgroundColor: "#1D2125",
    borderRadius: 5,
  },
});

export default TaskList;
