/* eslint-disable react/no-unescaped-entities */
import { ArrowUpDownIcon, CopyIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Center,
  Container,
  FormControl,
  Heading,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { caesarEncrypt } from "../util/caesar";

const EncrypterComponent: NextPage = () => {
  const [input, setInput] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [encryptMode, setEncryptMode] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();

  function handleSwitch() {
    setEncryptMode(!encryptMode);
    // set input to output and vice versa
    setInput(caesarEncrypt(input, sliderValue, encryptMode));
  }

  return (
    <>
      <Container>
        <Heading mt="20px">Input</Heading>
        <Input
          mt="20px"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter input to encrypt/decrypt..."
        />
        <Heading mt="20px">Key</Heading>

        <FormControl mt="40px">
          <Slider
            defaultValue={0}
            min={0}
            max={26}
            step={1}
            aria-label="slider-ex-5"
            onChange={(val) => setSliderValue(val)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
            <SliderMark
              value={sliderValue}
              textAlign="center"
              bg="blue.500"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {sliderValue}
            </SliderMark>
          </Slider>
        </FormControl>
        <HStack>
          <p>{encryptMode ? "Encrypt Mode" : "Decrypt Mode"}</p>
          <Switch
            onChange={() => setEncryptMode(!encryptMode)}
            isChecked={encryptMode}
          />
        </HStack>

        <Heading mt="20px">Output</Heading>
        <Card mt="20px">
          <CardBody>{caesarEncrypt(input, sliderValue, encryptMode)}</CardBody>
        </Card>
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
          <Button
            onClick={handleSwitch}
            variant="ghost"
            colorScheme="teal"
            size="sm"
            mt="20px"
            isDisabled={input == ""}
          >
            <ArrowUpDownIcon></ArrowUpDownIcon>
            Switch
          </Button>{" "}
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                caesarEncrypt(input, sliderValue, encryptMode)
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
          <Heading>Caesar Encryption</Heading>
        </Center>
        <p>
          This code encrypts or decrypts an input string using the{" "}
          <b>Caesar Encryption</b> algorithm. For example, "abc" with a key of 1
          will be "bcd". Numbers are also incremented, so "abc 5" with a key of
          1 will be "bcd 6".
        </p>
      </Container>
    </>
  );
};

export default EncrypterComponent;
