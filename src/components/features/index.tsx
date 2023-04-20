import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { data } from "./data";

const Features = () => (
  <Box as="section" bg="bg-surface">
    <Container py={{ base: "16", md: "24" }}>
      <Stack spacing={{ base: "12", md: "16" }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          columnGap={8}
          rowGap={{ base: 10, md: 16 }}
        >
          {data.map((feature) => (
            <HStack key={feature.name} spacing={{ base: "4", md: "5" }}>
              <Center height="100px">
                <Divider colorScheme="black" orientation="vertical" />
              </Center>
              <Stack spacing={{ base: "1", md: "2" }} flex="1">
                <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold">
                  {feature.name}
                </Text>
              </Stack>
            </HStack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
);

export default Features;
