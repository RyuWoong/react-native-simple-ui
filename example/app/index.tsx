import React from "react";
import { StyleSheet, View } from "react-native";
import { Typography } from "@/dist";
import { setConfiguration } from "@/dist/Typography";

setConfiguration({ color: "red" });

export default function Index() {
  return (
    <View style={styles.Container}>
      <Typography type="Header1">Hello World!</Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
