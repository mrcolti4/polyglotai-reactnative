import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface FormProps {
  children: React.ReactNode;
}

const Form = ({ children }: FormProps) => {
  return <View style={styles.form}>{children}</View>;
};

export default Form;

const styles = StyleSheet.create({
  form: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    gap: 22,
    paddingTop: 20,
    borderRadius: 25,
  },
});
