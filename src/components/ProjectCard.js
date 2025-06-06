import { Box, Image, Text, Tag, VStack } from "@chakra-ui/react";

const ProjectCard = ({ title, imageSrc, description, tech, onClick }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={onClick}
      cursor="pointer"
      _hover={{ shadow: "md", transform: "scale(1.01)" }}
      transition="all 0.2s"
    >
      <Image src={imageSrc} alt={title} />
      <Box p={4}>
        <Text fontWeight="bold" mb={2}>{title}</Text>
        <Text fontSize="sm" mb={3}>{description}</Text>
        <VStack align="start" spacing={1}>
          {tech && tech.map((item, index) => (
            <Tag key={index} size="sm" variant="subtle" colorScheme="blue">
              {item}
            </Tag>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
