import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ThemeContext from "../contexts/ThemeContext";
import { useState } from "react";

const App = () => {
    const [theme,setTheme] = useState(JSON.parse(localStorage.getItem('DarkMode')));
    return (
        <ThemeContext.Provider value={[theme,setTheme]}>
            <Header />
            <Outlet />
        </ThemeContext.Provider>
    )
}

export default App