import { useContext, useState } from "react"
import ThemeContext from "../contexts/ThemeContext";

const Header = () => {
    const [IsDark, setIsDark] = useContext(ThemeContext) || useState(false);
    const themeMode = () => {
        IsDark? setIsDark(false) : setIsDark(true);
        localStorage.setItem('DarkMode',!IsDark);
    }
    return (
        <header className={IsDark? "px-7 flex  shadow-sm shadow-slate-400 dark sticky top-0 z-10" : "px-7 flex shadow-sm shadow-slate-400 sticky top-0 z-10 bg-white text-black"}>
            <nav className="min-h-20 max-w-[1280px] w-full m-auto flex justify-between items-center">
                <div className="text-2xl">
                    <a className="font-bold text-base phones:text-xl" href="/">Where in the World?</a>
                </div>
                <div className="flex items-center gap-4 select-none cursor-pointer" onClick={themeMode}>
                    <i className={IsDark ? "fas fa-sun" : "fas fa-moon"}></i>
                    <p>{IsDark ? "Dark" : "light"} Mode</p>
                </div>
            </nav>
        </header>
    )
}

export default Header