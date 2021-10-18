import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


export default function ThemeToggler() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    //only show toggle button when we are mounted
    useEffect(() => setMounted(true), [])
  
    if (!mounted) return null
  
    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="w-6 inline" /> 
        </button>
    )
}
