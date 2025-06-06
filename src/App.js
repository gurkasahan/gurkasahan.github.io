import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  IconButton,
  useColorMode,
  HStack,
  ChakraProvider
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";



function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Hero />

        <Box p={6} maxW="900px" mx="auto">
          <HStack justify="flex-end" mb={4}>
            <IconButton
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              aria-label="Toggle Dark Mode"
            />
          </HStack>

          <VStack align="start" spacing={10}>
            <About />
            <Projects />
            <Experience />
            <Contact />

          </VStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
