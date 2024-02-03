import React, { createContext, useState } from 'react';

// define the type for the theme context value
type ThemeContextValue = {
  theme: boolean;
  toggleTheme: () => void;
};

// create the theme context with initial values
export const ThemeContext = createContext<ThemeContextValue>({
  theme: false,
  toggleTheme: () => {},
});

// custom hook to access the theme context
export const useTheme = () => {
  const themeContext = React.useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return themeContext;
};

// Theme provider component to wrap around the app
export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  }

  // Define the context value
  const themeContextValue: ThemeContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
