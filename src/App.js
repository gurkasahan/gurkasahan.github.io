import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

function App() {
  return (
    <Box p={10} maxW="800px" mx="auto">
      <VStack spacing={10} align="start">

        <Box>
          <Heading size="2xl">Gurk Asahan</Heading>
          <Text fontSize="lg" color="gray.600">
            Software Engineer · Data Analyst · Product Enthusiast
          </Text>
        </Box>

        <Box>
          <Heading size="lg">Projects</Heading>
          <VStack align="start" mt={4} spacing={3}>
            <Box>
              <Text fontWeight="bold">Predictive Maintenance ML App</Text>
              <Link color="blue.500" href="https://github.com/gurkasahan/predictive-maintenance-ml" isExternal>
                GitHub Repo
              </Link>
            </Box>
            <Box>
              <Text fontWeight="bold">Parkinson’s Detection ML Model</Text>
              <Link color="blue.500" href="https://github.com/gurkasahan/MachineLearning-Parkinson-Detection" isExternal>
                GitHub Repo
              </Link>
            </Box>
            <Box>
              <Text fontWeight="bold">Global Life Expectancy Analysis</Text>
              <Link color="blue.500" href="https://github.com/gurkasahan/global-life-expectancy-analysis" isExternal>
                GitHub Repo
              </Link>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading size="lg">Contact</Heading>
          <Text>Email: gurk.asahan@gmail.com</Text>
          <Text>
            GitHub: <Link href="https://github.com/gurkasahan" isExternal color="blue.500">gurkasahan</Link>
          </Text>
          <Text>
            LinkedIn: <Link href="https://linkedin.com/in/gurkasahan" isExternal color="blue.500">gurkasahan</Link>
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}

export default App;
