/* eslint-disable react/no-unescaped-entities */
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Center,
  Container, Heading, Input, useColorMode
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { caesarEncrypt } from "../util/caesar";
import { crackCaesarCipher } from "../util/hacker";

const HackerComponent: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string>("Loading...");

  useEffect(() => {
    async function getData() {
      if(input != "") {
        const bestKey = await crackCaesarCipher(input);
        setOutput(caesarEncrypt(input, bestKey, false) + " | Key: " + bestKey);
      }
    }
    getData();
  }, [input]);

  return (
    <>
      <Container>
        <Heading mt="20px">Input</Heading>
        <Input
          mt="20px"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <Heading mt="20px">Output</Heading>
        <Card mt="20px">
          <CardBody>{output}</CardBody>
        </Card>
        {/* TODO make this a component */}
        <Center>
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            colorScheme="teal"
            size="sm"
            mt="20px"
          >
            {colorMode == "dark" ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
            {colorMode == "light" ? "Light Mode" : "Dark Mode"}
          </Button>
        </Center>

        <hr></hr>
        <Center>
          <Heading>Caesar Hacker</Heading>
        </Center>
        <p>
          This code guesses the key used to encrypt a message. It does this by 
          generating the output for every possible key, then checking the amount of
          correct English words in the output. The output with the most correct
          English words is probably the correct key.
        </p>
      </Container>
    </>
  );
};

export default HackerComponent;
