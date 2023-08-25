import {
  Layout,
  AppBar,
  ToggleThemeButton,
  TitlePortal,
  defaultTheme,
} from "react-admin";
import { createTheme } from "@mui/material";

const DarkTheme = createTheme({
  palette: { mode: "dark" },
});

const CustomAppBar = () => (
  <AppBar>
    <ToggleThemeButton lightTheme={defaultTheme} darkTheme={DarkTheme} />
  </AppBar>
);
export const AppLayout = (props) => <Layout {...props} appBar={CustomAppBar} />;
