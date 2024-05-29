import { Redirect } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoggedIn ? (
        <Text>Edit app/index.tsx to edit this screen.</Text>
      ) : (
        <Redirect href="register" />
      )}
    </View>
  );
}
