/* eslint-disable prefer-const */
import React, { ForwardedRef, ReactNode, forwardRef, useEffect } from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { TypographyPreset, defaultFontFamilys, defaultTypographyPreset } from "./type";

let typographyPreset = defaultTypographyPreset;
let defaultBoldFont = defaultFontFamilys.SUITBold;
let defaultType: TypographyPreset = "Label3";
let defaultColor = "#000";

interface Props extends TextProps {
  type?: TypographyPreset;
  bold?: boolean;
  color?: string;
  align?: "left" | "center" | "right";
  flex?: boolean;
  style?: TextStyle;
  children: ReactNode;
}

function Typography(
  { type = defaultType, color, bold, align = "left", flex, style, children, ...rest }: Props,
  ref: ForwardedRef<Text>,
) {
  const textStyle = typographyPreset[type as TypographyPreset];

  useEffect(() => {
    if (!textStyle) {
      console.error("textStyle is Empty. Check Typography Preset And Type");
    }
  }, [textStyle]);

  return (
    <Text
      ref={ref}
      style={[
        textStyle,
        bold && { fontFamily: defaultBoldFont },
        { color: color ?? defaultColor },
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

export const setConfiguration = ({
  preset,
  boldFont,
  type,
  color,
}: {
  preset?: Record<TypographyPreset, TextStyle>;
  boldFont?: string;
  type?: TypographyPreset;
  color?: string;
}) => {
  typographyPreset = preset ?? defaultTypographyPreset;
  defaultBoldFont = boldFont ?? defaultFontFamilys.SUITBold;
  defaultType = type ?? "Label3";
  defaultColor = color ?? "#000";
};

export default forwardRef(Typography);
