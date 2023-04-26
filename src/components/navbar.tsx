import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Logo } from "./logo";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section">
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Container py={{ base: "3", lg: "4" }}>
          <Flex justify="space-between" align="center">
            <Logo />
            {isDesktop && (
              <ButtonGroup variant="ghost" spacing="1">
                <LinkBox>
                  <LinkOverlay href="#contact-us">
                    <Button
                      size="lg"
                      variant="link"
                      color="brand"
                      colorScheme="brand"
                    >
                      Contact Us
                    </Button>
                  </LinkOverlay>
                </LinkBox>
              </ButtonGroup>
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
