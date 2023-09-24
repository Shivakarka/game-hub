import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"} fontSize={"2xl"}>
        <FaMoon />
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
