import {
  Card,
  CardBody,
  Container,
  FormControl, Heading,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack, Switch
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { caesarEncrypt } from "../util/caesar";

const Home: NextPage = () => {
  const [value, setValue] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [encryptMode, setEncryptMode] = useState(true);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <Container>
      <Heading mt="20px">Eingabe</Heading>
      <Input mt="20px"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Basic usage"
      />
      <Heading mt="20px">Caesar-Schlüssel</Heading>

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
        <p>{encryptMode ? 'Encrypt-Mode:' : 'Decrypt-Mode:'}</p>
        <Switch
          onChange={() => setEncryptMode(!encryptMode)}
          isChecked={encryptMode}
        />
      </HStack>

      <Heading mt="20px">Ausgabe</Heading>
      <Card mt="20px">
        <CardBody>{caesarEncrypt(value, sliderValue, encryptMode)}</CardBody>
      </Card>
    </Container>
  );
};

export default Home;
