import { HStack, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <HStack position={"absolute"} bottom={"-0.5vh"} marginLeft={"36vw"}>
      <Text fontWeight={"bold"} fontSize={"2.5vw"} color={"solid black"}>
        Designed by
      </Text>
      <Link fontWeight={"bold"} fontSize={"2.5vw"} color={"#911616"}>
        NoroTech
      </Link>
    </HStack>
  );
};

export default Footer;
