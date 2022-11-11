import {
  useColorModeValue as mode,
  Stack,
  Flex,
  Heading,
  Image,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

const FeatureRow = ({ image, caption, reverseDirection }) => {
  const fontSize = useBreakpointValue({ base: "sm", md: "sm", lg: "md" });
  return (
    <Stack direction={["column", reverseDirection ? "row" : "row-reverse"]}>
      <Box width="full" overflow="hidden">
        <Image
          maxW="100%"
          minH={{ base: "100%", lg: "560px" }}
          objectFit="cover"
          src={image}
          alt="Miley"
        />
      </Box>
      <Flex width={["100%", "80%"]} align="center" justify="center">
        <Heading
          borderRadius="lg"
          maxWidth="96"
          padding="3"
          background="gray.100"
          size={fontSize}
          textAlign="center"
          color={mode("blue.600", "blue.300")}
          whiteSpace={["normal", "pre-wrap"]}
        >
          {caption}
        </Heading>
      </Flex>
    </Stack>
  );
};

export default FeatureRow;
