import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import AuthView from "@/components/AuthView";
import Form from "@/components/form/Form";
import FormTitle from "@/components/form/FormTitle";
import Label from "@/components/form/Label";
import Input from "@/components/form/Input";
import { FormValues } from "@/types/FormValues";
import SubmitButton from "@/components/form/SubmitButton";
import NavLink from "@/components/navigation/NavLink";

const Login = () => {
  const { control, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <AuthView>
      <Form>
        <FormTitle>Log in</FormTitle>
        <Label text="Email Address" icon="mail">
          <Input
            placeholder="youremail@mail.com"
            name="email"
            control={control}
          />
        </Label>
        <Label text="Your password" icon="key">
          <Input placeholder="***********" name="password" control={control} />
        </Label>
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
