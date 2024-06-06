import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { Control, useController } from "react-hook-form";
import { FormValues } from "@/types/FormValues";

interface InputProps {
  placeholder: string;
  name: "email" | "username" | "password";
  control: Control<FormValues>;
  hideInput?: true | false;
}

const Input = ({ placeholder, name, control, hideInput }: InputProps) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#a4a4a4"
      value={field.value}
      onChangeText={field.onChange}
      secureTextEntry={hideInput}
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
    flex: 1,
  },
});
