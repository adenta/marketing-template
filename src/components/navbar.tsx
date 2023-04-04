import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Logo } from "./logo";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Container py={{ base: "3", lg: "4" }}>
          <Flex justify="space-between">
            <HStack spacing="4">
              <Logo />
              {isDesktop && (
                <ButtonGroup variant="ghost" spacing="1">
                  <Button as={NavLink} to="/" end>
                    Home
                  </Button>

                  <Button as={NavLink} to="/about">
                    About
                  </Button>
                </ButtonGroup>
              )}
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
