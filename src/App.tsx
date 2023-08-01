import "App.css";
import { useSelector } from "react-redux";
import { RootState } from "redux/config/configStore";
import Router from "./shared/Router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
    const theme = useSelector((state: RootState) => state?.theme);

    return (
        // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
            <GlobalStyle />
            <Router />
        </>
        // </ThemeProvider>
    );
}

export default App;
