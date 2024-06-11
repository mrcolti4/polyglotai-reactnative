import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  StyleSheetProperties,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
  disabled: boolean;
  style?: StyleProp<ViewStyle>;
}

const SubmitButton = ({ children, disabled, style, onPress }: ButtonProps) => {
  return (
    <LinearGradient
      style={[styles.gradient, style]}
      colors={disabled ? ["gray", "gray"] : ["#9c3fe4", "#c65647"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0.3, 1]}
    >
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, disabled ? styles.disabledButton : null]}
        disabled={disabled}
      >
        <Text style={[styles.text, disabled ? styles.disabledText : null]}>
          {children}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    borderRadius: 15,
  },
  button: {},
  text: {
    fontSize: 17,
    fontWeight: "500",
    color: "#fff",
    paddingVertical: 14,
    textAlign: "center",
  },
  disabledButton: {},
  disabledText: {},
});
