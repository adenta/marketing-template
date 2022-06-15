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
import { BrowserRouter, Routes, Route } from "react-router-dom";
const myTheme = extendTheme(
  {
    colors: { ...theme.colors, brand: theme.colors.blue },
  },
  theme
);
function App() {
  return (
    <ChakraProvider theme={myTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>hello</h1>}>
            <Route path="/documents/:documentId" element={<h1>doc</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
