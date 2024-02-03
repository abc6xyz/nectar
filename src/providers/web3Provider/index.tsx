import React, { createContext, useState } from 'react';

// define the type for the theme context value
type Web3ProviderContextValue = {
  theme: boolean;
  toggleWeb3Provider: () => void;
};

// create the theme context with initial values
export const Web3ProviderContext = createContext<Web3ProviderContextValue>({
  theme: false,
  toggleWeb3Provider: () => {},
});

// custom hook to access the theme context
export const useWeb3Provider = () => {
  const themeContext = React.useContext(Web3ProviderContext);
  if (!themeContext) {
    throw new Error('useWeb3Provider must be used within a Web3ProviderProvider');
  }
  return themeContext;
};

// Web3Provider provider component to wrap around the app
export const Web3ProviderProvider: React.FC = ({ children }) => {
  const [theme, setWeb3Provider] = useState(false);

  const toggleWeb3Provider = () => {
    setWeb3Provider(!theme);
  }

  // Define the context value
  const themeContextValue: Web3ProviderContextValue = {
    theme,
    toggleWeb3Provider,
  };

  return (
    <Web3ProviderContext.Provider value={themeContextValue}>
      {children}
    </Web3ProviderContext.Provider>
  );
};
