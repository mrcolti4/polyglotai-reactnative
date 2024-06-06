import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config";

import Input from "@/components/form/Input";
import Label from "@/components/form/Label";
import SubmitButton from "@/components/form/SubmitButton";
import NavLink from "@/components/navigation/NavLink";
import AuthView from "@/components/AuthView";
import Form from "@/components/form/Form";
import FormTitle from "@/components/form/FormTitle";

import { FormValues } from "@/types/FormValues";
import { Ionicons } from "@expo/vector-icons";

const Registration = () => {
  const { control, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const userCreds = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    console.log(userCreds.user);
  };

  return (
    <AuthView>
      <View style={styles.descr}>
        <Text style={styles.title}>
          Learn new languages with AI easily and quickly
        </Text>
        <Text style={styles.text}>
          Our application is the modern way to learn new languages
        </Text>
      </View>
      <Form>
        <FormTitle>Get started free</FormTitle>
        <Label text="Email Address" icon="mail">
          <Input
            placeholder="youremail@mail.com"
            name="email"
            control={control}
          />
        </Label>
        <Label text="Your password" icon="key" isPassword={true}>
          <Input
            placeholder="**********"
            name="password"
            control={control}
            hideInput={true}
          />
        </Label>

        <SubmitButton
          onPress={handleSubmit(onSubmit)}
          disabled={false}
          style={{ marginTop: 15 }}
        >
          Sign up with email
        </SubmitButton>
        <Text style={styles.navtext}>
          Have an account?{" "}
          <NavLink href="/login" styles={styles.navlink}>
            Log in
          </NavLink>
        </Text>
      </Form>
    </AuthView>
  );
};

export default Registration;

const styles = StyleSheet.create({
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
  navtext: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
  },
  navlink: {
    color: "#c65647",
  },
});
