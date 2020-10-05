import React from "react";
import IconState from "./IconState";

export default {
    title: "IconState",
    component: IconState,
};

export const Cloud = () => (
    <IconState state='cloud'/>
);

export const Cloudy = () => (
    <IconState state='cloudy'/>
);

export const Fog = () => (
    <IconState state='fog'/>
);

export const Sunny = () => (
    <IconState state='sunny'/>
);

export const Rain = () => (
    <IconState state='rain'/>
);
