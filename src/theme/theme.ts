import { extendTheme } from "@chakra-ui/react";

const baseColors = {
  blue: "#0184CF",
  red: "rgba(252, 54, 57, 0.6)",
};
const semanticColors = {
  primaryText: "rgba(255, 255, 255, 0.87)",
  secondaryText: "rgba(255, 255, 255, 0.6)",
  background: "rgba(0,0,0, 0.7)",
  cardBackground: "rgba(255, 255, 255, 0.1)",
  buttonBackground: "rgba(255, 255, 255, 0.08)",
  buttonBackgroundFocus: "rgba(255, 255, 255, 0.2)",
  border: "rgba(255, 255, 255, 0.5)",
  inputBorder: "rgba(255, 255, 255, 0.3)",
  primary: baseColors.blue,
  error: baseColors.red,
};

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
    ...baseColors,
    ...semanticColors,
  },
  fonts: {
    body: "'Inter', sans-serif",
  },
  shadows: {
    activeInput: "0 0 0 4px rgba(1, 132, 207, 0.5)",
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
            backgroundColor: "cardBackground",
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
          color: "error",
        },
      },
    },
    Button: {
      baseStyle: {},
      variants: {
        icon: {
          color: "primaryText",
          width: "18px",
          minWidth: "18px",
          height: "18px",
          border: "none",
          padding: "0",
          svg: {
            boxSize: "18px",
          },
          _hover: {
            color: "primary",
          },
          _active: {
            color: "primary",
          },
        },
        "icon-danger": {
          color: "secondaryText",
          width: "18px",
          minWidth: "18px",
          height: "18px",
          border: "none",
          svg: {
            boxSize: "18px",
          },
          _hover: {
            color: "error",
          },
          _active: {
            color: "error",
          },
        },
        "icon-button": {
          boxSizing: "18px",
          borderRadius: "full",
          border: "none",
          backgroundColor: "buttonBackground",
          color: "primaryText",
          svg: {
            boxSize: "24px",
          },
          _hover: {
            backgroundColor: "buttonBackgroundFocus",
          },
          _active: {
            backgroundColor: "buttonBackgroundFocus",
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
              borderColor: "primary",
            },
            _hover: {
              borderColor: "primary",
            },
            _focus: {
              borderColor: "primary",
            },
          },
        },
      },
    },
    Textarea: {
      variants: {
        editable: {
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
            borderColor: "primary",
          },
          _hover: {
            borderColor: "primary",
          },
          _focus: {
            borderColor: "primary",
          },
        },
      },
    },
  },
});

export default theme;
