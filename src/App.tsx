import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { Theme, MuiTheme } from "config/theme";
import { Routes } from "routes";
import { GlobalStyles } from "components/global-styles";

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <MuiThemeProvider theme={MuiTheme}>
                <Router>
                    <GlobalStyles />
                    <Routes />
                </Router>
            </MuiThemeProvider>
        </ThemeProvider>
    );
}

export default App;
