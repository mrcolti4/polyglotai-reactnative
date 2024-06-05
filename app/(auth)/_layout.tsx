import { Stack, Slot } from "expo-router";
import { View } from "react-native";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />
    </Stack>
  );
};

export default Layout;
