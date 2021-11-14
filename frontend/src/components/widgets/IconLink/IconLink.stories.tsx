import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IconLink, IconLinkProps } from "./IconLink";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

export default {
    title: "widget/IconLink",
    component: IconLink,
} as ComponentMeta<typeof IconLink>;

const demo: ComponentStory<typeof IconLink> = (args: IconLinkProps) => (
    <IconLink {...args} />
);

export const story = demo.bind({});
story.args = {
    icon: faAddressBook,
    url: "anywhere",
};
