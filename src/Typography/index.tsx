import React, { ForwardedRef, ReactNode, forwardRef } from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { PresetKeys, TypographyPreset, defaultBoldFont, defaultFontFamilys } from "./type";

interface Props extends TextProps {
  type: PresetKeys;
  bold?: boolean;
  color?: string;
  align?: "left" | "center" | "right";
  flex?: boolean;
  style?: TextStyle;
  children: ReactNode;
}

function Typography(
  { type = "Label3", color, bold, align = "left", flex, style, children, ...rest }: Props,
  ref: ForwardedRef<Text>,
) {
  return (
    <Text
      ref={ref}
      style={[
        TypographyPreset[type],
        bold && { fontFamily: defaultBoldFont },
        { color: color ?? "#000000" },
        { textAlign: align },
        flex && { flex: 1 },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default forwardRef(Typography);
