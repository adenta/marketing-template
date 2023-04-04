import { Container, Flex, Heading, VStack } from "@chakra-ui/react";

const Listings = () => {
  return (
    <Container paddingY="24">
      <VStack align="center">
        <Heading>Our Listings</Heading>
        <iframe
          width="853"
          height="480"
          src="https://my.matterport.com/show/?m=7mHhzPjUCSm"
          frameborder="0"
          allowfullscreen
          allow="xr-spatial-tracking"
        ></iframe>
      </VStack>
    </Container>
  );
};

export default Listings;
