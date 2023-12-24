import React, { createContext, useContext, ReactNode, useState } from 'react';
import theme from '../styles/theme';

export type Theme = typeof theme.light | typeof theme.dark;

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  theme: Theme;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const contextValues: DarkModeContextProps = {
    darkMode,
    toggleDarkMode,
    theme: darkMode ? theme.dark : theme.light
  };

  return (
    <DarkModeContext.Provider value={contextValues}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
