import { Box, Heading, HStack, IconButton, Link, VStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";

const Contact = () => {
  return (
    <Box id="contact" py={50} px={6} maxW="900px" mx="auto" textAlign="center">
      <Heading mb={4}>Reach Out And Connect Through Any Of The Mediums Below! 😊</Heading>

      <VStack spacing={4}>
        <HStack spacing={6}>
          <Link href="mailto:gurk.asahan@gmail.com" isExternal>
            <IconButton icon={<EmailIcon />} aria-label="Email" size="lg" />
          </Link>
          <Link href="https://github.com/gurkasahan" isExternal>
            <IconButton icon={<FaGithub />} aria-label="GitHub" size="lg" />
          </Link>
          <Link href="https://linkedin.com/in/gurkasahan" isExternal>
            <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" size="lg" />
          </Link>
        </HStack>
        <Box fontSize="sm" color="gray.500" mt={4}>
          © {new Date().getFullYear()} Gurk Asahan. All rights reserved.
        </Box>
      </VStack>
    </Box>
  );
};

export default Contact;
