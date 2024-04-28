import React, { useState } from "react";
import {
  Box,
  Button,
  HStack,
  FormControl,
  Image,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Center,
  Avatar,
  Heading,
  VStack,
  IconButton,
  Input,
  InputRightElement,
  InputGroup,
  Checkbox,
  Divider,
  Grid,
  Code,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FaPlay } from "react-icons/fa";
import heart from "../assets/heart.svg";
import atomic from "../assets/atomic.svg";
import themeSetUp from "../assets/themeSetUp.svg";
import components from "../assets/components.svg";
import { RiBasketballLine } from "react-icons/ri";
import responsive2 from "../assets/responsive2.svg";
import customisation from "../assets/customisation.svg";
import iconSystem from "../assets/iconSystem.svg";
import { TiSocialTwitter } from "react-icons/ti";
import diamond from "../assets/diamond.svg";
import reactt from "../assets/react.svg";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import avatar from "../assets/avatar.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import download from "../assets/download.png";
import eye from "../assets/eye.svg";
import link from "../assets/link.svg";
import { TiSocialLinkedin } from "react-icons/ti";
import play from "../assets/play.svg";
import { FaGithub } from "react-icons/fa";
import tag from "../assets/tag.svg";
import downloadd from "../assets/download.svg";
import flexibleGrid from "../assets/flexibleGrid.svg";
import styleGrid from "../assets/styleGrid.svg";
import spacing from "../assets/spacing.svg";
import responsive from "../assets/responsive.svg.svg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { RxPencil1 } from "react-icons/rx";
import { CiMail } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import Footer from "../Components/Footer";
const HomePage = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };
  return (
    <Box
      mx={"auto"}
      mt={"7vw"}
      width={{ sm: "97%", md: "70%", base: "97%", lg: "70%" }}
      // border={"1px"}
      // borderColor={"black"}
      //   display={{ sm: "none", md: "flex", base: "none", lg: "flex" }}
    >
      <Box>
        <Box>
          <Box>
            <Text as="b" fontSize={"4xl"}>
              Design System for React JS
            </Text>
          </Box>
          <Box
            width={{ sm: "100%", md: "60%", base: "100%", lg: "60%" }}
            mx={"auto"}
          >
            <Text>
              Atomize React is a UI framework that helps developers collaborate
              with designers and build consistent user interfaces effortlessly.
            </Text>
          </Box>
        </Box>
        <Stack
          direction={{ sm: "column", md: "row", base: "column", lg: "row" }}
          mt={"2vw"}
          justifyContent={"center"}
          spacing={"6"}
        >
          <Text
            color={"white"}
            bgColor={"#0284fe"}
            py={"3"}
            px={"7"}
            borderRadius={"5px"}
          >
            Get Started Now
          </Text>
          {/* 160px, 368px, 0px, 368px */}
          <HStack
            direction={"row"}
            color={"#4e5d78"}
            bgColor={"#ffffff"}
            py={"3"}
            px={"7"}
            border={"1px"}
            borderColor={"#4e5d78"}
            borderRadius={"5px"}
          >
            <FaPlay />
            <Text>Watch Now</Text>
          </HStack>
        </Stack>
      </Box>

      <Box mx={"auto"} width={"100%"} mt={["50px", "100px"]} pb={"80px"}>
        <Flex
          direction={{ sm: "column", md: "row", base: "column", lg: "row" }}
          justifyItems={"space-between"}
          alignContent={"center"}
          // wrap={"wrap"}
          display={{ base: "grid", md: "grid" }}
          gridTemplateColumns={{ md: "repeat(3,1fr)", lg: "repeat(3,1fr)" }}
          gap={8}
        >
          <Stack
            mb={["50px", 0]}
            gridArea={{ md: "1 / 1 / auto / span 2", lg: "auto" }}
          >
            {/* Content for the first section */}
            <Flex
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <Box
                as="button"
                w="35px"
                h="35px"
                border={"1px"}
                borderColor={"#e6e6e6"}
                borderRadius={"50%"}
                transition="box-shadow 0.3s ease-in-out"
                padding={2}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                _hover={{
                  transform: "scale(1.09)",
                  boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
                }}
              >
                <Image alt="hearts" src={heart} />
              </Box>
              <Box
                as="button"
                w="35px"
                h="35px"
                border={"1px"}
                borderColor={"#e6e6e6"}
                borderRadius={"50%"}
                transition="box-shadow 0.3s ease-in-out"
                padding={2}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                _hover={{
                  transform: "scale(1.09)",
                  boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
                }}
              >
                <Image alt="eye" src={eye} />
              </Box>
              <Box
                as="button"
                w="35px"
                h="35px"
                border={"1px"}
                borderColor={"#e6e6e6"}
                borderRadius={"50%"}
                transition="box-shadow 0.3s ease-in-out"
                padding={2}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                _hover={{
                  transform: "scale(1.09)",
                  boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
                }}
              >
                <Image alt="tag" src={tag} />
              </Box>
              <Box
                as="button"
                w="35px"
                h="35px"
                border={"1px"}
                borderColor={"#e6e6e6"}
                borderRadius={"50%"}
                transition="box-shadow 0.3s ease-in-out"
                padding={2}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                _hover={{
                  transform: "scale(1.09)",
                  boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
                }}
              >
                <Image alt="link" src={link} />
              </Box>
              <Box
                as="button"
                w="35px"
                h="35px"
                border={"1px"}
                borderColor={"#e6e6e6"}
                borderRadius={"50%"}
                transition="box-shadow 0.3s ease-in-out"
                padding={2}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                _hover={{
                  transform: "scale(1.09)",
                  boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
                }}
              >
                <Image alt="play" src={play} />
              </Box>
              <Box
                as="button"
                w="35px"
                h="35px"
                border={"1px"}
                borderColor={"#e6e6e6"}
                borderRadius={"50%"}
                transition="box-shadow 0.3s ease-in-out"
                padding={2}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
                _hover={{
                  transform: "scale(1.09)",
                  boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
                }}
              >
                <Image alt="download" src={downloadd} />
              </Box>
            </Flex>
            <Box>
              <Box
                // maxW={"md"}
                // w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                rounded={"lg"}
                px={8}
                py={7}
                textAlign={"center"}
              >
                <Avatar
                  size={"lg"}
                  src={avatar}
                  alt={"Avatar Alt"}
                  mb={4}
                  mt={3}
                  pos={"relative"}
                  _after={{
                    content: '""',
                    w: 1.5,
                    h: 1.5,
                    bg: "green.300",
                    border: "1px solid white",
                    rounded: "full",
                    pos: "absolute",
                    bottom: 1,
                    right: 1,
                  }}
                />
                <Heading fontSize={"xl"} fontFamily={"body"}>
                  Meagan Fisher
                </Heading>
                <Text
                  fontWeight={400}
                  fontSize={"xs"}
                  color={"gray.500"}
                  mb={4}
                  mt={2}
                >
                  Engineering Manager
                </Text>

                <Stack direction={"row"} spacing={4} mt={10}>
                  <HStack
                    as={Button}
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    bg={"#0284fe"}
                    color={"white"}
                    _hover={{
                      bg: "#006fd6",
                    }}
                    _focus={{
                      bg: "blue.500",
                    }}
                    spacing={5}
                  >
                    <Text>Follow</Text>
                    <MdOutlineAdd style={{ fontSize: "1.5em" }} />
                  </HStack>

                  <HStack
                    as={Button}
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    _focus={{
                      bg: "gray.200",
                    }}
                    spacing={5}
                    border={"1px"}
                    borderColor={"gray.400"}
                  >
                    <Text>Message</Text>
                    <FiMessageSquare style={{ fontSize: "1.7em" }} />
                  </HStack>
                </Stack>
              </Box>
            </Box>
          </Stack>

          <Stack
            display={{ sm: "none", md: "flex", base: "none", lg: "flex" }}
            mb={["50px", 0]}
            gridArea={{ md: "1 / 3", lg: "auto" }}
          >
            {/* Content for the second section */}
            <Box
              borderWidth="1px"
              borderRadius="lg"
              mb={"4"}
              width={["100%", "auto"]}
            >
              <Image src={download} alt="Card Image" />
              <Flex
                p="2"
                alignItems="center"
                direction={"row"}
                justifyContent={"space-between"}
              >
                <HStack>
                  <Avatar
                    src={avatar2}
                    name={"Meagan Fisher"}
                    mr="3"
                    size={"xs"}
                  />
                  <Box fontWeight="600" fontSize="sm">
                    {"Meagan Fisher"}
                  </Box>
                </HStack>
                <IconButton
                  icon={isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
                  onClick={handleLikeToggle}
                  aria-label="Like"
                  variant="ghost"
                />
              </Flex>
            </Box>
            <Box
              borderRadius={"lg"}
              boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              width={["100%", "auto"]}
            >
              <Flex
                p="2"
                alignItems="center"
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Stack direction={"row"}>
                  <Avatar src={avatar3} name={"John Doe"} mr="3" size={"sm"} />
                  <VStack spacing={0}>
                    <Text fontWeight="600" fontSize="sm">
                      John Doe
                    </Text>
                    <Text fontWeight="300" fontSize="xs" color={"gray"} ml={2}>
                      UI/UX Designer
                    </Text>
                  </VStack>
                </Stack>
                <Box
                  as="span"
                  transition="transform 0.3s"
                  _hover={{ color: "#0284FE" }}
                >
                  <RxPencil1 size={"1.2em"} />
                </Box>
              </Flex>
            </Box>
          </Stack>

          <Stack mb={["50px", 0]} gridArea={{ md: "1 / 2", lg: "auto" }}>
            {/* Content for the third section */}
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={8}
              boxShadow="lg"
              width={["100%", "auto"]}
            >
              <VStack>
                <Heading as="h6" size="md" textAlign="center">
                  Login into your account
                </Heading>
                <HStack pb={10}>
                  <Text color={"gray"} fontSize={"xs"}>
                    Don't have an account yet?
                  </Text>
                  <Text color={"#0284FE"} fontSize={"xs"}>
                    Create New
                  </Text>
                </HStack>
                <FormControl id="email" isRequired>
                  <InputGroup>
                    <Input
                      type="email"
                      placeholder="johndoe@gmail.com"
                      borderRadius={"19px"}
                      focusBorderColor="#0284FE"
                    />
                    <InputRightElement>
                      <CiMail />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl id="password" isRequired>
                  <InputGroup>
                    <Input
                      type="password"
                      placeholder="Password"
                      borderRadius={"19px"}
                      focusBorderColor="#0284FE"
                    />
                    <InputRightElement>
                      <MdOutlineRemoveRedEye />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Box
                  mt={9}
                  as="Button"
                  px={24}
                  color={"#0284FE"}
                  py={2}
                  bg="#eef7ff"
                  borderRadius={"19px"}
                  _hover={{ bg: "#e0eaf3" }}
                >
                  Login
                </Box>
              </VStack>
            </Box>
          </Stack>
        </Flex>
      </Box>
      <Divider />
      {/* <Divider/> */}
      <Flex
        direction={"column"}
        align="flex-start"
        maxWidth={"440px"}
        mt={"70px"}
      >
        <Text
          //  maxWidth={"120px"}
          color={"white"}
          background={"black"}
          px={"16px"}
          py={"5px"}
          fontSize={"sm"}
          borderRadius={"18px"}
          mb={5}
        >
          Key features
        </Text>
        <Text fontWeight={"bold"} fontSize={"3xl"} mb={4}>
          Why use Atomize React?
        </Text>
        <Text textAlign={"left"} color={"gray"} mb={4}>
          Atomize React helps you in building fully responsive websites and
          products that match your style.
        </Text>
      </Flex>
      <Grid
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gap={4}
        alignItems="center"
        justifyContent="center"
        my={"100px"}
      >
        {/* Card 1 */}
        <Box
          p={4}
          borderRadius="lg"
          align="left"
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          }
        >
          <Image alt="flexibleGrid" src={flexibleGrid} mb={6} />
          <Text mb={5} fontWeight={"600"} fontSize={"2xl"}>
            Flexible Grid
          </Text>
          <Text mb={5} color={"gray"}>
            Change grid variables or give decimal column size.
          </Text>
          <Text mb={4} fontSize={"sm"} color={"#0284FE"}>
            See How
          </Text>
        </Box>

        {/* Card 2 */}
        <Box
          p={4}
          borderRadius="lg"
          align="left"
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          }
        >
          <Image alt="Style guide" src={styleGrid} mb={6} />
          <Text mb={5} fontWeight={"600"} fontSize={"2xl"}>
            Style guide
          </Text>
          <Text mb={5} color={"gray"}>
            Update theme throughout the application easily.
          </Text>
          <Text mb={4} fontSize={"sm"} color={"#0284FE"}>
            See How
          </Text>
        </Box>

        {/* Card 3 */}
        <Box
          p={4}
          borderRadius="lg"
          align="left"
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          }
        >
          <Image alt="Spacing" src={spacing} mb={6} />
          <Text mb={5} fontWeight={"600"} fontSize={"2xl"}>
            Spacing
          </Text>
          <Text mb={5} color={"gray"}>
            A better and controlled way of update spacing.
          </Text>
          <Text mb={4} fontSize={"sm"} color={"#0284FE"}>
            See How
          </Text>
        </Box>

        {/* Card 4 */}
        <Box
          p={4}
          borderRadius="lg"
          align="left"
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          }
        >
          <Image alt="Responsive" src={responsive} mb={6} />
          <Text mb={5} fontWeight={"600"} fontSize={"2xl"}>
            Responsive
          </Text>
          <Text mb={5} color={"gray"}>
            Better control to make the app responsive.
          </Text>
          <Text mb={4} fontSize={"sm"} color={"#0284FE"}>
            See How
          </Text>
        </Box>
      </Grid>
      <Divider />
      <Flex align="flex-start" my={"100px"}>
        <Box
          position="relative"
          display={{ sm: "none", base: "none", lg: "flex", md: "flex" }}
        >
          {/* SVG circles */}
          <svg width="400" height="400" viewBox="0 0 400 400">
            <circle
              cx="200"
              cy="200"
              r="180"
              stroke="gray"
              strokeWidth="2"
              fill="none"
              opacity={"0.2"}
            />
            <circle
              cx="200"
              cy="200"
              r="150"
              stroke="gray"
              strokeWidth="2"
              fill="none"
              opacity={"0.5"}
            />
            <circle
              cx="200"
              cy="200"
              r="120"
              stroke="gray"
              strokeWidth="2"
              fill="none"
              opacity={"0.8"}
            />
            <circle
              cx="200"
              cy="200"
              r="90"
              stroke="gray"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Image in the center */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <img src={reactt} alt="Center Image" width="80" height="80" />
          </Box>

          <Box
            as="button"
            w="40px"
            h="40px"
            position="absolute"
            top="110px"
            left="50px"
            border={"1px"}
            borderColor={"#e6e6e6"}
            borderRadius={"50%"}
            backgroundColor={"#F7AF22"}
            transition="box-shadow 0.3s ease-in-out"
            padding={2}
            boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
            _hover={{
              transform: "scale(1.09)",
              boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
            }}
          >
            <FiPlus color="white" size={"23px"} />
          </Box>

          <Box position="absolute" top="60px" right="80px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="24"
              viewBox="0 0 48 24"
            >
              <defs>
                <linearGradient
                  id="greenGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgb(54, 171, 128)", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgb(54, 171, 128)", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <rect width="40" height="24" rx="12" fill="url(#greenGradient)" />
              <circle cx="30" cy="12" r="8" fill="#ffffff" />
            </svg>
          </Box>

          <Checkbox
            colorScheme="red"
            defaultChecked
            position="absolute"
            bottom="50px"
            left="80px"
            size="lg"
          ></Checkbox>
          <Box
            as="Button"
            position="absolute"
            bg={"#0284fe"}
            px={4}
            py={2}
            borderRadius={"5px"}
            color={"white"}
            _hover={{
              bg: "#006fd6",
            }}
            bottom="120px"
            right="10px"
          >
            <Text>Sign Up</Text>
          </Box>
        </Box>
        <Box align="left">
          <Text style={{ fontWeight: 700, fontSize: "40px" }}>
            Beautiful & consistent UI powered with{" "}
            <span style={{ color: "#06d7ff" }}>React</span>.
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={3}
          >
            {/* Card 1 */}
            <Box p={3} align="left">
              <Image alt="atomic" src={atomic} pb={3} />
              <Text fontWeight={"700"} pb={3}>
                Atomic
              </Text>
              <Text fontSize={"13px"} pb={4} color={"gray"}>
                Based on Atomic Design Methodology.
              </Text>
            </Box>

            {/* Card 2 */}
            <Box p={3} align="left">
              <Image alt="themeSetUp" src={themeSetUp} pb={3} />
              <Text fontWeight={"700"} pb={3}>
                Theme Setup
              </Text>
              <Text fontSize={"13px"} pb={4} color={"gray"}>
                Auto updating colors and Styleguide.
              </Text>
            </Box>

            {/* Card 3 */}
            <Box p={3} align="left">
              <Image alt="Components" src={components} pb={3} />
              <Text fontWeight={"700"} pb={3}>
                Components
              </Text>
              <Text fontSize={"13px"} pb={4} color={"gray"}>
                Ever-increasing list of components.
              </Text>
            </Box>

            {/* Card 4 */}
            <Box p={3} align="left">
              <Image alt="Responsive" src={responsive2} pb={3} />
              <Text fontWeight={"700"} pb={3}>
                Responsive
              </Text>
              <Text fontSize={"13px"} pb={4} color={"gray"}>
                Build fully responsive structures easily.
              </Text>
            </Box>

            {/* Card 5 */}
            <Box p={3} align="left">
              <Image alt="Customisation" src={customisation} pb={3} />
              <Text fontWeight={"700"} pb={3}>
                Customisation
              </Text>
              <Text fontSize={"13px"} pb={4} color={"gray"}>
                Multiple customisations to suit your style.
              </Text>
            </Box>

            {/* Card 6 */}
            <Box p={3} align="left">
              <Image alt="Icon System" src={iconSystem} pb={3} />
              <Text fontWeight={"700"} pb={3}>
                Icon System
              </Text>
              <Text fontSize={"13px"} pb={4} color={"gray"}>
                An inbuilt Icon system for faster development.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Flex>
      <Divider />
      <Box maxW={"450px"} mx={"auto"} my={"70px"}>
        <Text fontWeight="500" fontSize="30px">
          Code the perfect design for each project using Atomize.
        </Text>
      </Box>
      <Divider />
      <Box maxW={"600px"} mx={"auto"} my={"70px"}>
        <Text fontWeight="600" fontSize="27px">
          A combination of tools to design and develop modern applications at
          ease.
        </Text>
      </Box>
      <Grid
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
        gap={4}
        alignItems="center"
        justifyContent="center"
        my={"100px"}
        mx={"auto"}
        maxW={"600px"}
      >
        {/* Card 1 */}
        <Box
          p={4}
          borderRadius="lg"
          align="left"
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          }
        >
          <Image alt="Design" src={diamond} mb={6} />
          <Text mb={5} fontWeight={"600"} fontSize={"2xl"}>
            Design
          </Text>
          <Text mb={5} color={"gray"}>
            Design your website by using Atomize for Sketch App.
          </Text>
          <Text mb={4} fontSize={"sm"} color={"#0284FE"}>
            Design Resource
          </Text>
        </Box>

        {/* Card 2 */}
        <Box
          p={4}
          borderRadius="lg"
          align="left"
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
          }
        >
          <Image
            alt="Style guide"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzNCIgdmlld0JveD0iMCAwIDM4IDM0Ij4KICA8cGF0aCBmaWxsPSIjMDBEOEZGIiBkPSJNMzAuNzAxNTI1NSwxMC45OTM2NjkgQzM0LjgwMTMxMDcsMTIuNDA0OTk0OSAzNy4zNjY2MDcsMTQuNjIwOTM5OCAzNy4zNjY2MDcsMTYuOTY5ODg1MyBDMzcuMzY2NjA3LDE5LjQxODYwOTcgMzQuNjE4NDc1MSwyMS43NDc3MTQ0IDMwLjI4NjUzMjIsMjMuMTgyODg4MiBDMzAuMTgzNTAwMSwyMy4yMTcwNTUgMzAuMDc3NzUwMywyMy4yNTExMDI2IDI5Ljk2ODc5MDIsMjMuMjg1MjIzMSBDMzAuMDE1NTMyNiwyMy40ODc5OTc4IDMwLjA1OTI0MDMsMjMuNjkxNTMwOSAzMC4wOTk5MTc4LDIzLjg5NTg1MzQgQzMwLjk1MzY4ODYsMjguMjA4MTc2NiAzMC4yNjA2MzczLDMxLjcxNDgxOTMgMjguMTY1ODA1OSwzMi45Mjc1MzYxIEMyNi4xMzc2OTk1LDM0LjEwMTYyMjcgMjIuOTgwNTgzNiwzMy4wNDM3MjEgMTkuNzYwNTcwNSwzMC4yNzMwMTE2IEMxOS41MTk0NDI5LDMwLjA2NTAxNCAxOS4yODI0ODY0LDI5Ljg1MjI0ODYgMTkuMDQ5ODQwNiwyOS42MzQ4NDI3IEMxOC44ODk3NjUsMjkuNzg0MzExMyAxOC43MjcyODI5LDI5LjkzMTMwNDggMTguNTYyMzU3MywzMC4wNzU4NTI2IEMxNS4yNTI2NDcyLDMyLjk2OTE0MTMgMTEuODY4NTU0OCwzNC4xMTk5NDA3IDkuNzcxNzEzMzgsMzIuOTEwNzE3NCBDNy43NDE2NTc4OCwzMS43Mzk4NTQzIDcuMDgxNTU1MjIsMjguNDc2NDgzMiA3Ljg3Mzg5MTAzLDI0LjMwMzE4MDEgQzcuOTMzNDkyNDMsMjMuOTkwODcxNSA3Ljk5OTMxMDIsMjMuNjc5Nzk0NCA4LjA3MTMwMzY2LDIzLjM3MDEzMzcgQzcuODYyNDMxMzQsMjMuMzA2MjgzMyA3LjY1NDQ5NzUsMjMuMjM5MTI5MSA3LjQ0NzQ1OTgyLDIzLjE2ODY1NDQgQzMuMjg3NTUzMTksMjEuNzQ2ODAwNCAwLjYsMTkuMzkwMjQ5MyAwLjYsMTYuOTY5ODg1MyBDMC42LDE0LjYyNjQ0MjUgMy4wOTczNzIxNywxMi40MjQxNTY5IDcuMTA4MTA1NzgsMTEuMDI1Nzg2NSBDNy40MjM0NjAwOSwxMC45MTU4NDQ1IDcuNzUxNjM4OTIsMTAuODA5ODYxOSA4LjA5MjM5ODE2LDEwLjcwNzc0OTkgQzguMDI3NTQ5OTIsMTAuNDI5NzQ5NyA3Ljk2NzU2ODM3LDEwLjE1MDU3NDggNy45MTI0NjA1NCw5Ljg3MDI0MzM2IEM3LjA3OTgxMDgxLDUuNjE1MzY3NjQgNy43MTIzNDI1OCwyLjI4NTAzNDY0IDkuNzQ1MzA0MzYsMS4xMDgxOTMxIEMxMS44NjQ0OTc5LC0wLjExODYzNjMwNSAxNS4yNTcwMzQ5LDEuMDkyODE1NDggMTguNjY5OTUxNSw0LjEyMzA3NDc0IEMxOC43ODA1NDA5LDQuMjIxNDgzNDkgMTguODkwMTQ1Myw0LjMyMDk4ODk4IDE4Ljk5ODc0ODQsNC40MjE1NzYyNyBDMTkuMjA2NzIwMSw0LjIyNzA2MzkyIDE5LjQxODExOTEsNC4wMzYxNTcwNSAxOS42MzI5Mzc2LDMuODQ4ODY2ODcgQzIyLjkwMzIwNzUsMS4wMDI3NjI0MyAyNi4xMDQzNTA5LC0wLjExMjQ0NzIxOCAyOC4xMzkyMjUyLDEuMDYwNzg2MTYgQzMwLjI2MDY5NzIsMi4yODQxMDg5MyAzMC45MDU0ODg1LDUuODI4MjAyODYgMjkuOTg0NjU4NiwxMC4yOTgxNjg5IEMyOS45NTU2MDM0LDEwLjQzOTE2MzEgMjkuOTI0MjE2LDEwLjU4MzM0MiAyOS44OTA0NjQ3LDEwLjczMTA4NTMgQzMwLjE2MjMxMiwxMC44MTM4OTg1IDMwLjQzMjcwNjYsMTAuOTAxNDM5MyAzMC43MDE1MjU1LDEwLjk5MzY2OSBaIE0zNS4wMzAxNTg1LDE2Ljk2OTg4NTMgQzM1LjAzMDE1ODUsMTUuODUwNTY0IDMzLjAyMTkwNTEsMTQuMjYzNDc0OCAyOS45NDE1NTIsMTMuMjAyOTY5OSBDMjkuNzIzMjM4NSwxMy4xMjc4NTIyIDI5LjQ5Nzc3NTcsMTMuMDU0NjE3NyAyOS4yNjUyMzE5LDEyLjk4MzIyNTQgQzI4Ljg1MDg2MTgsMTQuMjYzMzAyIDI4LjMyMjY0MDQsMTUuNjA0NTg2IDI3LjY5MzU1OTUsMTYuOTc1MzgzIEMyOC4zNTU1NTY1LDE4LjM4NDYxNzQgMjguOTA1NjQxOCwxOS43NDY0ODk3IDI5LjMzMjY3MjIsMjEuMDM2MDI4MyBDMjkuNDA3MzAxOCwyMS4wMTIzOTY3IDI5LjQ4MDI4NDIsMjAuOTg4NzkgMjkuNTUxNzYsMjAuOTY1MTUyNSBDMzIuODUxMDQxLDE5Ljg3MTgzNjYgMzUuMDMwMTU4NSwxOC4xNzY4NzI0IDM1LjAzMDE1ODUsMTYuOTY5ODg1MyBaIE0yNy43MDc2NzUzLDIzLjg3ODQ5MDggQzI2LjM2MjEzNDEsMjQuMTcwMzYyNiAyNC44OTk0NzcsMjQuMzkwNjMzMyAyMy4zNTY2ODQ5LDI0LjUzNDI2MDcgQzIyLjQ3MzU2NTgsMjUuODAxNDI1NCAyMS41NzU0NDQ1LDI2Ljk1MDEzNTEgMjAuNjc4MDk0NCwyNy45NTg3MzQ5IEMyMC44NzY5OTM4LDI4LjE0Mzc1NjkgMjEuMDc5MzI3NywyOC4zMjQ5ODI2IDIxLjI4NDg5NjIsMjguNTAyMjM0MyBDMjMuNzAwNjEzNywzMC41ODEwNDcgMjYuMDE4NzA0MywzMS40NzA3NzI1IDI2Ljk5NTEwMjEsMzAuOTA1NTM0MSBDMjcuNDIxMTQzMiwzMC42NTg5MjAxIDI3Ljc4OTgwNTcsMjkuOTcwNjcyOCAyNy45Nzk4MjgsMjguOTQ1ODc0MSBDMjguMjEwODY0LDI3LjcwMDU2NzEgMjguMTU0Nzk2NCwyNi4xMDE1OTY1IDI3LjgwNzkyNjUsMjQuMzQ5NjQzMiBDMjcuNzc3NDMzLDI0LjE5NTY1MTcgMjcuNzQ0MDA5NiwyNC4wMzg2MTE2IDI3LjcwNzY3NTMsMjMuODc4NDkwOCBaIE0xNy4wMjQ0MzAxLDI4LjMxNzA2ODQgQzE3LjE1NTI2ODQsMjguMjAyMzgxOSAxNy4yODQ0NzkyLDI4LjA4NTg2MTYgMTcuNDEyMDI0NCwyNy45Njc1NDI3IEMxNi40NzgyMjI2LDI2Ljk0MDExNDQgMTUuNTU0ODE5LDI1Ljc5MjAzMDEgMTQuNjY3OTM3MiwyNC41NTU2MDE5IEMxMy4xMTg1OTkyLDI0LjQyMzUyNzMgMTEuNjY1OTA5NiwyNC4yMTg1NjQ0IDEwLjMzNjk3NjMsMjMuOTQzNTM1MyBDMTAuMjc2MTEyOSwyNC4yMDc4NDI3IDEwLjIyMDIzMywyNC40NzMyMTg1IDEwLjE2OTM5MywyNC43MzkzODg3IEM5LjU3NDg5MDMxLDI3Ljg3MDQyNzQgOS45NjE3Mzg2LDMwLjMyMzAzMDQgMTAuOTM5MDE0OCwzMC44ODY2NDM0IEMxMS4zNjU0MDQ3LDMxLjEzMjQ3NzcgMTIuMTQ1ODM5OSwzMS4xMDgxNjM4IDEzLjEyODYxMywzMC43NjExNjU4IEMxNC4zMjI2Mjc1LDMwLjMzOTQ3MzggMTUuNjc5NzYwNSwyOS40OTIzODQ3IDE3LjAyNDQzMDEsMjguMzE3MDY4NCBaIE04LjY5Nzg4NTg4LDIxLjExODQ3MjMgQzkuMTI0NzkwNjUsMTkuNzg2MzQ2NiA5LjY2Mjg1NTE2LDE4LjQwMjY1IDEwLjI5NjcxODcsMTcuMDA3Mzk2MyBDOS42NzE3NjMyMiwxNS42MzM5NDU2IDkuMTQxNzIwNjksMTQuMjczMTQwMSA4LjcxOTYzNTc0LDEyLjk1ODg5MTcgQzguNDI5MTc3NDcsMTMuMDQ2NTgyIDguMTQ4MTI4OTcsMTMuMTM3NzExMSA3Ljg3NzI0NTg2LDEzLjIzMjA4MjEgQzQuODY3ODg4ODYsMTQuMjgxMjQ3OSAyLjkzNjU4ODk5LDE1Ljg0MTYxNzUgMi45MzY1ODg5OSwxNi45Njk4ODUzIEMyLjkzNjU4ODk5LDE3LjQ2MjA1ODcgMy4zNDc1NTQyMiwxOC4xMjYwMTIzIDQuMTM5MTkyOTIsMTguODAzODI5NSBDNS4xMDA5OTMwMiwxOS42Mjc0NzEzIDYuNTEyODAzNTgsMjAuMzc5OTQ1MiA4LjIwMzA0NTEzLDIwLjk1NzczNyBDOC4zNjcyMzc2MywyMS4wMTM2MzEgOC41MzIyMDA4NiwyMS4wNjcyMTQ2IDguNjk3ODg1ODgsMjEuMTE4NDcyMyBaIE0xNy4xMTgzMjc5LDUuODY5OTY1MTcgQzE0LjUxOTQ2MzcsMy41NjIzNTE4IDExLjk2MDYxOTksMi41MjU1NzMyNSAxMC45MTYwMjQ1LDMuMTMwMzI2MTMgQzkuOTQ3MjkzNzUsMy42OTExMzIyMyA5LjU3OTkyMzU4LDYuMjI0MzgyNTUgMTAuMjA1NDk4Miw5LjQyMTQzMTg1IEwxMC4yMTI5NDI3LDkuNDk4MjQ0MTggTDEwLjIwNTQxMTgsOS40MjExMzIwMSBDMTAuMjUyMTgyNCw5LjY1ODc0MTk2IDEwLjMwMjg0ODksOS44OTU1NTk1MiAxMC4zNTczOSwxMC4xMzE0ODkxIEMxMS43MDE2MjksOS44NDQyMTM5OCAxMy4xNDIzNjE3LDkuNjI0ODg5MDEgMTQuNjM5ODM0NSw5LjQ3OTYzMzI5IEMxNS41MTg1NDA5LDguMjUwOTUyMDggMTYuNDMzMTg0Nyw3LjExMTU4MDI5IDE3LjM2MTEwNzQsNi4wODk2NDUwNSBDMTcuMjgwNzM5OCw2LjAxNTcwOTgzIDE3LjE5OTgsNS45NDI0NzEyNyAxNy4xMTgzMjc5LDUuODY5OTY1MTcgWiBNMjYuMzE1MTAzNiwxNC4yNjgxNTg5IEMyNi41Njk5NTM3LDEzLjYzMTI3NTEgMjYuNzk4MTY4NSwxMy4wMDcwODMyIDI2Ljk5ODE0MzQsMTIuMzk5ODIxMSBDMjYuMzYyNTA0NSwxMi4yNjQ1ODA4IDI1LjcwMzg0NDcsMTIuMTQ1NjUwMyAyNS4wMjY3MDM3LDEyLjA0MzkxNiBDMjUuMjQ2OTE5MiwxMi40MDI3NTYzIDI1LjQ2MjUzMTcsMTIuNzY0NDE0OSAyNS42NzM0ODcyLDEzLjEyODgwMzEgQzI1Ljg5MTk1OTMsMTMuNTA1OTkxNSAyNi4xMDU4NDcsMTMuODg1ODA0NyAyNi4zMTUxMDM2LDE0LjI2ODE1ODkgWiBNMTcuNzA4MDAzNyw5LjI4OTQ4MDE1IEMxOC41NjUzODUsOS4yNjU1MjcyNCAxOS40MjMyNzE1LDkuMjY1NzQ1NzMgMjAuMjgwNjQxMSw5LjI5MDEzNTQzIEMxOS44NTUyMzY5LDguNzQ5OTUyOTIgMTkuNDI3MzA2OCw4LjIzOTA1NzM3IDE4Ljk5OTgxNjIsNy43NjEwNDQ2MiBDMTguNTY1NjQ2Niw4LjI0MzUwNTY0IDE4LjEzNDA2MTIsOC43NTQxMTY0OSAxNy43MDgwMDM3LDkuMjg5NDgwMTUgWiBNMTIuMjg2NjY1NiwxMy4xNDAwNTUgQzEyLjUwMDAzODcsMTIuNzY5OTgwNyAxMi43MTg1MjA1LDEyLjQwMzE5NjQgMTIuOTQyMTE1NiwxMi4wMzk1NDc5IEMxMi4yNzAwNjQyLDEyLjEzODk1NDIgMTEuNjE3NjI4NSwxMi4yNTQ1MzY0IDEwLjk4OTc0MiwxMi4zODU0NTMxIEMxMS4xODk3MjA5LDEyLjk5ODE1MzUgMTEuNDE1MDg5NCwxMy42MjI2Nzk1IDExLjY2NDM4ODEsMTQuMjU0ODY3OCBDMTEuODY2NjE3OSwxMy44ODA0MDI4IDEyLjA3NDA2MzYsMTMuNTA4NzYyMiAxMi4yODY2NjU2LDEzLjE0MDA1NSBaIE0xMi4yOTMwODUyLDIwLjg3NDY5MjIgQzEyLjA3OTAwNzIsMjAuNTA0ODUyOSAxMS44NzAxNTQzLDIwLjEzMjAzMDEgMTEuNjY2NTg3NSwxOS43NTYzMzUgQzExLjQwNzkyMzEsMjAuNDEwOTg1MSAxMS4xNzQ4MzQzLDIxLjA1NjQ1MzQgMTAuOTY5MTgsMjEuNjg3NjE4NCBDMTEuNjA3NjksMjEuODE1Nzg2NyAxMi4yNzkxMjQ0LDIxLjkyNzI0OTcgMTIuOTc5NzQxNiwyMi4wMjE0NzIxIEMxMi43NDUyNjAxLDIxLjY0MjUzMDcgMTIuNTE2MjI5OSwyMS4yNjAwNzcxIDEyLjI5MzA4NTIsMjAuODc0NjkyMiBaIE0yMC4zMjk5MzIzLDI0LjcxMzU4MjUgQzE5Ljg4MjQ1NjMsMjQuNzI1Nzk1OSAxOS40MzMzNTk4LDI0LjczMTk0MDcgMTguOTgzMzAzNSwyNC43MzE5NDA3IEMxOC41NTgwMDgzLDI0LjczMTk0MDcgMTguMTM1NTYxMiwyNC43MjcwODQ4IDE3LjcxNjM4MDgsMjQuNzE3NDA4NCBDMTguMTUzODYyOSwyNS4yNjc3MDAyIDE4LjU5NjE2NzksMjUuNzkxMzgyMiAxOS4wMzk3MzksMjYuMjg0MjMwMyBDMTkuNDY4ODAwNiwyNS43OTYxMTkzIDE5Ljg5OTY2MzEsMjUuMjcxNTY1MSAyMC4zMjk5MzIzLDI0LjcxMzU4MjUgWiBNMjUuNjc5OTExNywyMC44NjM1NTE3IEMyNS40NjI0MzAxLDIxLjI0MDc4NTIgMjUuMjQwNDA5NSwyMS42MTUzNzE5IDI1LjAxMzg5OTEsMjEuOTg3MjMwMSBDMjUuNzI2MzQ1NCwyMS44ODUwNzY3IDI2LjQxMjIwMzksMjEuNzY0NDM5NSAyNy4wNjYxNjg2LDIxLjYyNjE5ODUgQzI2Ljg1NDcyNiwyMC45OTkzNDE4IDI2LjYxMTIzNDUsMjAuMzUxNjQ3MSAyNi4zMzcxNzEzLDE5LjY4NjgxNTMgQzI2LjEyMzQ2OTIsMjAuMDgyMDM5NSAyNS45MDQzNjA5LDIwLjQ3NDMyNDcgMjUuNjc5OTExNywyMC44NjM1NTE3IFogTTIzLjY1NTgwNywxOS42OTY1NDc0IEMyNC4xNjgwOTc0LDE4LjgwOTI4MjQgMjQuNjUwMjkxOCwxNy45MDU1OTI0IDI1LjEwMTg0MjgsMTYuOTg2NTQ3MyBDMjQuNjQ1ODUxMSwxNi4wNzYzNzY1IDI0LjE2MjEyOTIsMTUuMTgwMzE1OSAyMy42NTExMzM2LDE0LjI5OTI0NDMgQzIzLjE0MzE4NTUsMTMuNDIwNzY5OSAyMi42MDYyMzcxLDEyLjU1OTQwNzMgMjIuMDQxMTc3NSwxMS43MTY1NzYzIEMyMS4wMzM4NzA5LDExLjY0NDUwMTUgMjAuMDEwNzg4NywxMS42MDc5MjI1IDE4Ljk4MzMwMzUsMTEuNjA3OTIyNSBDMTcuOTU5MTA5NSwxMS42MDc5MjI1IDE2LjkzNzIwNzQsMTEuNjQ0MjI3NCAxNS45MzA0NDM3LDExLjcxNTc2ODcgQzE1LjM1OTkwOTgsMTIuNTU5OTI3MSAxNC44MTk3MDY2LDEzLjQyNDIxNzEgMTQuMzEwODcxNiwxNC4zMDY5ODcxIEMxMy44MDE4NDc3LDE1LjE4OTYyNjMgMTMuMzI0MTgyNSwxNi4wODk5NTM0IDEyLjg3ODgxMDEsMTcuMDA2MzA3OSBDMTMuMzI1MzE1LDE3LjkyMjM1NzMgMTMuODA0NDExNCwxOC44MjIxODE4IDE0LjMxNTE4NjYsMTkuNzA0MDU3OSBMMTQuMzcyMzk4MywxOS44MDI4MzY0IEMxNC44Njg2MzI1LDIwLjY1NDkxMSAxNS4zOTM5MDI0LDIxLjQ4OTczMTggMTUuOTQ3MjgyOSwyMi4zMDU4MzEyIEMxNi45MzE1Njg5LDIyLjM2NTUxMTQgMTcuOTQ2NDU3MiwyMi4zOTU2NzQyIDE4Ljk4MzUxMTEsMjIuMzk1Njc0MiBDMjAuMDA3NDYyNCwyMi4zOTYxNzA2IDIxLjAzMTEwNjMsMjIuMzYyNDI3OCAyMi4wNTI3MjM0LDIyLjI5NDQ2OTkgQzIyLjYxMzQwNjUsMjEuNDQ1MDM1IDIzLjE0ODAxNzgsMjAuNTc4NjU3MiAyMy42NTU4MDcsMTkuNjk2NTQ3NCBaIE0yMS4xNjcyNDA3LDUuNjEwODE5OTUgQzIwLjk4ODE2MjQsNS43NjcwNDUwNSAyMC44MTE2MTE3LDUuOTI2MTMxMzUgMjAuNjM3NjU2Myw2LjA4ODAxNjY2IEMyMS41NDg5OTksNy4wOTY2NTY3IDIyLjQ1NjQ0MTUsOC4yMzcyODMxNCAyMy4zMzgzNzU4LDkuNDgxOTMxODUgQzI0LjgzOTMwNzQsOS42MjkzNzU3MyAyNi4yODA4MTA0LDkuODUyMzc0MTcgMjcuNjI3NDk3MiwxMC4xNDUzOTk1IEMyNy42NTE4NjY1LDEwLjAzNjk2MzMgMjcuNjc0NzkxNCw5LjkzMDcxMTc5IDI3LjY5NjI4MDEsOS44MjY1MTY1OSBDMjguMzk3NTEzMyw2LjQyMjU1MzczIDI4LjAxNzc4NTMsMy42ODc5MzA5NCAyNi45NzIxOTQ0LDMuMDg0ODU0MTkgQzI2LjAwMjU5NTYsMi41MjU3NDA1IDIzLjYyNDM4NTIsMy40NzI1ODQ1NiAyMS4xNjcyNDA3LDUuNjEwODE5OTUgWiBNMTguOTgzMzAzNSwxMy4zNTgxNzk3IEMyMC45Nzc5NjEyLDEzLjM1ODE3OTcgMjIuNTk1MDA5MSwxNC45NzUyMjc2IDIyLjU5NTAwOTEsMTYuOTY5ODg1MyBDMjIuNTk1MDA5MSwxOC45NjQ1NDMgMjAuOTc3OTYxMiwyMC41ODE1OTA5IDE4Ljk4MzMwMzUsMjAuNTgxNTkwOSBDMTYuOTg4NjQ1OCwyMC41ODE1OTA5IDE1LjM3MTU5NzksMTguOTY0NTQzIDE1LjM3MTU5NzksMTYuOTY5ODg1MyBDMTUuMzcxNTk3OSwxNC45NzUyMjc2IDE2Ljk4ODY0NTgsMTMuMzU4MTc5NyAxOC45ODMzMDM1LDEzLjM1ODE3OTcgWiIvPgo8L3N2Zz4K"
            mb={6}
          />
          <Text mb={5} fontWeight={"600"} fontSize={"2xl"}>
            Development
          </Text>
          <Text mb={5} color={"gray"}>
            Bring your designs to life with Atomize for React JS.
          </Text>
          <Text mb={4} fontSize={"sm"} color={"#0284FE"}>
            Documentation
          </Text>
        </Box>
      </Grid>
      <Divider />
      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={4}
        alignItems="center"
        justifyContent="center"
        my={"100px"}
        mx={"auto"}
        maxW={"650px"}
      >
        {/* Card 1 */}
        <Box p={4} borderRadius="lg" align="left">
          <Text mb={5} fontWeight={"600"} fontSize={"2xl"}>
            15+
          </Text>
          <Text mb={5} color={"gray"} fontSize={"14px"}>
            Ready to use React Components
          </Text>
        </Box>

        {/* Card 2 */}
        <Box p={4} borderRadius="lg" align="left">
          <Text mb={5} fontWeight={"600"} fontSize={"2xl"}>
            60+
          </Text>
          <Text mb={5} color={"gray"} fontSize={"14px"}>
            Predefined colors for theme setup
          </Text>
        </Box>

        {/* Card 3 */}
        <Box p={4} borderRadius="lg" align="left">
          <Text mb={5} fontWeight={"600"} fontSize={"2xl"}>
            {"</>"}
          </Text>
          <Text mb={5} color={"gray"} fontSize={"14px"}>
            Detailed documentation for each component
          </Text>
        </Box>

        {/* Card 4 */}
        <Box p={4} borderRadius="lg" align="left">
          <Text mb={5} fontWeight={"600"} fontSize={"2xl"}>
            FREE
          </Text>
          <Text mb={5} color={"gray"} fontSize={"14px"}>
            Open source with regular updates
          </Text>
        </Box>
      </Grid>
      <Flex
        direction={{ sm: "row", md: "row", base: "column", lg: "row" }}
        justifyContent={"space-between"}
        bg={"#F7F8F9"}
        py={8}
        px={5}
        borderRadius={"20px"}
        mb={"25px"}
      >
        <Box>
          <Text align={"left"} fontWeight={"600"} fontSize={"25px"} py={3}>
            UI Templates are on their way 🚀
          </Text>
          <Text align={"left"} color={"gray"} py={3}>
            Official UI templates build on Atomize React will be released very
            soon.
          </Text>
        </Box>
        <Box>
          <Text
            color={"white"}
            backgroundColor={"black"}
            px={"16px"}
            py={"10px"}
            borderRadius={"20px"}
          >
            Get notified
          </Text>
        </Box>
      </Flex>
      <Footer />
      <Text>Designed & Developed by Proksh Luthra</Text>
      <Flex
        align={"center"}
        maxWidth={"150px"}
        mx="auto"
        justifyContent={"space-around"}
        mt={"40px"}
        mb={"100px"}
      >
        <FaGithub />
        <RiBasketballLine />
        <TiSocialTwitter />
        <TiSocialLinkedin />
      </Flex>
    </Box>
  );
};

export default HomePage;
