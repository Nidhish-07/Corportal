import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  dimensions: string;
  iconType: string;
};

const HeaderButton = (props: Props) => {
  return (
    <View>
      <Text>HeaderButton</Text>
    </View>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({});
