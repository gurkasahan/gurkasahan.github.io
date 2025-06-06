import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Image,
  Button,
  VStack,
  Box,
  Link,
  Heading
} from "@chakra-ui/react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  // Helper to render multiline text blocks
  const renderMultiline = (text) => (
    text.split('\n').map((line, idx) => (
      <Text fontSize="sm" mt={1} key={idx}>{line}</Text>
    ))
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="start">
            {project.details?.screenshot && (
              <Image
                src={project.details.screenshot}
                alt={`${project.title} Screenshot`}
                borderRadius="md"
              />
            )}

            {project.details?.purpose && (
              <Box>
                <Heading as="h3" size="md">Purpose</Heading>
                {renderMultiline(project.details.purpose)}
              </Box>
            )}

            {project.details?.frontend && (
              <Box>
                <Heading as="h3" size="md">Frontend</Heading>
                {renderMultiline(project.details.frontend)}
              </Box>
            )}

            {project.details?.backend && (
              <Box>
                <Heading as="h3" size="md">Backend</Heading>
                {renderMultiline(project.details.backend)}
              </Box>
            )}

            {project.details?.design && (
              <Box>
                <Heading as="h3" size="md">Design</Heading>
                {renderMultiline(project.details.design)}
              </Box>
            )}

            {project.github && (
              <Button as={Link} href={project.github} isExternal colorScheme="blue" width="100%">
                View on GitHub
              </Button>
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
