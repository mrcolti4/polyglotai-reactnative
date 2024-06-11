import { useRouter } from "expo-router";
import { View } from "react-native";
import {
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/config";
import { ActivityIndicator } from "react-native-paper";

export default function Index() {
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.replace("(tabs)");
    } else {
      router.replace("/login");
    }
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00224F"
      }}
    >
      <ActivityIndicator size="large" color="white"/>
    </View>
  );
}
