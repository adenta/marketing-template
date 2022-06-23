import {
  Box,
  Button,
  Center,
  Circle,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
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
              size="4xl"
              fontWeight="extrabold"
              maxW="48rem"
              mx="auto"
              lineHeight="1.2"
              letterSpacing="tight"
              whiteSpace="pre-wrap"
            >
              {"Embeded PDF editor & e-sign for your app"}
            </Heading>
            <Text
              whiteSpace="pre-wrap"
              fontSize="xl"
              mt="4"
              maxW="xl"
              mx="auto"
            >
              {
                "React hooks & components to\n add legal workflows to your platform"
              }
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
              API Docs (coming soon)
            </Button>
          </Stack>
          <Center>
            <Tabs variant="enclosed" isFitted>
              <TabList>
                <Tab _selected={{ background: "white" }}>Create</Tab>
                <Tab _selected={{ background: "white" }}>Sign</Tab>
                <Tab _selected={{ background: "white" }}>Download</Tab>
              </TabList>
              <TabPanels borderRadius="lg" backgroundColor="white">
                <TabPanel>
                  <video src="/create.mp4" muted autoPlay loop controls />
                </TabPanel>
                <TabPanel>
                  <video src="/sign.mp4" muted autoPlay loop controls />
                </TabPanel>
                <TabPanel>
                  <video src="/download.mp4" muted autoPlay loop controls />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};
