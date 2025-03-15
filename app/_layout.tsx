import { Stack } from "expo-router";
import * as React from "react";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack />
    </PaperProvider>
  );
}
