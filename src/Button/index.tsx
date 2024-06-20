import React, { ForwardedRef, forwardRef } from "react";
import { Pressable, PressableProps, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Typography from "../Typography";

const Sizes: { [key: string]: ViewStyle } = {
  M: {
    paddingHorizontal: 16,
    height: 44,
  },
  L: {
    paddingHorizontal: 20,
    height: 56,
  },
};

const defaultBackgroundColor = "#000";
const defaultDisableBackgroundColor = "#ececec";
const defaultColor = "#fff";

export interface ButtonProps extends PressableProps {
  size: keyof typeof Sizes;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  children: string | React.JSX.Element;
}

function Button(
  {
    size,
    backgroundColor = defaultBackgroundColor,
    textColor = defaultColor,
    disabled,
    children,
    style,
    ...rest
  }: ButtonProps,
  ref: ForwardedRef<View>,
) {
  return (
    <Pressable
      ref={ref}
      style={[
        styles.Wrap,
        styles.Container,
        Sizes[size],
        { backgroundColor },
        disabled && { backgroundColor: defaultDisableBackgroundColor },
        style,
      ]}
      {...rest}
    >
      {typeof children === "string" ? (
        <Typography type="Header5" color={textColor}>
          {children}
        </Typography>
      ) : (
        children
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderRadius: 8,
    justifyContent: "center",
  },
  Wrap: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default forwardRef(Button);
