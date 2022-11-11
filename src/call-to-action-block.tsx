import {
  Stack,
  Text,
  Button,
  Box,
  Link,
  useColorModeValue as mode,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";

const CallToActionBlock = () => {
  return (
    <Box>
      <Stack direction={{ base: "column", md: "row" }} spacing="4" mt="8">
        <LinkBox>
          <LinkOverlay href="https://checkout.square.site/merchant/8BQ7QNMEQYXFY/checkout/E5VGN6VN4K5YECF4ULQSTYXW">
            <Button
              size="lg"
              minW="210px"
              colorScheme="blue"
              height="14"
              px="8"
            >
              Buy Now
            </Button>
          </LinkOverlay>
        </LinkBox>
      </Stack>
      <Text mt="8" color={mode("gray.600", "gray.400")}>
        Already have an account?{" "}
        <Link href="https://app.whiskerverse.com" textDecoration="underline">
          Log in
        </Link>
      </Text>
    </Box>
  );
};

export default CallToActionBlock;
