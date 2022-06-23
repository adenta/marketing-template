import {
  Box,
  Input,
  Button,
  Text,
  Heading,
  Container,
  FormControl,
  FormHelperText,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import referlist from "referlist";

const Waitlist = () => {
  useEffect(() => {
    referlist.initialize({ domain: "scribble" });
  }, []);

  return (
    <Box
      id="waitlist"
      bgGradient="linear(to-b, bg-accent 50%, bg-canvas 50%, )"
    >
      <Container py={{ base: "48", md: "72" }}>
        <Box
          bg="bg-surface"
          py={{ base: "10", md: "16" }}
          px={{ base: "6", md: "16" }}
          borderRadius="lg"
          boxShadow={useColorModeValue("sm", "sm-dark")}
        >
          <Stack
            spacing={{ base: "8", md: "8" }}
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
          >
            <Stack spacing={{ base: "4", md: "5" }}>
              <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
                Join our waitlist
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
                Be among the first to go live on Scribble
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing="4"
              width="full"
              maxW={{ base: "md", xl: "lg" }}
            >
              <FormControl flex="1">
                <Input
                  type="email"
                  size="lg"
                  placeholder="Enter your email"
                  id="referlistemail"
                />
                <FormHelperText color="subtle">
                  We will never sell your contact information.
                </FormHelperText>
              </FormControl>
              <Button id="referlistbutton" variant="primary" size="lg">
                Join Waitlist
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
  // return (
  //   <Box padding="56" background="brand.500">
  //     <Heading color="white" paddingBottom="8">
  //       Interested? Let's talk.
  //     </Heading>
  //     <HStack>
  //       <Input placeholder="john@example.com" id="referlistemail" />
  //       <Button id="referlistbutton">Join Waitlist</Button>
  //     </HStack>
  //   </Box>
  // );
};

export default Waitlist;
