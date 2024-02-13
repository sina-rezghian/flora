import { Box, HStack, List, ListItem } from "@chakra-ui/react";

const list = ["کافی", "بار سرد", "ماکتیل", "شیک", "غذا", "دمنوش", "گرم نوش"];
const Menu = () => {
  return (
    <Box className="MenuBox" color="white">
      <List className="Item">
        <HStack spacing="5vw" paddingLeft={60} marginRight={"-8vw"}>
          {list.map((item) => (
            <ListItem className="LiItem">{item}</ListItem>
          ))}
        </HStack>
      </List>
    </Box>
  );
};

export default Menu;
