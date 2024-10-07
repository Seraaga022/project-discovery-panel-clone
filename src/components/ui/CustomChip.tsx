import { Box, BoxProps } from "@mui/material";

const CustomChip = ({
  children,
  ...props
}: React.PropsWithChildren & BoxProps) => {
  return (
    <Box
      sx={{
        border: "1px solid #535353",
        borderRadius: "12px",
        bgcolor: "#353535",
        color: "#d4d4d4",
        width: "fit-content",
      }}
      {...props}
    >
      <Box
        display="flex"
        gap="3px"
        justifyContent="center"
        alignItems="center"
        px="5px"
        py="4px"
        textTransform="uppercase"
      >
        {children}
      </Box>
    </Box>
  );
};

export default CustomChip;
