import Img from "../assets/SeekPng.com_floral-png_55058.png";
import { Image } from "@chakra-ui/react";

const CornerImg = () => {
  return (
    <>
      <Image src={Img} className="uLeftCorner" />
      <Image src={Img} className="uRightCorner" />
      <Image src={Img} className="dLeftCorner" />
      <Image src={Img} className="dRightCorner" />
    </>
  );
};

export default CornerImg;
