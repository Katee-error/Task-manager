import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "url('/assets/bg-img.png')",
        backgroundSize: "cover",
        color: "white",
      },
    },
  },
  colors: {
    primary: "rgba(255, 255, 255, 0.87)",
    secondary: "rgba(255, 255, 255, 0.6)",
    blue: "#0184CF",
    red: "rgba(252, 54, 57, 0.6)",
  },
  fonts: {
    body: "'Inter', sans-serif",
  },
  components: {
    Card: {
      baseStyle: {
        bg: "rgba(255, 255, 255, 0.1)",
        color: "white",
        borderRadius: "4px",
        padding: 4,
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "700",
        letterSpacing: "0em",
        color: "rgba(255, 255, 255, 0.87)",
      },
      variants: {
        h1: {
          fontSize: "40px",
          lineHeight: "70%",
        },
        h2: {
          fontSize: "24px",
          lineHeight: "117%",
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: "14px",
        letterSpacing: "-0.03em",
      },
      variants: {
        regular: {
          fontWeight: "400",
          lineHeight: "150%",
          color: "secondary",
        },
        bold: {
          fontWeight: "700",
          lineHeight: "157%",
          color: "primary",
        },
        ended: {
          color: "red",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "full",
      },
      variants: {
        solid: {
          bg: "accent",
          color: "white",
          _hover: {
            bg: "accent",
            transform: "scale(1.05)",
          },
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          color: "white",
        },
      },
    },
  },
});

export default theme;
