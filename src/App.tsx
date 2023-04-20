import { useEffect, useState } from "react";
import { theme } from "@chakra-ui/pro-theme";
import { Box, Button, ChakraProvider, Heading, Input } from "@chakra-ui/react";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";

const myTheme = extendTheme(
  {
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Poppins', sans-serif`,
    },
    colors: { ...theme.colors, brand: theme.colors.blue },
  },
  theme
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);
function App() {
  return (
    <ChakraProvider theme={myTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
