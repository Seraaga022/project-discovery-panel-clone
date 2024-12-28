import { Box, Typography } from "@mui/material";

const AssetNavbarItemsCounter: React.FC<{ assetType: string }> = ({
  assetType,
}) => {
  // fetch count of items with its type name
  console.log(assetType);
  const COUNT = 0;

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="1px solid #515050"
        bgcolor="#adadad"
        borderRadius="5px"
        width={15.5}
        height="19px"
      >
        <Typography
          variant="subtitle2"
          sx={{ color: "#171717", fontSize: "10px" }}
          fontFamily="cursive"
        >
          {COUNT}
        </Typography>
      </Box>
    </Box>
  );
};

export default AssetNavbarItemsCounter;
