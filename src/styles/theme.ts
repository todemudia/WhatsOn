const lightTheme = {
  primary: '#007bff',
  background: '#fff',
  foreground: '#ECD06F',
  text: '#333'
};

const darkTheme = {
  primary: '#e34234',
  background: '#000',
  foreground: '#232D3F',
  text: '#fff'
};

const defaultTheme = {
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px'
  },
  borderRadius: {
    small: '5px',
    medium: '10px',
    large: '15px',
    circle: '50%'
  }
};

const theme = {
  dark: {
    color: darkTheme,
    ...defaultTheme
  },
  light: {
    color: lightTheme,
    ...defaultTheme
  }
};

export default theme;