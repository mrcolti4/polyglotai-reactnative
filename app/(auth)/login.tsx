import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import AuthView from "@/components/AuthView";
import Form from "@/components/form/Form";
import FormTitle from "@/components/form/FormTitle";
import Input from "@/components/form/Input";
import { FormValues } from "@/types/FormValues";
import SubmitButton from "@/components/form/SubmitButton";
import NavLink from "@/components/navigation/NavLink";

import { loginWithEmail } from "@/redux/root/thunks";
import { AppDispatch } from "@/redux/store";
import { CreateUser } from "@/types/auth";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { control, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async ({
    email,
    password,
  }: CreateUser) => {
    dispatch(loginWithEmail({ email, password }));
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthView>
      <Form>
        <FormTitle>Log in</FormTitle>
        <Input
          name="email"
          control={control}
          label="Your email"
          left={<TextInput.Icon icon="mail" size={20} color="white" />}
        />
        <Input
          name="password"
          control={control}
          hideInput={true}
          label="Password"
          secureTextEntry={!showPassword}
          left={<TextInput.Icon icon="key" size={20} color="white" />}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye" : "eye-off"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <SubmitButton onPress={handleSubmit(onSubmit)} disabled={false}>
          Log in
        </SubmitButton>
        <Text style={styles.navtext}>
          First time here?{" "}
          <NavLink href="/register" styles={styles.navlink}>
            Sign up
          </NavLink>
        </Text>
      </Form>
    </AuthView>
  );
};

export default Login;

const styles = StyleSheet.create({
  navtext: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
  },
  navlink: {
    color: "#c65647",
  },
});
