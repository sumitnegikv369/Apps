import { createContext, useState } from "react"
import Profile from "../components/Profile"
import { themePreference } from "../utils/content"

export const ThemeContext = createContext();

const Home = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div style={{backgroundColor: themePreference[theme].bg, color: themePreference[theme].text}} className="px-24 py-12 lg:w-1/2 md:mx-auto">
    <Profile/>
    </div>

  </ThemeContext.Provider>
  )
}


export default Home;