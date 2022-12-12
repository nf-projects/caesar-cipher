/* eslint-disable react/no-unescaped-entities */
import { CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Center,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { caesarEncrypt } from "../util/caesar";
import { crackCaesarCipher } from "../util/hacker";

const HackerComponent: NextPage = () => {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string>("");

  useEffect(() => {
    if(input != "") {
      setOutput("Loading");
    }
    async function getData() {
      if (input != "") {
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
        <Stack spacing={4}>
          <InputGroup mt="20px">
            <Input
              placeholder="Enter input to hack"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <InputRightElement>
              <Button
                onClick={() => {
                  navigator.clipboard.readText().then((clipText) => {
                    setInput(clipText);
                  });
                }}
                variant="ghost"
                colorScheme="teal"
                size="sm"
              >
                <CopyIcon color="blue.500" />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>

        <Heading mt="20px">Output</Heading>
        <Card mt="20px">
          {output != "Loading" ? (
            <CardBody>{output}</CardBody>
          ) : (
            <Center h="50px">
              <Spinner
                thickness="2px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
              ></Spinner>
            </Center>
          )}
        </Card>
        <Center>
        <Button
            onClick={() => {
              navigator.clipboard.writeText(
                output
              );
            }}
            variant="ghost"
            colorScheme="teal"
            size="sm"
            mt="20px"
          >
            <CopyIcon></CopyIcon>
            Copy Output
          </Button>
        </Center>

        <hr></hr>
        <Center>
          <Heading>Caesar Hacker</Heading>
        </Center>
        <p>
          This code guesses the key used to encrypt a message. It does this by
          generating the output for every possible key, then checking the amount
          of correct English/German words in the output. The output with the
          greatest number of valid words is probably the correct key.
        </p>
      </Container>
    </>
  );
};

export default HackerComponent;
