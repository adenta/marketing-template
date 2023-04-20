import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

const Newsletter = () => {
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [emailAddress, setEmailAddress] = React.useState<string>("");

  return (
    <Box bgGradient="linear(to-b, bg-accent 50%, bg-canvas 50%, )">
      <Container py={{ base: "16", md: "24" }}>
        <Box
          bg="bg-surface"
          py={{ base: "10", md: "16" }}
          px={{ base: "6", md: "16" }}
          borderRadius="lg"
          boxShadow="sm"
        >
          <Stack
            spacing={{ base: "8", md: "8" }}
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
          >
            <Stack spacing={{ base: "4", md: "5" }}>
              <Heading size={{ base: "sm", md: "md" }}>
                Sign up for our newsletter
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="muted">
                Join us on our Journey{" "}
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing="4"
              width="full"
              maxW={{ base: "md", xl: "lg" }}
            >
              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                  <div>
                    <VStack>
                      <HStack width="100%">
                        <FormControl>
                          <FormLabel>First Name</FormLabel>
                          <Input
                            value={firstName}
                            onChange={(e) => {
                              setFirstName(e.currentTarget.value);
                            }}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Last Name</FormLabel>
                          <Input
                            value={lastName}
                            onChange={(e) => {
                              setLastName(e.currentTarget.value);
                            }}
                          />
                        </FormControl>
                      </HStack>
                      <HStack align="end" width="100%">
                        <FormControl>
                          <FormLabel>Email Address</FormLabel>
                          <Input
                            type="email"
                            value={emailAddress}
                            onChange={(e) => {
                              setEmailAddress(e.currentTarget.value);
                            }}
                          />
                        </FormControl>
                        <Button
                          onClick={() => {
                            subscribe({
                              EMAIL: emailAddress,
                            });
                          }}
                        >
                          Submit
                        </Button>
                      </HStack>
                      <div dangerouslySetInnerHTML={status} />
                      <div dangerouslySetInnerHTML={message} />
                    </VStack>
                  </div>
                )}
              />
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
export default Newsletter;
