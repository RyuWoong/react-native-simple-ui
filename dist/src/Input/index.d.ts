import React, { ReactNode } from "react";
import { TextInput, TextInputProps, TextStyle, ViewStyle } from "react-native";
interface Props extends TextInputProps {
    disable?: boolean;
    error?: boolean;
    style?: ViewStyle;
    inputStyle?: TextStyle;
    toggle?: ReactNode;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<TextInput>>;
export default _default;
