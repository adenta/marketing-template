import {
  Box,
  Container,
  Stack,
  Badge,
  useBreakpointValue,
  Heading,
  Button,
  Text,
  Img,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

const Hero = () => {
  return (
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
                <Stack
                  spacing={{ base: "4", md: "6" }}
                  maxW={{ md: "xl", lg: "md", xl: "xl" }}
                >
                  <Heading size={useBreakpointValue({ base: "md", md: "xl" })}>
                    Recurit engineers with video
                  </Heading>
                  <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
                    Syurf helps you host engaging events to get prospective
                    candidates excited about your company.
                  </Text>
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} spacing="3">
                <LinkBox>
                  <LinkOverlay href="#waitlist">
                    <Button
                      variant="primary"
                      size={useBreakpointValue({ base: "lg", md: "xl" })}
                    >
                      Join Waitlist
                    </Button>
                  </LinkOverlay>
                </LinkBox>
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
              <Img
                boxSize="full"
                objectFit="cover"
                src="https://tinyurl.com/yeyjvptc"
                alt="Lady at work"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
