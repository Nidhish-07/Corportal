import React from "react";

import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import HeaderButton from "../components/HeaderButton";
import WelcomeScreen from "../components/WelcomeScreen";
import PopularJobs from "../components/PopularJobs";
import NearbyJobs from "../components/NearbyJobs";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafc" }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#fafafc",
          },
          headerShadowVisible: false,
          headerLeft: () => <HeaderButton dimensions="60%" iconType="menu" />,
          headerRight: () => (
            <HeaderButton dimensions="100%" iconType="profile" />
          ),
          headerTitle: "",
        }}
      ></Stack.Screen>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{ flex: 1, padding: 16 }}>
          <WelcomeScreen />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
