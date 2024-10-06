import React from "react";


export const ThemeContext = React.createContext({
    ThemeMode : "light",
    DarkMode : () => {},
    LightMode : () => {}
}
)

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme()
{
    return React.useContext(ThemeContext)
} 