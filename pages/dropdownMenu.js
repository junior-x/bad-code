import React from "react";
import { styled } from "@stitches/react";
import { violet, mauve, blackA } from "@radix-ui/colors";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Button } from "@skynexui/components";
import appConfig from "../config.json";

const StyledContent = styled(PopoverPrimitive.Content, {
  borderRadius: 4,
  padding: 20,
  width: 260,
  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  },
  "&:focus": {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${violet.violet7}`,
  },
});

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = StyledContent;

const Flex = styled("div", { display: "flex" });

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 45,
  width: 45,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  backgroundColor: "white",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});
const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
});

const Label = styled("label", {
  fontSize: 13,
  color: violet.violet11,
  width: 75,
});

const Input = styled("input", {
  all: "unset",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "1",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 25,

  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const Text = styled("div", {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: "19px",
  variants: {
    faded: {
      true: { color: mauve.mauve10 },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

const DropdownUser = () => (
  <div>
    <Popover>
      <PopoverTrigger asChild>
        <IconButton aria-label="Update dimensions">
          <LightningBoltIcon />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent sideOffset={5}>
        <Flex css={{ flexDirection: "column", gap: 10 }}>
          <Text bold css={{ marginBottom: 10, textAlign: "center", }}>
            Menu
          </Text>
          <Fieldset>
            <Button buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[550],
                mainColorLight: appConfig.theme.colors.primary[550],
                mainColorStrong: appConfig.theme.colors.primary[550],
              }} label="Profile" defaultValue="100%" fullWidth />
          </Fieldset>
          <Fieldset>
          <Button buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[550],
                mainColorLight: appConfig.theme.colors.primary[550],
                mainColorStrong: appConfig.theme.colors.primary[550],
              }} label="Settings" defaultValue="100%" fullWidth />
          </Fieldset>
          <Fieldset>
          <Button buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[550],
                mainColorLight: appConfig.theme.colors.primary[550],
                mainColorStrong: appConfig.theme.colors.primary[550],
              }} label="Logout" defaultValue="100%" fullWidth href="/" />
          </Fieldset>
        </Flex>
      </PopoverContent>
    </Popover>
  </div>
);

export default DropdownUser;
