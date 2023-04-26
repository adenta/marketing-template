import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
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
        <Container
          borderRadius="lg"
          background="white"
          paddingY="12"
          px={{ base: 2, md: 60 }}
        >
          <VStack spacing="6" align="start">
            <HStack spacing="4">
              <Icon boxSize="25px" color="green" as={FaCheckCircle} />
              <Text fontSize="2xl">
                We optimize your 4+ bed, 3+ bath home for more income
              </Text>
            </HStack>
            <HStack spacing="4">
              <Icon boxSize="25px" color="green" as={FaCheckCircle} /> We
              optimize your 4+ bed,
              <Text fontSize="2xl">
                {" "}
                We find high quality tenants to live in your property
              </Text>
            </HStack>
            <HStack spacing="4">
              <Icon boxSize="25px" color="green" as={FaCheckCircle} /> We
              optimize your 4+ bed,
              <Text fontSize="2xl"> We eliminate vacancy costs</Text>
            </HStack>
            <HStack spacing="4">
              <Icon boxSize="25px" color="green" as={FaCheckCircle} /> We
              optimize your 4+ bed,
              <Text fontSize="2xl">
                {" "}
                We create intentional community amongst tenants
              </Text>
            </HStack>
            <HStack spacing="4">
              <Icon boxSize="25px" color="green" as={FaCheckCircle} /> We
              optimize your 4+ bed,
              <Text fontSize="2xl">
                {" "}
                We maintain your property with regular services
              </Text>
            </HStack>
          </VStack>
        </Container>
      </Box>
      <Newsletter />
    </>
  );
};

export default Home;
