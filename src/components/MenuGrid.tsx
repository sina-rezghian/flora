import { Box, SimpleGrid } from "@chakra-ui/react";
import MenuCard from "./MenuCard";
import MenuCardContainer from "./MenuCardContainer";

const game = [
  {
    id: 1,
    name: "اسپرسو",
  },
  {
    id: 2,
    name: "اسپرسو",
  },
  {
    id: 3,
    name: "اسپرسو",
  },
  {
    id: 4,
    name: "اسپرسو",
  },
  {
    id: 5,
    name: "اسپرسو",
  },
  {
    id: 6,
    name: "اسپرسو",
  },
  {
    id: 7,
    name: "اسپرسو",
  },
  {
    id: 8,
    name: "اسپرسو",
  },
  {
    id: 9,
    name: "اسپرسو",
  },
];

const MenuGrid = () => {
  return (
    <Box className="mainBox">
      <SimpleGrid>
        {game.map((game) => (
          <MenuCardContainer key={game.id}>
            <MenuCard />
          </MenuCardContainer>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MenuGrid;
