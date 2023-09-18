import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={"10px"}>
      <HStack>
        <Image src={logo} boxSize={"60px"} />
        <Show above="lg">
          <Text fontSize={"2xl"} fontWeight={"bold"} marginEnd={"30px"}>
            GameHub
          </Text>
        </Show>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
