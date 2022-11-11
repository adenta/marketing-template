import {
  Stack,
  Text,
  Button,
  Box,
  Link,
  useColorModeValue as mode,
} from "@chakra-ui/react";

const CallToActionBlock = () => {
  return (
    <Box>
      <Stack direction={{ base: "column", md: "row" }} spacing="4" mt="8">
        <Button size="lg" minW="210px" colorScheme="blue" height="14" px="8">
          Buy Now
        </Button>
      </Stack>
      <Text mt="8" color={mode("gray.600", "gray.400")}>
        Already have an account?{" "}
        <Link href="#" textDecoration="underline">
          Log in
        </Link>
      </Text>
    </Box>
  );
};

export default CallToActionBlock;
