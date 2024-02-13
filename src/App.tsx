import NavBar from "./components/NavBar";
import "./App.css";
import Menu from "./components/Menu";
import CornerImg from "./components/CornerImg";
import { Grid, GridItem } from "@chakra-ui/react";
import MenuGrid from "./components/MenuGrid";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "menu" "main"`,
        }}
        templateColumns={{
          base: "10fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="menu">
          <Menu />
        </GridItem>
        <GridItem area="main">
          <CornerImg />
          <MenuGrid />
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
