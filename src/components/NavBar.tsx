import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <HStack>
        <Image src={logo} boxSize={"60px"} />
        <Show above="lg">
          <Text fontSize={"2xl"} fontWeight={"bold"} marginEnd={"40px"}>
            GameHub
          </Text>
        </Show>
      </HStack>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
