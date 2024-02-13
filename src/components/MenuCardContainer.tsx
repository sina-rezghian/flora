import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MenuCardContainer = ({ children }: Props) => {
  return (
    <Box
      marginTop={"15px"}
      borderRadius={15}
      overflow={"hidden"}
      display={"flex"}
      flexDirection={"column"}
      marginLeft={"10vw"}
      width={"74vw"}
      position={"relative"}
    >
      {children}
    </Box>
  );
};

export default MenuCardContainer;
