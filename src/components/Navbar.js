import { Box, HStack, Link, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const sections = ["about", "projects", "experience", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150; // extra buffer for sticky header
      let current = "";

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY) {
          current = id;
        }
      }

      // 🛠 Highlight 'contact' if near bottom
      const scrollBottom = window.innerHeight + window.scrollY;
      if (Math.abs(document.body.scrollHeight - scrollBottom) < 10) {
        current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColor = useColorModeValue("gray.700", "gray.200");
  const activeColor = useColorModeValue("blue.500", "blue.300");

  return (
    <Box bg={useColorModeValue("blue.200", "blue.900")} px={8} py={4} position="sticky" top="0" zIndex="1000">
      <HStack spacing={6}>
        <Text fontWeight="bold" fontSize="lg">Gurk Asahan</Text>
        <Spacer />
        <HStack spacing={4}>
          {sections.map((id) => (
            <Link
              key={id}
              href={`#${id}`}
              fontWeight="medium"
              color={activeSection === id ? activeColor : linkColor}
              borderBottom={activeSection === id ? "2px solid" : "none"}
              borderColor={activeColor}
              transition="all 0.2s ease-in-out"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
