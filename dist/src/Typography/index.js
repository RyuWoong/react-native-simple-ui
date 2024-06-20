import React, { forwardRef } from "react";
import { Text } from "react-native";
import { defaultFontFamilys, defaultTypographyPreset } from "./type";
let TypographyPreset = defaultTypographyPreset;
let defaultBoldFont = defaultFontFamilys.SUITBold;
let defaultType = "Label3";
let defaultColor = "#000";
function Typography({ type = defaultType, color, bold, align = "left", flex, style, children, ...rest }, ref) {
    return (<Text ref={ref} style={[
            TypographyPreset[type],
            bold && { fontFamily: defaultBoldFont },
            { color: color ?? defaultColor },
            { textAlign: align },
            flex && { flex: 1 },
            style,
        ]} {...rest}>
      {children}
    </Text>);
}
export const setConfiguration = ({ preset, boldFont, type, color, }) => {
    if (preset) {
        TypographyPreset = preset;
    }
    if (boldFont) {
        defaultBoldFont = boldFont;
    }
    if (type) {
        defaultType = type;
    }
    if (color) {
        defaultColor = color;
    }
};
export default forwardRef(Typography);
//# sourceMappingURL=index.js.map