/* eslint-disable react/no-unescaped-entities */
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Center,
  Container,
  FormControl,
  Heading,
  HStack,
  Icon,
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
import Navbar from "../components/navbar";
import { caesarEncrypt } from "../util/caesar";

const EncrypterComponent: NextPage = () => {
  const [value, setValue] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [encryptMode, setEncryptMode] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Container>
        <Heading mt="20px">Input</Heading>
        <Input
          mt="20px"
          onChange={(e) => setValue(e.target.value)}
          value={value}
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
          <CardBody>{caesarEncrypt(value, sliderValue, encryptMode)}</CardBody>
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