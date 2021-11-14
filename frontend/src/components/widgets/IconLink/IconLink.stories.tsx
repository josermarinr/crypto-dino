import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IconLink } from "./IconLink";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

export default {
    title: "widget/IconLink",
    component: IconLink,
} as ComponentMeta<typeof IconLink>;

const demo: ComponentStory<typeof IconLink> = (args) => <IconLink {...args} />;

export const story = demo.bind({});
story.args = {
    icon: faAddressBook,
    url: "anywhere",
};
