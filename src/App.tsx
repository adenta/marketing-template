import { useEffect, useState } from "react";
import { theme } from "@chakra-ui/pro-theme";
import {
  Box,
  Button,
  ChakraProvider,
  extendTheme,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Hero } from "./hero";
import Waitlist from "./waitlist";
import posthog from "posthog-js";
import Features from "./features";

const myTheme = extendTheme(
  {
    colors: { ...theme.colors, brand: theme.colors.blue },
  },
  theme
);
function App() {
  useEffect(() => {
    posthog.init("phc_Uy9zUlCcDQwimB2KCgsZ2lS9KsTmEzi2u9NVyVNoPNK", {
      api_host: "https://app.posthog.com",
    });
  }, []);

  return (
    <ChakraProvider theme={myTheme}>
      <Hero />
      <Features />
      <Waitlist />
    </ChakraProvider>
  );
}

export default App;
