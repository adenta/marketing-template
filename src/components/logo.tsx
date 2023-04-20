import { chakra, HTMLChakraProps } from "@chakra-ui/react";
import perchLight from "../../public/perch-light.png";

export const Logo = (props: HTMLChakraProps<"svg">) => (
  <img width="100px" src={perchLight} />
);
