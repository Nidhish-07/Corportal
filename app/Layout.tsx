import React from "react";
import { View, Text } from "react-native";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home"></Stack.Screen>
    </Stack>
  );
};

export default Layout;
