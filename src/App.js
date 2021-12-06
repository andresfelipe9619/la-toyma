import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import RouterApp from "./router/router.app";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterApp />
    </ThemeProvider>
  );
}

export default App;
