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
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

const myTheme = extendTheme(
  {
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
      <Navbar />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
