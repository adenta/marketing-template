import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
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
        <HStack>
          <Flex width="100%" align="center" justify="center">
            <Heading size="md" whiteSpace="pre-wrap">
              {"Take pictures from\n different angles"}
            </Heading>
          </Flex>
          <Box width="full" overflow="hidden">
            <Image
              maxW="100%"
              minH={{ base: "100%", lg: "560px" }}
              objectFit="cover"
              src={miley}
              alt="Developer"
            />
          </Box>
        </HStack>
      </Stack>
    </Container>
  </Box>
);

export default Features;
