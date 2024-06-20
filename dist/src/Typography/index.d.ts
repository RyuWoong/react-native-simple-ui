import React, { ReactNode } from "react";
import { Text, TextProps, TextStyle } from "react-native";
declare let TypographyPreset: Record<string, TextStyle>;
interface Props extends TextProps {
    type: keyof typeof TypographyPreset;
    bold?: boolean;
    color?: string;
    align?: "left" | "center" | "right";
    flex?: boolean;
    style?: TextStyle;
    children: ReactNode;
}
export declare const setConfiguration: ({ preset, boldFont, type, color, }: {
    preset?: Record<string, TextStyle>;
    boldFont?: string;
    type?: string;
    color?: string;
}) => void;
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<Text>>;
export default _default;
