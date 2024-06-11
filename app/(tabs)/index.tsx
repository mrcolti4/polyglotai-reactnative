import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/config";

function Tab() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => signOut(auth)}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Tab;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  }
});
