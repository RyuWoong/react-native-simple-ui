import { TextStyle } from "react-native";

export const defaultFontFamilys = {
  SUITRegular: "SUIT-Regular",
  SUITBold: "SUIT-Bold",
  SUITExtraBold: "SUIT-ExtraBold",
  SUITExtraLight: "SUIT-ExtraLight",
  SUITHeavy: "SUIT-Heavy",
  SUITLight: "SUIT-Light",
  SUITMedium: "SUIT-Medium",
  SUITSemiBold: "SUIT-SemiBold",
  SUITThin: "SUIT-Thin",
};

export type TypographyPreset =
  | "Header1"
  | "Header2"
  | "Header3"
  | "Header4"
  | "Header5"
  | "SubHeader1"
  | "SubHeader2"
  | "SubHeader3"
  | "SubHeader4"
  | "SubHeader5"
  | "Label1"
  | "Label2"
  | "Label3"
  | "Label4"
  | "Label5";

export const defaultTypographyPreset: Record<TypographyPreset, TextStyle> = {
  Header1: { fontFamily: defaultFontFamilys.SUITExtraBold, fontSize: 40 },
  Header2: { fontFamily: defaultFontFamilys.SUITExtraBold, fontSize: 36 },
  Header3: { fontFamily: defaultFontFamilys.SUITExtraBold, fontSize: 32 },
  Header4: { fontFamily: defaultFontFamilys.SUITExtraBold, fontSize: 28 },
  Header5: { fontFamily: defaultFontFamilys.SUITExtraBold, fontSize: 24 },
  SubHeader1: { fontFamily: defaultFontFamilys.SUITRegular, fontSize: 30 },
  SubHeader2: { fontFamily: defaultFontFamilys.SUITRegular, fontSize: 26 },
  SubHeader3: { fontFamily: defaultFontFamilys.SUITRegular, fontSize: 22 },
  SubHeader4: { fontFamily: defaultFontFamilys.SUITRegular, fontSize: 18 },
  SubHeader5: { fontFamily: defaultFontFamilys.SUITRegular, fontSize: 14 },
  Label1: {
    fontFamily: defaultFontFamilys.SUITRegular,
    fontSize: 20,
  },
  Label2: {
    fontFamily: defaultFontFamilys.SUITRegular,
    fontSize: 18,
  },
  Label3: {
    fontFamily: defaultFontFamilys.SUITRegular,
    fontSize: 16,
  },
  Label4: {
    fontFamily: defaultFontFamilys.SUITRegular,
    fontSize: 14,
  },
  Label5: {
    fontFamily: defaultFontFamilys.SUITRegular,
    fontSize: 12,
  },
};
