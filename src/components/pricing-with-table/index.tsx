import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { products } from "./data";
import { ProductCallToActionTable } from "./ProductCallToActionTable";
import { ProductFeaturesTable } from "./ProductFeaturesTable";
import { ProductOverviewTable } from "./ProductOverviewTable";

export const PricingWithTable = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box as="section" bg="bg-surface" py={{ base: "16", md: "24" }}>
      <Stack spacing={{ base: "16", md: "24" }} shouldWrapChildren>
        <Container>
          <Stack
            spacing={{ base: "4", md: "6" }}
            textAlign="center"
            align="center"
          >
            <Stack spacing="3">
              <Text color="accent" fontWeight="semibold">
                Pricing
              </Text>
              <Heading size={{ base: "md", md: "lg" }}>
                Simple and fair pricing
              </Heading>
            </Stack>
            <Text fontSize={{ base: "lg", md: "xl" }} color="muted" maxW="3xl">
              Get access to 210+ components and free updates. Customize it to
              your needs, and make it yours today!
            </Text>
          </Stack>
        </Container>
        {isMobile ? (
          <Stack spacing="16">
            {products.map((product, id) => (
              <Container px={{ base: "0" }} key={id}>
                <Stack spacing={{ base: "5", md: "7" }}>
                  <ProductOverviewTable products={[product]} />
                  <ProductFeaturesTable products={[product]} />
                  <ProductCallToActionTable products={[product]} />
                </Stack>
              </Container>
            ))}
          </Stack>
        ) : (
          <Container px={{ base: "0", lg: "8" }}>
            <Stack spacing={{ base: "5", md: "7" }}>
              <ProductOverviewTable products={products} />
              <ProductFeaturesTable products={products} />
              <ProductCallToActionTable products={products} />
            </Stack>
          </Container>
        )}
      </Stack>
    </Box>
  );
};
