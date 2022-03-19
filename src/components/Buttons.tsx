import { AddIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";
import {
  IButton,
  IIconButton,
  IRoundedButton,
} from "../interfaces/Buttons.interface";
import { MoreIcon } from "./icons";

export const OutlinedButton = ({ text }: IButton) => (
  <Button
    colorScheme="blue"
    bg="white"
    w="100%"
    variant="outline"
    rounded="none"
  >
    {text}
  </Button>
);

export const RoundedButton = ({
  text,
  handleClick,
  leftRadius = "none",
  rightRadius = "none",
  marginRight = "0",
  marginLeft = "0",
  paddingRight = "0",
  paddingLeft = "0",
}: IRoundedButton) => (
  <Button
    leftIcon={<AddIcon />}
    colorScheme="blue"
    variant="solid"
    borderLeftRadius={leftRadius}
    borderRightRadius={rightRadius}
    paddingRight={paddingRight}
    paddingLeft={paddingLeft}
    marginRight={marginRight}
    marginLeft={marginLeft}
    textTransform="uppercase"
    onClick={handleClick}
  >
    {text}
  </Button>
);

export const MoreButton = ({ size = "lg", aria = "Know more" }: IIconButton) => (
  <IconButton
    aria-label={aria}
    icon={<MoreIcon />}
    variant="ghost"
    size={size}
    isRound={false}
  />
);
