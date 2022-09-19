import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Header() {
    const { theme, setTheme } = useContext(ThemeContext);

    return <div>Active: {theme}
    <button className="theme-button" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>theme</button>
    </div>
}

export default Header;