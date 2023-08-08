import AuthContextProvider from "../src/contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MuiTheme from "./styles/global/MuiTheme";
import "./styles/global/App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import PrivateRoute from "./PrivateRoute";

function App() {
    const theme = createTheme(MuiTheme);
    return (
        <div id="App">
            <ThemeProvider theme={theme}>
                <AuthContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <PrivateRoute userShouldBe="loggedOut">
                                        <Home />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/login"
                                element={
                                    <PrivateRoute userShouldBe="loggedOut">
                                        <Login />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/signup"
                                element={
                                    <PrivateRoute userShouldBe="loggedOut">
                                        <Signup />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/dashboard"
                                element={
                                    <PrivateRoute userShouldBe="loggedIn">
                                        <Dashboard />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/logout"
                                element={<Home isLoggedOut={true} />}
                            />
                            <Route
                                path="*"
                                element={
                                    <PrivateRoute userShouldBe="loggedOut">
                                        <Home />
                                    </PrivateRoute>
                                }
                            />
                        </Routes>
                    </BrowserRouter>
                </AuthContextProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
