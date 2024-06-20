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

export const defaultBoldFont = defaultFontFamilys.SUITBold;

export const presetKeys = [
  "Header1",
  "Header2",
  "Header3",
  "Header4",
  "Header5",
  "SubHeader1",
  "SubHeader2",
  "SubHeader3",
  "SubHeader4",
  "SubHeader5",
  "Label1",
  "Label2",
  "Label3",
  "Label4",
  "Label5",
] as const;

export type PresetKeys = (typeof presetKeys)[number];

export const TypographyPreset: Record<string, TextStyle> = {
  Header1: { fontFamily: defaultFontFamilys.SUITExtraBold, fontSize: 36 },
  Header2: { fontFamily: defaultFontFamilys.SUITExtraBold, fontSize: 32 },
  Header3: { fontFamily: defaultFontFamilys.SUITExtraBold, fontSize: 28 },
  Header4: { fontFamily: defaultFontFamilys.SUITExtraBold, fontSize: 24 },
  Header5: { fontFamily: defaultFontFamilys.SUITExtraBold, fontSize: 20 },
  SubHeader1: { fontFamily: defaultFontFamilys.SUITRegular, fontSize: 36 },
  SubHeader2: { fontFamily: defaultFontFamilys.SUITRegular, fontSize: 32 },
  SubHeader3: { fontFamily: defaultFontFamilys.SUITRegular, fontSize: 28 },
  SubHeader4: { fontFamily: defaultFontFamilys.SUITRegular, fontSize: 24 },
  SubHeader5: { fontFamily: defaultFontFamilys.SUITRegular, fontSize: 20 },
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
