import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useObject, useRealm } from "@realm/react";
import { Task } from "../models/Task";
import { BSON } from "realm";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));

  const [updatedDescription, setUpdatedDescription] = useState(
    task?.description
  );

  const realm = useRealm();

  const updateDescription = () => {
    if (!task) {
      return;
    }
    realm.write(() => {
      task.description = updatedDescription;
    });
  };

  if (!task) {
    return <Text>not found</Text>;
  }

  return (
    <View>
      <Stack.Screen options={{ title: "Task Details" }} />
      <TextInput
        value={updatedDescription}
        onChangeText={setUpdatedDescription}
        onEndEditing={updateDescription}
        style={{ color: "#fff", margin: 10, fontSize: 30, fontWeight: "bold" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default TaskDetails;
