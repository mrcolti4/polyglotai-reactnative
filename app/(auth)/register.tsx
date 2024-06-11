import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Input from "@/components/form/Input";
import SubmitButton from "@/components/form/SubmitButton";
import NavLink from "@/components/navigation/NavLink";
import AuthView from "@/components/AuthView";
import Form from "@/components/form/Form";
import FormTitle from "@/components/form/FormTitle";

import { FormValues } from "@/types/FormValues";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { selectError } from "@/redux/root/selectors";
import { CreateUser } from "@/types/auth";
import { registerUserByEmail } from "@/redux/root/thunks";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const error = useSelector(selectError);
  const { control, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async ({
    email,
    password,
  }: CreateUser) => {
    dispatch(registerUserByEmail({ email, password }));
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
        <Input
          name="email"
          control={control}
          label="Your email"
          left={<TextInput.Icon icon="mail" size={20} />}
        />
        <Input
          name="password"
          control={control}
          hideInput={true}
          label="Password"
          secureTextEntry={!showPassword}
          left={<TextInput.Icon icon="key" size={20} />}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye" : "eye-off"}
              size={20}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />

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
