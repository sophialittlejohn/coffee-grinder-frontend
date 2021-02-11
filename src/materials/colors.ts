export type Colors =
  | "red"
  | "gray"
  | "blue"
  | "champain"
  | "orange"
  | "black"
  | "lightYellow"
  | "white"
  | "offWhite";

export const COLORS: Record<Colors, string> = {
  gray: "rgba(67,43,27,0.3)",
  blue: "rgba(61,154,183,1)",
  champain: "#F0DDA3",
  orange: "#D89800",
  black: "rgba(0, 0, 0, 0.8)",
  lightYellow: "#F9F7F1",
  white: "#FFFFFF",
  offWhite: "rgba(255, 255, 255, 0.8)",
  red: "rgba(195,33,33,1)",
};
