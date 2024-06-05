import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface FormTitleProps {
  children: React.ReactNode;
}

const FormTitle = ({ children }: FormTitleProps) => {
  return <Text style={styles.formTitle}>{children}</Text>;
};

export default FormTitle;

const styles = StyleSheet.create({
  formTitle: {
    fontSize: 24,
    color: "#fff",
  },
});
