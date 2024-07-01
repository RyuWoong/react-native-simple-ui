# RyuWoong's React Native UI

이 패키지는 제가 사용하기 위한 순수한 React Native Component UI예요.

React Native로 만들어졌으며, 다른 Library 의존성이 없어요.

## Components

현재 구현 된 Component들이예요.

- Typography
- Input
- Button

# How To Install

```
npm install @ryuwoong/react-native-ui

// or

yarn add @ryuwoong/react-native-ui
```

## How To Use

```javascript
import React from "react";
import { StyleSheet, View } from "react-native";
import { Typography } from "@ryuwoong/react-native-ui";
import { setConfiguration } from "@ryuwoong/react-native-ui/Typography";

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
```
