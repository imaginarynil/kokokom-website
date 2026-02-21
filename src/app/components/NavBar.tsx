import { Flex, IconButton } from "@chakra-ui/react";
import Logo from "./Logo";
import { IoMenu } from "react-icons/io5";

function NavBar() {
  return (
    <Flex padding="1rem" alignItems="center">
      <Logo marginRight="auto" />
      <IconButton size="lg" variant="ghost">
        <IoMenu />
      </IconButton>
    </Flex>
  );
}

export default NavBar;
