import React, { forwardRef } from "react";
import { Pressable, StyleSheet } from "react-native";
import Typography from "../Typography";
const Sizes = {
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
function Button({ size, backgroundColor = defaultBackgroundColor, textColor = defaultColor, disabled, children, style, ...rest }, ref) {
    return (<Pressable ref={ref} style={[
            styles.Wrap,
            styles.Container,
            Sizes[size],
            { backgroundColor },
            disabled && { backgroundColor: defaultDisableBackgroundColor },
            style,
        ]} {...rest}>
      {typeof children === "string" ? (<Typography type="Header5" color={textColor}>
          {children}
        </Typography>) : (children)}
    </Pressable>);
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
//# sourceMappingURL=index.js.map