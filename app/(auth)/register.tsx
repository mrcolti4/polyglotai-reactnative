import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import SubmitButton from "@/components/form/SubmitButton";
import { Ionicons } from "@expo/vector-icons";

let windowWidth = Dimensions.get("screen").width;
let windowHeight = Dimensions.get("screen").height;

const Registration = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.screen}>
      <View style={styles.descr}>
        <Text style={styles.title}>
          Learn new languages with AI easily and quickly
        </Text>
        <Text style={styles.text}>
          Our application is the modern way to learn new languages
        </Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Get started free</Text>
        <Label
          text="Email Address"
          icon="mail"
        >
          <Input
            placeholder="youremail@mail.com"
            value={email}
            setValue={setEmail}
          />
        </Label>
        <SubmitButton disabled={false} style={{ marginTop: 15 }}>
          Sign up with email
        </SubmitButton>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#00224F",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  descr: {
    marginBottom: 30,
  },
  title: {
    color: "#efefef",
    fontSize: 36,
    fontWeight: "600",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: "#fff",
  },
  form: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    gap: 12,
    paddingTop: 20,
    borderRadius: 25,
  },
  formTitle: {
    fontSize: 24,
    color: "#fff",
  },
});
