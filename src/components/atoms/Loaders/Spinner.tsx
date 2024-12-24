import { styled } from "@mui/material";
import { Box } from "@mui/material";

const LineSpinner = styled(Box)`
  width: 15px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background: linear-gradient(0deg, #a1a1aa 30%, transparent 0 70%, #a1a1aa 0)
      50%/8% 100%,
    linear-gradient(90deg, #a1a1aa 30%, transparent 0 70%, #a1a1aa 0) 50%/100%
      8%;
  background-repeat: no-repeat;
  animation: l23 1s infinite steps(12);

  &::after,
  &::before {
    content: "";
    grid-area: 1 / 1;
    border-radius: 50%;
    background: inherit;
    opacity: 0.915;
    transform: rotate(30deg);
  }

  &::after {
    opacity: 0.83;
    transform: rotate(60deg);
  }

  @keyframes l23 {
    100% {
      transform: rotate(1turn);
    }
  }
`;
const Spiner = () => {
  return <LineSpinner />;
};

export default Spiner;
