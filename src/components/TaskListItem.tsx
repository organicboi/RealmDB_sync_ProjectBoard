import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Task } from "../models/Task";
import { useRealm } from "@realm/react";

const TaskListItem = ({ task }: { task: Task }) => {
  const realm = useRealm();

  const delteTask = () => {
    realm.write(() => {
      realm.delete(task);
    });
  };

  return (
    <Link href={`/${task._id}`} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.text}>{task.description}</Text>
        <AntDesign onPress={delteTask} name="close" size={18} color="gray" />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D2125",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "red",
    fontSize: 15,
  },
});

export default TaskListItem;
