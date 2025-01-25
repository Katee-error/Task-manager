import { extendTheme } from "@chakra-ui/react";

const baseColors = {
  blue: "#2598F0",
  red: "#F01A1E",
  white: "#FFFFFF",
  green: "#00E454",
};
const semanticColors = {
  primaryText: "#fafafa",
  secondaryText: "rgba(255, 255, 255, 0.6)",
  headingSecondaryText: "rgba(255, 255, 255, 0.7)",
  background: "#171717",
  cardBackground: "#262626",
  columnBackground: "#232323",
  buttonBackground: "rgba(255, 255, 255, 0.08)",
  buttonBackgroundFocus: "rgba(255, 255, 255, 0.2)",
  border: "rgba(255, 255, 255, 0.5)",
  inputBorder: "rgba(255, 255, 255, 0.3)",
  counterBackground:"rgba(255, 255, 255, 0.19)",
  columnBorder: '#525252',
  primary: baseColors.blue,
  error: baseColors.red,
  todoIndicator: baseColors.red,
  inProgressIndicator: baseColors.white,
  rewiewIndicator: baseColors.blue,
  doneIndicator: baseColors.green,
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "background",
        height: "100vh",
      },
    },
  },
  colors: {
    ...baseColors,
    ...semanticColors,
  },
  fonts: {
    body: "'Nunito', sans-serif",
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
            borderRadius: "20px",
          },
          body: {
            padding: "16px",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "500",
        letterSpacing: "0em",
        color: "primaryText",
      },
      variants: {
        h1: {
          color: "primaryText",
          fontSize: "40px",
          lineHeight: "70%",
        },
        h2: {
          color: "primaryText",
          fontSize: "20px",
          fontWeight: '600',
          lineHeight: "117%",
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: "16px",
        letterSpacing: "-0.03em",
      },
      variants: {
        regular: {
          fontWeight: "400",
          lineHeight: "150%",
          color: "secondaryText",
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
            fontWeight: "400",
            fontSize: "16px",
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
          width: "240px",
          height: "22px",
          fontWeight: "regular",
          fontSize: "18px",
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
