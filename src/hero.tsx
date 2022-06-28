import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
import { IoMdWarning } from "react-icons/io";
import CodeSample from "./code-samples";
import Create from "./code-samples/create";

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
              {"Embed a PDF editor & e-sign in your app"}
            </Heading>
            <Text
              whiteSpace="pre-wrap"
              fontSize="xl"
              mt="4"
              maxW="xl"
              mx="auto"
            >
              {"API suite to add legal workflows to your platform"}
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
              href="#requestaccess"
              size="lg"
              colorScheme="blue"
              px="8"
              fontWeight="bold"
              fontSize="md"
            >
              Request Access
            </Button>
            <Button
              variant="outline"
              as="a"
              href="https://scribbleapi.notion.site/scribbleapi/Scribble-API-Docs-1faf2ee9b98c47f587c2cc08c244d811"
              size="lg"
              px="8"
              target="_blank"
              fontWeight="bold"
              fontSize="md"
            >
              API Documentation
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
                  <CodeSample id="create" />
                </TabPanel>
                <TabPanel>
                  <video src="/sign.mp4" muted autoPlay loop controls />
                  <CodeSample id="sign" />
                </TabPanel>
                <TabPanel>
                  <video src="/download.mp4" muted autoPlay loop controls />
                  <CodeSample id="download" />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};
