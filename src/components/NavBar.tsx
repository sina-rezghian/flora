import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo flora coffee Gold.png";
import logoT from "../assets/logotype flora coffee gold.png";

const NavBar = () => {
  return (
    <div
      style={{
        backgroundColor: "#4E2806",
        width: "100vw",
        height: "14vh",
        marginLeft: "-2vw",
        marginTop: "-1vh",
      }}
    >
      <HStack padding="3vw" spacing="12vw">
        <Image
          src={logo}
          width="18.9vw"
          height="11.5vh"
          style={{
            filter: "contrast(150%)",
          }}
        />
        <Image src={logoT} width="54.5vw" height="6vh" />
      </HStack>
    </div>
  );
};

export default NavBar;
