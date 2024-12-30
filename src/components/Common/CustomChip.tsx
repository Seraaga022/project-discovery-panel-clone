import { Box, BoxProps } from "@mui/material";

const CustomChip: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      border="1px solid #535353"
      borderRadius="12px"
      bgcolor="#353535"
      color="#d4d4d4"
      width="fit-content"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="3px"
      px="5px"
      py="2px"
      {...props}
    >
      {children}
    </Box>
  );
};

export default CustomChip;
