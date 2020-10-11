import React, { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }; // no podemos hacer this.state porque esta funcion no tiene acceso a this al ser static
    }

    componentDidCatch(error, errorInfo) {
        console.log('ERROR: ', errorInfo);
    }

    render() {
        return this.state.hasError ? (
            <h1>Hubo un error</h1>
        ) : (
            <div>{this.props.children}</div>
        );
    }
}
