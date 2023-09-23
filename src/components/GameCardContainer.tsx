import { Box } from "@chakra-ui/react";

interface GameCardContainerProps {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box
      width={"100%"}
      borderRadius={10}
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.15s ease-in-out",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
