import { Stack } from "expo-router/stack";
import { PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { store } from "@/redux/store";

export default function RootLayout() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </PaperProvider>
    </StoreProvider>
  );
}
