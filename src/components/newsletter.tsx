import {
  Box,
  Button,
  Container,
  FormControl,
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
          <Text paddingBottom="6">
            Sign up below to receive more information about Perch Houses.
          </Text>
          <div id="mc_embed_signup">
            <form
              action="https://perchhousing.us21.list-manage.com/subscribe/post?u=440523372c413dcf4ab806300&amp;id=c71fdcfe70&amp;f_id=00ada9e1f0"
              method="post"
              id="mc-embedded-subscribe-htmlForm"
              name="mc-embedded-subscribe-htmlForm"
              className="validate"
              target="_blank"
              noValidate
            >
              <VStack spacing="4" id="mc_embed_signup_scroll">
                <FormControl>
                  <FormLabel htmlFor="mce-EMAIL">Email Address</FormLabel>
                  <Input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    required
                  />
                  <span
                    id="mce-EMAIL-HELPERTEXT"
                    className="helper_text"
                  ></span>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="mce-FNAME">First Name</FormLabel>
                  <Input type="text" name="FNAME" className="" id="mce-FNAME" />
                  <span
                    id="mce-FNAME-HELPERTEXT"
                    className="helper_text"
                  ></span>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="mce-LNAME">Last Name </FormLabel>
                  <Input type="text" name="LNAME" className="" id="mce-LNAME" />
                  <span
                    id="mce-LNAME-HELPERTEXT"
                    className="helper_text"
                  ></span>
                </FormControl>
                <div hidden>
                  <input type="hidden" name="tags" value="464047" />
                </div>
                <div id="mce-responses" className="clear foot">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_440523372c413dcf4ab806300_c71fdcfe70"
                    tabIndex={-1}
                    value=""
                  />
                </div>
                <Button
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                >
                  Subscribe
                </Button>
              </VStack>
            </form>
          </div>
        </Box>
      </Container>
    </Box>
  );
};
export default Newsletter;
