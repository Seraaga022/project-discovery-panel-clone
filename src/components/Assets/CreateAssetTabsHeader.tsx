import { Clear } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const CreateAssetTabsHeader: React.FC<{
  dialogOpenSetter: React.Dispatch<React.SetStateAction<boolean>>;
  activeTabSetter: React.Dispatch<React.SetStateAction<number>>;
  activeTab: number;
}> = ({ dialogOpenSetter, activeTabSetter, activeTab }) => {
  return (
    <>
      {/* close button */}
      <Box display="flex" justifyContent="end" mr="20px" mt="20px">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={(event) => {
            event.stopPropagation();
            dialogOpenSetter(false);
          }}
        >
          <Clear
            sx={{
              color: "#b6b6b7",
              fontSize: "18px",
              "&:hover": {
                color: "#fff",
              },
              cursor: "pointer",
              transition: "color ease-in 150ms",
            }}
          />
        </Box>
      </Box>
      {/* texts */}
      <Box>
        <Box pl="25px">
          {/* heading */}
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#fff",
                fontSize: "15.6px",
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              Add your assets
            </Typography>
          </Box>
          {/* description */}
          <Box mt="5px">
            <Typography
              variant="subtitle2"
              sx={{
                color: "#a1a1a1",
                fontSize: "13px",
                letterSpacing: 0.5,
              }}
            >
              Provide domain, IP, or CIDR to start discovery for public assets.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* tabs */}
      <Box boxSizing="border-box" px="25px" mt="15px" mb="7px">
        <Box
          height="38px"
          display="flex"
          borderRadius="8px"
          bgcolor="rgb(24 24 27/1)"
          boxSizing="border-box"
          p="4px"
        >
          {/* scope tab */}
          <Box
            flex={1}
            height="100%"
            bgcolor={activeTab === 0 ? "rgb(10 10 10/1)" : "none"}
            borderRadius="5px"
            sx={{
              cursor: "pointer",
              userSelect: "none",
              transition: "background ease-in 100ms",
            }}
            onClick={() => activeTab !== 0 && activeTabSetter(0)}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: "rgb(161 161 170/1)",
                  fontSize: "13px",
                  opacity: activeTab === 0 ? 1 : 0.7,
                  textTransform: "capitalize",
                  letterSpacing: 0.5,
                  fontWeight: 600,
                }}
              >
                scope
              </Typography>
            </Box>
          </Box>
          {/* advanced tab */}
          <Box
            flex={1}
            height="100%"
            bgcolor={activeTab === 1 ? "rgb(10 10 10/1)" : "none"}
            borderRadius="5px"
            sx={{
              cursor: "pointer",
              userSelect: "none",
              transition: "background ease-in 100ms",
            }}
            onClick={() => activeTab !== 1 && activeTabSetter(1)}
          >
            <Box
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: "rgb(161 161 170/1)",
                  opacity: activeTab === 1 ? 1 : 0.7,
                  fontSize: "13px",
                  textTransform: "capitalize",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                }}
              >
                advanced
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateAssetTabsHeader;
