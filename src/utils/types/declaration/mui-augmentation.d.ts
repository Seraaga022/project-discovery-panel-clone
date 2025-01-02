import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    default: React.CSSProperties; // Define your custom variant
  }

  // Allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    default?: React.CSSProperties; // Optional for theme customization
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    default: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true; // Add this line to allow customColor in color prop
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    white: PaletteColor;
  }
  interface PaletteOptions {
    white: PaletteColorOptions;
  }

  // allow using all shades
  interface PaletteColor {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }
  interface PaletteColorOptions {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }
}
