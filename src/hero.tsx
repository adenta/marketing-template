import {
  Box,
  Button,
  Circle,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { FaPlay } from "react-icons/fa";

export const Hero = () => {
  return (
    <Box>
      <Img
        opacity={0.1}
        left="10"
        top="10"
        zIndex="-1"
        position="absolute"
        width="200px"
        borderRadius="lg"
        src="animated-logo.gif"
      />
      <Img
        opacity={0.1}
        right="30"
        top="400"
        zIndex="-1"
        position="absolute"
        width="200px"
        borderRadius="lg"
        src="second-animated-logo.gif"
      />

      <Box as="section" py="7.5rem">
        <Box
          maxW={{ base: "xl", md: "5xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <Box textAlign="center">
            <Heading
              as="h1"
              size="3xl"
              fontWeight="extrabold"
              maxW="48rem"
              mx="auto"
              lineHeight="1.2"
              letterSpacing="tight"
              whiteSpace="pre-wrap"
            >
              {"React SDK to deal \nwith documents"}
            </Heading>
            <Text
              whiteSpace="pre-wrap"
              fontSize="xl"
              mt="4"
              maxW="xl"
              mx="auto"
            >
              Hooks &amp; components to build legal software features
            </Text>
          </Box>

          <Stack
            justify="center"
            direction={{ base: "column", md: "row" }}
            mt="10"
            mb="20"
            spacing="4"
            align="center"
          >
            <Button
              as="a"
              href="#waitlist"
              size="lg"
              colorScheme="blue"
              px="8"
              fontWeight="bold"
              fontSize="md"
            >
              Join Waitlist
            </Button>
            <Button
              variant="outline"
              as="a"
              href="#"
              size="lg"
              px="8"
              fontWeight="bold"
              fontSize="md"
            >
              API Docs (beta)
            </Button>
          </Stack>

          <Box
            className="group"
            cursor="pointer"
            position="relative"
            rounded="lg"
            overflow="hidden"
          >
            <Img
              alt="Screenshot of Envelope App"
              src="https://res.cloudinary.com/chakra-ui-pro/image/upload/v1621085270/pro-website/app-screenshot-light_kit2sp.png"
            />
            <Circle
              size="20"
              as="button"
              bg="white"
              shadow="lg"
              color="blue.600"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate3d(-50%, -50%, 0)"
              fontSize="xl"
              transition="all 0.2s"
              _groupHover={{
                transform: "translate3d(-50%, -50%, 0) scale(1.05)",
              }}
            >
              <VisuallyHidden>Play demo video</VisuallyHidden>
              <FaPlay />
            </Circle>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
