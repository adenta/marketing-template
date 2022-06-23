import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
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

export const features = [
  {
    name: "Legally Compliant",
    description:
      "Automatically monitor documents when they are being signed so they can hold up in court.",
    icon: FaBalanceScale,
  },
  {
    name: "Bring your own UI",
    description:
      "No iframes here, we give you the tools to embed Scribble in your platform, however you want.",
    icon: GiFruitBowl,
  },
  {
    name: "Offline Friendly",
    description:
      "Store signature data in browser storage and upload when the device is back online.",
    icon: FiWifiOff,
  },
];

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
              Features
            </Text>
            <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
              What can you expect?
            </Heading>
          </Stack>
          <Text color="muted" fontSize={{ base: "lg", md: "xl" }}>
            Ready to use components for managing document upload, adding text
            &amp; signature fields, e-sign, and downloading signed documents.
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "12", lg: "16" }}
        >
          <Stack
            spacing={{ base: "10", md: "12" }}
            maxW="xl"
            justify="center"
            width="full"
          >
            {features.map((feature) => (
              <Stack key={feature.name} spacing="4" direction="row">
                <Square
                  size={{ base: "10", md: "12" }}
                  bg="accent"
                  color="inverted"
                  borderRadius="lg"
                >
                  <Icon as={feature.icon} boxSize={{ base: "5", md: "6" }} />
                </Square>
                <Stack
                  spacing={{ base: "4", md: "5" }}
                  pt={{ base: "1.5", md: "2.5" }}
                >
                  <Stack spacing={{ base: "1", md: "2" }}>
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      fontWeight="medium"
                    >
                      {feature.name}
                    </Text>
                    <Text color="muted">{feature.description}</Text>
                  </Stack>
                  <Divider />
                  {/* <Button
                    variant="link"
                    colorScheme="blue"
                    rightIcon={<FiArrowRight fontSize="1.25rem" />}
                    alignSelf="start"
                  >
                    Read more
                  </Button> */}
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Box width="full" overflow="hidden">
            <Image
              maxW="100%"
              minH={{ base: "100%", lg: "560px" }}
              objectFit="cover"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Developer"
            />
          </Box>
        </Stack>
      </Stack>
    </Container>
  </Box>
);

export default Features;
