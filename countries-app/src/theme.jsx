// import type { Theme } from "theme-ui";
const theme = {
    initialColorMode: "dark",
    buttons: {
        primary: {
          // Define a primary button variant
          color: "text",
          bg: "primary",
        },
      },
        forms:{
      input:{
        background:"primary"
      },
      select:{
        background:"primary"
      }
    },
    colors: {
      text: "rgba(255, 255, 255, 0.87)",
      background: "#202D36",
      primary: "#2B3743",
      inverseText: "blue",
      
      modes: {
        light: {
          text: "black",
          background: "#FAFAFA",
          primary: "white",
          
          inverseText: "green",
        },
      },
    },

  };
  
  export default theme;