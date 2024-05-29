import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "@/components/form/Input";

const Registration = () => {
  const [email, setEmail] = useState("");

  return (
    <View>
      <Text>Registration</Text>
      <Input placeholder="Email" value={email} setValue={setEmail} />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({});
