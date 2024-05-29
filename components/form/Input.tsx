import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

interface InputProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

const Input = ({ placeholder, value, setValue }: InputProps) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={false}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    fontWeight: "500",
    color: "#a4a4a4",
    borderColor: "#A4A4A4",
    borderWidth: 1,
    paddingVertical: 17,
    paddingHorizontal: 20,
    maxHeight: 55,
    width: 314,
    borderRadius: 5
  },
});
