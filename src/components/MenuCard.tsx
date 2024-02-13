import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import NoImage from "../assets/no-image-placeholder.webp";

const MenuCard = () => {
  return (
    <div className="MenuCard">
      <Card>
        <HStack>
          <Image src={NoImage} width="25vw" height={"10.5vh"} />
          <CardBody>
            <Heading fontSize={"5vw"}>اسپرسو</Heading>
          </CardBody>
        </HStack>
      </Card>
    </div>
  );
};

export default MenuCard;
