import { HStack, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (searchTerm: string) => void;
}

export const NavBar = ({ onSearch }: NavBarProps) => {
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
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
