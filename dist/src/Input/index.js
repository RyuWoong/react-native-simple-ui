import React, { forwardRef, useState } from "react";
import { StyleSheet, TextInput, View, } from "react-native";
let defaultPrimaryColor = "green";
let defaultErrorColor = "red";
let defaultDisableColor = "#dddddd";
function Input({ disable, error, style, inputStyle, onFocus, onBlur, toggle, ...rest }, ref) {
    const [isFocused, setFocused] = useState(false);
    const onBaseBlur = (e) => {
        setFocused(false);
        if (onBlur) {
            onBlur(e);
        }
    };
    const onBaseFocus = (e) => {
        setFocused(true);
        if (onFocus) {
            onFocus(e);
        }
    };
    return (<View pointerEvents={!disable ? "auto" : "none"} style={[
            styles.Container,
            isFocused && { borderColor: defaultPrimaryColor },
            error && { borderColor: defaultErrorColor },
            disable && { backgroundColor: defaultDisableColor },
            style,
        ]}>
      <TextInput style={[styles.Input, inputStyle]} ref={ref} editable={!disable} placeholderTextColor={"lightgray"} onBlur={onBaseBlur} onFocus={onBaseFocus} maxFontSizeMultiplier={1} autoCapitalize="none" {...rest}/>
      {toggle && toggle}
    </View>);
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
//# sourceMappingURL=index.js.map