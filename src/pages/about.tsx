import { Container, Heading, Text } from "@chakra-ui/react";
import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Heading>About</Heading>
        <Text>why, who, backing, mission</Text>
      </Container>
    </>
  );
};

export default About;
