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
        // isFocused && { borderColor: Colors.PRIMARY6 },
        // error && { borderColor: Colors.RED6 },
        // disable && { backgroundColor: Colors.GRAY6 },
        style,
      ]}
    >
      <TextInput
        style={[styles.Input, inputStyle]}
        ref={ref}
        editable={!disable}
        // placeholderTextColor={Colors.GRAY3}
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
    // borderColor: Colors.GRAY3,
    // backgroundColor: Colors.WHITE,
    height: 44,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  Input: {
    flex: 1,
    // fontFamily: fontFamilys.SUITRegular,
    fontSize: 16,
    // color: Colors.GRAY9,
    padding: 0,
    margin: 0,
  },
});

export default forwardRef(Input);
