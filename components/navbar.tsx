import { LockIcon, MoonIcon, StarIcon, SunIcon } from "@chakra-ui/icons";
import { Stack, Button, HStack, useColorMode, Box, Heading } from "@chakra-ui/react";
import React from "react";

type ComponentProps = {
  tabFunction: (tab: string) => void;
  currentTab: string;
};

function NavBar(props: ComponentProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Stack isInline spacing={8} align="center" justifyContent="space-between" margin="5px">
        <HStack marginX="10px">
          <Heading fontSize="2xl">Caesar Cipher</Heading>
        </HStack>
        <HStack marginX="10px">
          <Button
            mt="10px"
            mb="10px"
            leftIcon={<LockIcon></LockIcon>}
            colorScheme="green"
            onClick={() => props.tabFunction("encrypter")}
          >
            {props.currentTab == "encrypter" ? <b>Encrypter</b> : "Encrypter"}
          </Button>
          <Button
            leftIcon={<StarIcon></StarIcon>}
            colorScheme="blue"
            onClick={() => props.tabFunction("hacker")}
          >
            {props.currentTab == "hacker" ? <b>Hacker</b> : "Hacker"}
          </Button>
        </HStack>
        <HStack>
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            colorScheme="teal"
            size="sm"
            marginX="10px"
          >
            {colorMode == "dark" ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
            {colorMode == "light" ? "Light Mode" : "Dark Mode"}
          </Button>
        </HStack>
      </Stack>
      <Box >
        <hr></hr>
      </Box>
    </>
  );
}

export default NavBar;
