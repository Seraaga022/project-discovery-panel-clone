import "@mui/material/styles";

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
