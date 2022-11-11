import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  useColorModeValue as mode,
  Image,
  Square,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiArrowRight, FiWifiOff } from "react-icons/fi";
import { FaBalanceScale } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import miley from "./images/miley.jpg";
import miley2 from "./images/miley2.jpg";
import miley3 from "./images/miley3.jpg";
import FeatureRow from "./images/feature-row";

export const Features = () => (
  <Box as="section" bg="bg-surface">
    <Container py={{ base: "16", md: "24" }}>
      <Stack spacing={{ base: "12", md: "16" }}>
        <Stack spacing={{ base: "4", md: "5" }} maxW="3xl">
          <Stack spacing="3">
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="semibold"
              color="accent"
            >
              Getting Started
            </Text>
            <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
              How does it work?
            </Heading>
          </Stack>
          <Text color="muted" fontSize={{ base: "lg", md: "xl" }}>
            Upload 10-20 pictures of your pet, and we take care of the rest.
          </Text>
        </Stack>
        <FeatureRow
          image={miley3}
          caption={"Take pictures from different angles"}
        />
        <FeatureRow
          image={miley2}
          caption={"Use a variety of poses"}
          reverseDirection
        />
        <FeatureRow
          image={miley}
          caption={"Hold a treat behind the camera so they look up!"}
        />
        {/* <Stack direction={["column", "row"]}>
          <Flex width={["100%", "80%"]} align="center" justify="center">
            <Heading
              borderRadius="lg"
              maxWidth="96"
              padding="3"
              background="gray.100"
              size="md"
              textAlign="center"
              color={mode("blue.600", "blue.300")}
              whiteSpace="pre-wrap"
            >
              {"Use a variety of poses"}
            </Heading>
          </Flex>
          <Box width="full" overflow="hidden">
            <Image
              maxW="100%"
              minH={{ base: "100%", lg: "560px" }}
              objectFit="cover"
              src={miley2}
              alt="Miley"
            />
          </Box>
        </Stack>
        <Stack direction={["column", "row"]}>
          <Flex width="80%" align="center" justify="center">
            <Heading
              borderRadius="lg"
              maxWidth="96"
              padding="3"
              background="gray.100"
              size="md"
              textAlign="center"
              color={mode("blue.600", "blue.300")}
              whiteSpace="pre-wrap"
            >
              {"Hold a treat behind the camera so they look up!"}
            </Heading>
          </Flex>
          <Box width="full" overflow="hidden">
            <Image
              maxW="100%"
              minH={{ base: "100%", lg: "560px" }}
              objectFit="cover"
              src={miley3}
              alt="Miley"
            />
          </Box>
        </Stack> */}
      </Stack>
    </Container>
  </Box>
);

export default Features;
