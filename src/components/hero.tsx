import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HiChevronRight } from "react-icons/hi";
import banner from "../../public/banner.png";
export const Hero = () => {
  return (
    <Box as="section" position="relative">
      <Box paddingBottom="32" position="relative" zIndex={1}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
        >
          <Box maxW="xl">
            <Heading
              color="black"
              as="h1"
              size="3xl"
              lineHeight="1.2"
              fontWeight="extrabold"
            >
              Lease your property for more money and less hassle
            </Heading>
            <Text color="black" fontSize={{ md: "2xl" }} mt="4" maxW="lg">
              Perch Houses is a new type of co-living property management
              platform that brings together women tenants age 55+ for
              high-quality living
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
                <InputGroup size="lg" marginTop="12">
                  <Input
                    borderRadius="0"
                    color="black"
                    pr="4.5rem"
                    placeholder="Email Address"
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    required
                  />
                  <InputRightElement width="4.5rem" marginRight=".25rem">
                    <Button
                      variant="solid"
                      backgroundColor="brand"
                      h="2.25rem"
                      size="lg"
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    >
                      Submit
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </form>
            </div>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src={banner}
            alt="Main Image"
            w="full"
            h="full"
            position="absolute"
          />
        </Box>
      </Flex>
    </Box>
  );
};
