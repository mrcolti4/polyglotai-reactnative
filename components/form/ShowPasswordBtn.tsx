import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ShowPasswordBtn = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Pressable style={styles.icon}>
      <Ionicons name={"eye-off"} size={20} color="white" />
    </Pressable>
  );
};

export default ShowPasswordBtn;

const styles = StyleSheet.create({
  icon: {
    verticalAlign: "middle",
    alignSelf: "center",
  },
});

