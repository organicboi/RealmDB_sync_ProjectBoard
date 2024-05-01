import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import Realm from "../providers/Realm";
// import "expo-dev-client";

const RootLayout = () => {
  return (
    <>
      <ThemeProvider value={DarkTheme}>
        <Realm>
          <Stack />
        </Realm>
      </ThemeProvider>
      <StatusBar style="light" />
    </>
  );
};

const styles = StyleSheet.create({});

export default RootLayout;
