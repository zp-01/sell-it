import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
    primary: colors.primary,
  },
};
