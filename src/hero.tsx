import {
  Box,
  Button,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";
import { HiPlay } from "react-icons/hi";
import CallToActionBlock from "./call-to-action-block";
import greetingCardMock from "./images/greeting-card-mock.jpg";
import greetingCardMockCat from "./images/greeting-card-cat-mock.jpg";

export function Hero() {
  return (
    <Box as="section" bg={mode("gray.50", "gray.800")} pt="16" pb="24">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "3rem", lg: "2rem" }}
          mt="8"
          align={{ lg: "center" }}
          justify="space-between"
        >
          <Box flex="1" maxW={{ lg: "520px" }}>
            <Text
              fontSize="xl"
              style={{ fontVariant: "small-caps" }}
              fontWeight="semibold"
              color={mode("blue.600", "blue.300")}
              letterSpacing="wide"
            >
              Whiskerverse
            </Text>
            <Heading
              as="h1"
              size="3xl"
              color={mode("blue.600", "blue.300")}
              mt="8"
              fontWeight="light"
              letterSpacing="tight"
            >
              Greeting cards with{" "}
              <b>your {import.meta.env.VITE_PET_TYPE || "pet"}</b>
            </Heading>

            <CallToActionBlock />
          </Box>
          <motion.div
            animate={{
              translateY: [0, 7, 0],
            }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Box
              pos="relative"
              w={{ base: "full", lg: "560px" }}
              h={{ base: "auto", lg: "560px" }}
            >
              <Img
                w="full"
                pos="relative"
                zIndex="1"
                h={{ lg: "100%" }}
                objectFit="cover"
                src={
                  import.meta.env.VITE_PET_TYPE == "cat"
                    ? greetingCardMockCat
                    : greetingCardMock
                }
                alt="Miley"
              />
              <Box
                pos="absolute"
                w="100%"
                h="100%"
                top="-4"
                left="-4"
                bg={mode("gray.200", "gray.700")}
              />
            </Box>
          </motion.div>
        </Stack>
      </Box>
    </Box>
  );
}
