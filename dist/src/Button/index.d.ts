import React from "react";
import { PressableProps, StyleProp, View, ViewStyle } from "react-native";
declare const Sizes: {
    [key: string]: ViewStyle;
};
export interface ButtonProps extends PressableProps {
    size: keyof typeof Sizes;
    backgroundColor?: string;
    textColor?: string;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    children: string | React.JSX.Element;
}
declare const _default: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<View>>;
export default _default;
