/* eslint-disable prefer-const */
import React, { ForwardedRef, ReactNode, forwardRef, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface Props extends TextInputProps {
  disable?: boolean;
  error?: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  toggle?: ReactNode;
}

let defaultPrimaryColor = "green";
let defaultErrorColor = "red";
let defaultDisableColor = "#dddddd";

function Input(
  { disable, error, style, inputStyle, onFocus, onBlur, toggle, ...rest }: Props,
  ref: ForwardedRef<TextInput>,
) {
  const [isFocused, setFocused] = useState(false);
  const onBaseBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };
  const onBaseFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };
  return (
    <View
      pointerEvents={!disable ? "auto" : "none"}
      style={[
        styles.Container,
        isFocused && { borderColor: defaultPrimaryColor },
        error && { borderColor: defaultErrorColor },
        disable && { backgroundColor: defaultDisableColor },
        style,
      ]}
    >
      <TextInput
        style={[styles.Input, inputStyle]}
        ref={ref}
        editable={!disable}
        placeholderTextColor={"lightgray"}
        onBlur={onBaseBlur}
        onFocus={onBaseFocus}
        maxFontSizeMultiplier={1}
        autoCapitalize="none"
        {...rest}
      />
      {toggle && toggle}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: "relative",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#eee",
    backgroundColor: "#fff",
    height: 44,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  Input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    padding: 0,
    margin: 0,
  },
});

export default forwardRef(Input);
