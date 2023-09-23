import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <HStack>
        <Link to="/">
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Link>
      </HStack>
      <Show above="lg">
        <Text fontSize="2xl" fontWeight="bold">
          GameHub
        </Text>
      </Show>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
