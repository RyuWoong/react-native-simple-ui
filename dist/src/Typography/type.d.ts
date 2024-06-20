import { TextStyle } from "react-native";
export declare const defaultFontFamilys: {
    SUITRegular: string;
    SUITBold: string;
    SUITExtraBold: string;
    SUITExtraLight: string;
    SUITHeavy: string;
    SUITLight: string;
    SUITMedium: string;
    SUITSemiBold: string;
    SUITThin: string;
};
export declare const presetKeys: readonly ["Header1", "Header2", "Header3", "Header4", "Header5", "SubHeader1", "SubHeader2", "SubHeader3", "SubHeader4", "SubHeader5", "Label1", "Label2", "Label3", "Label4", "Label5"];
export type PresetKeys = (typeof presetKeys)[number];
export declare const defaultTypographyPreset: Record<string, TextStyle>;
