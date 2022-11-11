import {
  Box,
  Input,
  Button,
  Text,
  Heading,
  Container,
  FormControl,
  FormHelperText,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Wrap,
  WrapItem,
  Image,
  Center,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CallToActionBlock from "./call-to-action-block";
import preview1 from "./images/preview1.jpg";
import preview2 from "./images/preview2.jpg";
import preview3 from "./images/preview3.jpg";
import preview4 from "./images/preview4.jpg";

const Waitlist = () => {
  return (
    <Box bgGradient="linear(to-b, bg-accent 50%, bg-canvas 50%, )">
      <Container py={{ base: "16", md: "24" }}>
        <Box
          bg="bg-surface"
          py={{ base: "10", md: "16" }}
          px={{ base: "6", md: "16" }}
          borderRadius="lg"
          boxShadow={useColorModeValue("sm", "sm-dark")}
        >
          <Stack
            spacing={{ base: "8", md: "8" }}
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
          >
            <Stack spacing={{ base: "4", md: "5" }}>
              <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
                We take care of the rest! ✨
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
                Every week we will email you highlights from your pets adventure
                through the Whiskerverse:
              </Text>
              <Wrap spacing="6">
                <WrapItem>
                  <Image src={preview1} />
                </WrapItem>
                <WrapItem>
                  <Image src={preview2} />
                </WrapItem>
                <WrapItem>
                  <Image src={preview3} />
                </WrapItem>
                <WrapItem>
                  <Image src={preview4} />
                </WrapItem>
              </Wrap>
            </Stack>
          </Stack>
          <Center>
            <CallToActionBlock />
          </Center>
        </Box>
      </Container>
    </Box>
  );
};

export default Waitlist;
