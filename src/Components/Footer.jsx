import React from "react";
import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" color="black" py={8} display={ {sm: "none", md: "flex", base: "none", lg: "flex"} }>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        justify="space-between"
        px={{ base: 4, md: 8 }}
        maxW="6xl"
        mx="auto"
      >
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={5} width="100%">
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              Documentation
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Installation
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Theme Setup
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Grid
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Atoms
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Molecules
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Functions
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              Atomize
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Features
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Design
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Development
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              Resources
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Sketch File
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              GitHub
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              About
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Showcase
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Contribute
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={4}>
              Extras
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Blog
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Need Help?
            </Text>
            <Text _hover={{ color: "blue" }} pt={3}>
              Give Feedback
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Footer;
