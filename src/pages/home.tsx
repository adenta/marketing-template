import { Box, Container, Text } from "@chakra-ui/react";
import Faq from "../components/faq";
import Features from "../components/features";
import { Hero } from "../components/hero";
import Listings from "../components/listings";
import { Navbar } from "../components/navbar";
import Newsletter from "../components/newsletter";
import { PricingWithTable } from "../components/pricing-with-table";
import { StatWithCallToAction } from "../components/StatWithCallToAction/App";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Box paddingY="12">
        <Container borderRadius="lg" background="white" paddingY="12">
          <Text whiteSpace="pre-wrap">
            {`Perch is a new type of co-living property management platform, meant to provide affordable living, community, and easier access to health support services for women age 55+.

We lease properties and, in turn, re-lease each bedroom to individuals who want to split expenses, build community and thrive together.

Perch takes the hassle out of property leasing by managing all aspects of the landlord and renter experience. We manage marketing and renter acquisition, renter compatibility matching, and lease management. 

After leasing, Perch manages the property, the renter experience, and all renter services.
`}
          </Text>
        </Container>
      </Box>
      <Newsletter />
    </>
  );
};

export default Home;
