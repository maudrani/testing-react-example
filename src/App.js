import { ThemeProvider } from "@mui/material";
import LoginPage from "pages/Login";
import { theme } from "styles/theme";
import "./styles/globals.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
