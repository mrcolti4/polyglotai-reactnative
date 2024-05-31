import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AppStyles } from "@/constants/globalVariables";

interface LabelProps {
  children: React.ReactNode;
  text: string;
}

const Label = ({ children, text }: LabelProps) => {
  return (
    <View style={styles.label}>
      <Text style={styles.text}>{text}</Text>
      {children}
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  label: {
    gap: 12,
    width: "100%"
  },
  text: {
    color: AppStyles.text.primary,
  },
});
