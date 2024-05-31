import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { AppStyles } from "@/constants/globalVariables";
import { Ionicons } from "@expo/vector-icons";
interface LabelProps {
  children: React.ReactNode;
  text: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

// const inputHeight = Dimensions.get("")

const Label = ({ children, text, icon }: LabelProps) => {
  return (
    <View style={styles.label}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.input_wrapper}>
        {icon && (
          <Ionicons style={styles.icon} name={icon} size={20} color="white" />
        )}
        {children}
      </View>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  label: {
    gap: 12,
    width: "100%",
  },
  text: {
    color: AppStyles.text.primary,
  },
  input_wrapper: {
    position: "relative",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#a4a4a4"
  },
  icon: {
    verticalAlign: "middle",
    alignItems: "center"
  },
});
