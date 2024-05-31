import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  disabled: boolean;
}

const SubmitButton = ({ children, disabled }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.disabledButton : null]}
      disabled={disabled}
    >
      <Text style={[styles.text, disabled ? styles.disabledText : null]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    // background: linear-gradient(99deg, #9c3fe4 0%, #c65647 100%);
  },
  text: {
    fontSize: 17,
    fontWeight: "500",
    color: "#fff",
    paddingVertical: 12,
    textAlign: "center"
  },
  disabledButton: {},
  disabledText: {},
});
