export const systemSettings = {
  darkMode: false,
  colors: {
    light: {
      primary: "#C5A361",
      secondary: "#A9A9A9",
      third: "#BDBDBD",
      fourth: "#79797C", 
      black: "#222222",
      white: "#FFFFFF",
    },
    dark: {
      primary: "#4ECD9D",
      secondary: "#1F2024",
      third: "#28292D",
      fourth: "#79797C",
      black: "#222222",
      white: "#FFFFFF",
    },
  },
};

export default systemSettings.darkMode
  ? systemSettings.colors.dark
  : systemSettings.colors.light; // this is for tailwind since it only works with export default (module)
