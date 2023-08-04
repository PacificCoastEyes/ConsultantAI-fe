import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MuiTheme from "./styles/global/MuiTheme";
import "./styles/global/App.css";

import Home from "./pages/Home";

function App() {
    const theme = createTheme(MuiTheme);
    return (
        <div id="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/logout" element={<Logout />} /> */}
                        <Route path="*" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
