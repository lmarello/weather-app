import React from "react";
import ErrorBoundary from "./index";

export default {
    title: "ErrorBoundary",
    component: ErrorBoundary,
};

const ComponentWithError = () => {
    const prop = undefined;
    return <h1>{prop.hola}</h1>;
};

const ComponentWithoutError = () => {
    return <h1>Sin error</h1>;
};

export const ErrorBoundaryWithError = () => (
    <ErrorBoundary>
        <ComponentWithError />
    </ErrorBoundary>
);

export const ErrorBoundaryWithoutError = () => (
    <ErrorBoundary>
        <ComponentWithoutError />
    </ErrorBoundary>
);
