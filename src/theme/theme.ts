import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "url('/assets/bg-img.png')",
        backgroundSize: "cover",
        color: "white",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      },
    },
  },
  colors: {
    primaryText: "rgba(255, 255, 255, 0.87)",
    secondaryText: "rgba(255, 255, 255, 0.6)",
    background: "rgba(0,0,0, 0.7)",
    border: "rgba(255, 255, 255, 0.5)",
    blue: "#0184CF",
    red: "rgba(252, 54, 57, 0.6)",
  },
  fonts: {
    body: "'Inter', sans-serif",
  },
  components: {
    Editable: {
      baseStyle: {
        preview: {
          padding: 0,
          fontSize: "14px",
          fontWeight: "700",
          lineHeight: "157%",
          color: "primaryText",
        },
      },
    },
    Card: {
      variants: {
        info: {
          container: {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "white",
            borderRadius: "4px",
          },
          body: {
            padding: "16px",
          },
        },
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
          color: "secondaryText",
        },
        bold: {
          fontWeight: "700",
          lineHeight: "157%",
          color: "primaryText",
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
      variants: {
        editable: {
          field: {
            border: "1px solid",
            borderColor: "border",
            borderRadius: "4px",
            background: "none",
            padding: "10px",
            width: "200px",
            height: "22px",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "157%",
            letterSpacing: "-0.03em",
            color: "white",
            _active: {
              borderColor: "blue",
            },
            _hover: {
              borderColor: "blue",
            },
            _focus: {
              borderColor: "blue",
            },
          },
        },
      },
    },
  },
});

export default theme;
