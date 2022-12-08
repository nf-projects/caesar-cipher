import {
  Card,
  CardBody,
  Container,
  Heading,
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  StackDivider,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import { caesarEncrypt } from "../util/caesar";

const Home: NextPage = () => {
  const [value, setValue] = useState("");
  const [sliderValue, setSliderValue] = useState(0);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <Container>
      <Heading>Eingabe</Heading>
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Basic usage"
      />
      <Heading>Caesar-Schlüssel</Heading>

      <div style={{ height: "20px" }} />
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
        <SliderMark value={0} {...labelStyles}>
          0
        </SliderMark>
        <SliderMark value={26} {...labelStyles}>
          26
        </SliderMark>
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
      <Heading>Ausgabe</Heading>
      <Card>
        <CardBody>
          {caesarEncrypt(value, sliderValue)}
        </CardBody>
      </Card>
    </Container>
  );
};

export default Home;
