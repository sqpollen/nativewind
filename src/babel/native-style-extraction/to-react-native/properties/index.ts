import { TextStyle } from "react-native";
import { aspectRatio } from "./aspect-ratio";
import { flex } from "./flex";
import { fontFamily } from "./font-familiy";
import { only } from "./only";
import { position } from "./position";

export const properties = {
  alignContent: only<"alignContent">([
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "space-between",
    "space-around",
  ]),
  alignItems: only<"alignItems">([
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "baseline",
  ]),
  alignSelf: only<"alignSelf">([
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "baseline",
  ]),
  aspectRatio,
  columns: only([]),
  order: only([]),
  gridRowStart: only([]),
  gridRowEnd: only([]),
  gridColumnStart: only([]),
  gridColumnEnd: only([]),
  backgroundColor: only({ color: true }),
  borderBottomWidth: only<"borderBottomWidth">({ number: true }),
  borderEndWidth: only<"borderEndWidth">({ number: true }),
  borderLeftWidth: only<"borderLeftWidth">({ number: true }),
  borderRightWidth: only<"borderRightWidth">({ number: true }),
  borderStartWidth: only<"borderStartWidth">({ number: true }),
  borderTopWidth: only<"borderTopWidth">({ number: true }),
  borderWidth: only<"borderWidth">({ number: true }),
  bottom: only<"bottom">({ units: ["px", "%"] }),
  direction: only<"direction">(["inherit", "ltr", "rtl"]),
  display: only<"display">(["none", "flex"]),
  end: only<"end">({ units: ["px", "%"] }),
  height: only<"height">({ units: ["px", "%"] }),
  minHeight: only<"minHeight">({ units: ["px", "%"] }),
  maxHeight: only<"maxHeight">({ units: ["px", "%"] }),
  flex,
  overflow: only<"overflow">(["visible", "hidden", "scroll"]),
  position,
  flexBasis: only<"flexBasis">({ units: ["%", "px"] }),
  top: only<"top">({ units: ["px", "%"] }),
  left: only<"left">({ units: ["px", "%"] }),
  right: only<"right">({ units: ["px", "%"] }),
  margin: only<"margin">({ units: ["px", "%"] }),
  marginBottom: only<"marginBottom">({ units: ["px", "%"] }),
  marginLeft: only<"marginLeft">({ units: ["px", "%"] }),
  marginRight: only<"marginRight">({ units: ["px", "%"] }),
  marginTop: only<"marginTop">({ units: ["px", "%"] }),
  width: only<"width">({ units: ["px", "%"] }),
  minWidth: only<"minWidth">({ units: ["px", "%"] }),
  maxWidth: only<"maxWidth">({ units: ["px", "%"] }),
  zIndex: only<"zIndex">({ number: true }),
  color: only<"color", TextStyle>({ color: true }),
  fontSize: only<"fontSize", TextStyle>({ number: true }),
  fontStyle: only<"fontStyle", TextStyle>(["normal", "italic"]),
  fontWeight: only<"fontWeight", TextStyle>([
    "normal",
    "bold",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ]),
  // fontVariant: only<"fontVariant", TextStyle>([
  //   ["small-caps"],
  //   "oldstyle-nums",
  //   "lining-nums",
  //   "tabular-nums",
  //   "proportional-nums",
  // ]),
  fontFamily,
  letterSpacing: only<"letterSpacing", TextStyle>({ number: true }),
  lineHeight: only<"lineHeight", TextStyle>({ number: true }),
  textAlign: only<"textAlign", TextStyle>([
    "auto",
    "left",
    "right",
    "center",
    "justify",
  ]),
  textTransform: only<"textTransform", TextStyle>([
    "none",
    "uppercase",
    "lowercase",
    "capitalize",
  ]),
  textDecorationColor: only<"textDecorationColor", TextStyle>({ color: true }),
  textDecorationStyle: only<"textDecorationStyle", TextStyle>([
    "solid",
    "double",
    "dotted",
    "dashed",
  ]),
};
