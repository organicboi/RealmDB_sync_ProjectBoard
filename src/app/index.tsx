import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TaskBoard from "../components/TaskBoard";
import { Stack } from "expo-router";

const HomeScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Project Board" }} />
      <TaskBoard />
    </>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
