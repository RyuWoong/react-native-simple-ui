import React from "react";
import { View } from "react-native";
import { Typography } from "@/dist";
import { setConfiguration } from "@/dist/Typography";

setConfiguration({ color: "red" });

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography type="Header1">Hello World!</Typography>
    </View>
  );
}
