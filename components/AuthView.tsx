import { StyleSheet, Text, View } from "react-native";
import React from "react";

type AuthViewProps = {
  children: React.ReactNode;
};

const AuthView = ({ children }: AuthViewProps) => {
  return <View style={styles.screen}>{children}</View>;
};

export default AuthView;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#00224F",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
});
