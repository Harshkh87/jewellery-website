import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#580140",
    200: "white",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E"
  }
};

const fonts = {
    fonts: {
        h11: 'EB Garamond',
        h12: 'Plus Jakarta Sans',
        h13: 'Inter',
      }
};

const customTheme = extendTheme({ colors , fonts});

export default customTheme;
