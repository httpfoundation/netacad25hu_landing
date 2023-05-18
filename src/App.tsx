import React from 'react'
import './App.scss'
import {ThemeProvider} from "@mui/material";
import {HashRouter, Route, Routes} from "react-router-dom";
import theme from "./theme";
import {LandingPage} from "./pages/LandingPage";
import {EscapeRoomBookingPage} from "./pages/EscapeRoomBookingPage";

export const AppContext = React.createContext<undefined | { apiKey: string }>(undefined)

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <AppContext.Provider
                    value={{apiKey: "1a6a606f0a56bde210db59c9fbf601"}}
                >
                    <Routes>
                        <Route path="/szabaduloszoba" element={<EscapeRoomBookingPage/>}/>
                        <Route index element={<LandingPage/>}/>
                    </Routes>
                </AppContext.Provider>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App



