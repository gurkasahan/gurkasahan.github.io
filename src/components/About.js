import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Tag,
  VStack,
  HStack,
  Avatar
} from "@chakra-ui/react";
import {
  FaCode,
  FaCogs,
  FaTools,
  FaBook
} from "react-icons/fa";

const techStack = {
  "Languages": ["Java", "Python", "C#", "C/C++", "SQL", "JavaScript", "HTML/CSS", "Typescript", "R"],
  "Frameworks": ["React", "Node.js", "Next.js", "ASP.Net", "Angular", "Hadoop", "Hive", "Flume", "Spark", "Bootstrap"],
  "Developer Tools": ["PowerBI", "Figma", "Jira", "Git", "Bitbucket", "Google Cloud Platform", "VS Code", "AWS", "Docker"],
  "Libraries": ["Bootstrap", "JQuery", "NumPy", "Matplotlib", "JavaFX", "Springboot", "Pandas", "Scikit-learn", "Chakra UI"]
};

// Icon mapping
const categoryIcons = {
  "Languages": FaCode,
  "Frameworks": FaCogs,
  "Developer Tools": FaTools,
  "Libraries": FaBook
};

function About() {
  return (
    <Box id="about" py={10} px={6} maxW="1000px" mx="auto">
      <HStack spacing={4} mb={6}>
        <Avatar name="Gurk Asahan" src="/images/profile.jpg" size="lg" />
        <VStack align="start" spacing={0}>
          <Heading>About Me</Heading>
          <Text fontSize="sm" color="gray.500">
            Computer Science Student · Data Enthusiast · Builder
          </Text>
        </VStack>
      </HStack>

      <Text fontSize="md" color="gray.600" mb={8}>
        I studied Computer Science with a focus on solving real-world problems through data, software, and user-first design.
        I enjoy blending backend logic with user-friendly frontends.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {Object.entries(techStack).map(([category, items]) => {
          const Icon = categoryIcons[category] || FaCode;
          return (
            <Box key={category} bg="blue.50" p={4} borderRadius="md" boxShadow="sm">
              <Heading size="md" mb={3} display="flex" alignItems="center" gap={2}>
                <Icon /> {category}
              </Heading>
              <VStack align="start" spacing={2} flexWrap="wrap">
                {items.map((item, i) => (
                  <Tag
                    key={i}
                    size="md"
                    colorScheme="blue"
                    _hover={{
                      bg: "blue.300",
                      color: "white",
                      transform: "scale(1.05)"
                    }}
                    transition="all 0.2s ease-in-out"
                  >
                    {item}
                  </Tag>
                ))}
              </VStack>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default About;
