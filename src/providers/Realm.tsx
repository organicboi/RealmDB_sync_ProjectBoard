import { StyleSheet, Text, View } from "react-native";
import React, { Children, PropsWithChildren } from "react";
import Realm from "realm";
import { AppProvider, RealmProvider, UserProvider } from "@realm/react";
import { Task } from "../models/Task";
import Login from "../components/Login";

const appId = "trello_skillbridge-quhhrjp";

const RealmCustomProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppProvider id={appId}>
      <UserProvider fallback={Login}>
        <RealmProvider
          schema={[Task]}
          sync={{
            flexible: true,
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects("Task"));
              },
              rerunOnOpen: true,
            },
          }}
        >
          {children}
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
};

const styles = StyleSheet.create({});
export default RealmCustomProvider;
