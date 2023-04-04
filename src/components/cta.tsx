import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { PopupButton, PopupModal } from "react-calendly";

export const Cta = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <PopupModal
        url="https://calendly.com/acmesales"
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
      />
      <Box as="section" bg="bg-surface">
        <Container py={{ base: "16", md: "24" }}>
          <Stack spacing={{ base: "8", md: "10" }}>
            <Stack spacing={{ base: "4", md: "5" }} align="center">
              <Heading size={{ base: "sm", md: "md" }}>Ready to Grow?</Heading>
              <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
                We are here to support you on this new journey in home
                ownership.
              </Text>
            </Stack>
            <Stack
              spacing="3"
              direction={{ base: "column", sm: "row" }}
              justify="center"
            >
              <Button
                onClick={() => {
                  setIsOpen(true);
                }}
                variant="secondary"
                size="lg"
              >
                Talk to someone
              </Button>
              <Button
                onClick={() => {
                  setIsOpen(true);
                }}
                variant="primary"
                size="lg"
              >
                Schedule a Physical Tour
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
