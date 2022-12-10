import { LockIcon, StarIcon } from "@chakra-ui/icons";
import { Stack, Button } from "@chakra-ui/react";
import React from "react";

type ComponentProps = {
  tabFunction: (tab: string) => void;
};

function NavBar(props: ComponentProps) {
  return (
    <Stack
      mt="20px"
      isInline
      spacing={8}
      align="center"
      justifyContent="center"
    >
      <Button leftIcon={<LockIcon></LockIcon>} colorScheme="green" onClick={() => props.tabFunction("encrypter")}>Encrypter/Decrypter</Button>
      <Button leftIcon={<StarIcon></StarIcon>} colorScheme="blue" onClick={() => props.tabFunction("hacker")}>Caesar Hacker</Button>
    </Stack>
  );
}

export default NavBar;
