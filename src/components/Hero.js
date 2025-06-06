import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      id="hero"
      bg="blue.100"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={6}
      fontFamily="'Poppins', sans-serif"
      position="relative"
    >
      <VStack spacing={5}>
        <Heading
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="black"
          lineHeight="1.2"
        >
          HEY THERE, I'M{" "}
          <Text as="span" color="blue.500">
            GURK
          </Text>
        </Heading>

        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
          Computer Science · Data · Product Enthusiast
        </Text>
      </VStack>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "60px",
          fontSize: "100px",
          color: "#2B6CB0",
          cursor: "pointer",
        }}
      >
        <Link href="#about" aria-label="Scroll down to about section">
          <FaChevronDown />
        </Link>
      </motion.div>
    </Box>
  );
};

export default Hero;
