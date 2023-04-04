import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import house from "../../public/house.jpeg";
export const Hero = () => (
  <Box as="section" bg="bg-surface">
    <Box position="relative" height={{ lg: "720px" }}>
      <Container py={{ base: "16", md: "24" }} height="full">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "16" }}
          align={{ lg: "center" }}
          height="full"
        >
          <Stack spacing={{ base: "8", md: "12" }}>
            <Stack spacing="4">
              <Badge
                colorScheme="blue"
                alignSelf="start"
                size={{ base: "md", md: "lg" }}
              >
                Perch
              </Badge>
              <Stack
                spacing={{ base: "4", md: "6" }}
                maxW={{ md: "xl", lg: "md", xl: "xl" }}
              >
                <Heading size={{ base: "md", md: "xl" }}>
                  Golden Girls as a Service
                </Heading>
                <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
                  Live out your golden years with friends in style.
                </Text>
              </Stack>
            </Stack>
            <Stack direction={{ base: "column", md: "row" }} spacing="3">
              <Button variant="primary" size={{ base: "lg", md: "xl" }}>
                Become a Resident
              </Button>
              <Button variant="secondary" size={{ base: "lg", md: "xl" }}>
                Host your Property
              </Button>
            </Stack>
          </Stack>
          <Box
            pos={{ lg: "absolute" }}
            right="0"
            bottom="0"
            w={{ base: "full", lg: "50%" }}
            height={{ base: "96", lg: "full" }}
            sx={{
              clipPath: { lg: "polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)" },
            }}
          >
            <Img boxSize="full" objectFit="cover" src={house} />
          </Box>
        </Stack>
      </Container>
    </Box>
  </Box>
);
