import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import { Theme } from "config/theme";
import { Routes } from "routes";
import { GlobalStyles } from "components/global-styles";

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <Router>
                <GlobalStyles />
                <Routes />
            </Router>
        </ThemeProvider>
    );
}

export default App;
