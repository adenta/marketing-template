import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { Logo } from "../logo";
import { stats } from "./data";

export const StatWithCallToAction = () => (
  <Box as="section" bg="bg-accent" color="on-accent">
    <Container py={{ base: "16", md: "24" }}>
      <Stack spacing={{ base: "12", md: "16" }}>
        <Stack spacing={{ base: "4", md: "6" }}>
          <Stack
            spacing={{ base: "4", md: "5" }}
            textAlign="center"
            align="center"
          >
            <Heading size={{ base: "sm", md: "md" }}>How it works:</Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="on-accent-muted"
              maxW="3xl"
            >
              3 simple steps to an easier living
            </Text>
          </Stack>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          columnGap="8"
          rowGap="10"
        >
          {stats.map((stat, id) => (
            <Box
              key={id}
              borderLeftWidth={{ base: "0", md: "2px" }}
              borderTopWidth={{ base: "2px", md: "0" }}
              borderColor="bg-accent-muted"
              px={{ md: "6" }}
              pt={{ base: "4", md: "0" }}
            >
              <Stack spacing="5">
                <Stack spacing="1">
                  <Heading size="lg" color="on-accent">
                    {stat.value}
                  </Heading>
                  <Text
                    color="on-accent-muted"
                    fontSize="lg"
                    fontWeight="medium"
                  >
                    {stat.label}
                  </Text>
                </Stack>
                <Button
                  variant="link-on-accent"
                  alignSelf="start"
                  rightIcon={<FiArrowRight fontSize="1.25rem" />}
                >
                  {stat.link.label}
                </Button>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
);
