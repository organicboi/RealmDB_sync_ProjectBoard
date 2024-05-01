import { StyleSheet, Text, View } from "react-native";
import React, { Children, PropsWithChildren } from "react";
import Realm from "realm";
import { RealmProvider } from "@realm/react";
import { Task } from "../models/Task";

const RealmCustomProvider = ({ children }: PropsWithChildren) => {
  return <RealmProvider schema={[Task]}>{children}</RealmProvider>;
};

const styles = StyleSheet.create({});
export default RealmCustomProvider;
