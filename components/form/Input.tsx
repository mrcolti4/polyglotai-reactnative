import { StyleSheet, TextInput } from "react-native";
import React from "react";

interface InputProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

const Input = ({ placeholder, value, setValue }: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#a4a4a4"
      value={value}
      onChangeText={setValue}
      secureTextEntry={false}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 8,
  },
  input: {
    width: "100%",
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    paddingVertical: 17,
    paddingHorizontal: 10,
    maxHeight: 55,
    borderRadius: 8,
    flex: 1
  },
});
