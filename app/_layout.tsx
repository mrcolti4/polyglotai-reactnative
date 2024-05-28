import { Stack } from "expo-router/stack";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="register"/>
    </Stack>
  );
}
