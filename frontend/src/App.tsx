import React from "react";
import "./App.scss";
import { ApolloProvider } from "@apollo/client";
import { AClient } from "./providers/ApolloClient";
import { Router } from "./Router/Router";
import { GeneralProvider } from "./infraestructure/context/GeneralContext";

function App() {
    return (
        <ApolloProvider client={AClient}>
            <GeneralProvider>
                <Router />
            </GeneralProvider>
        </ApolloProvider>
    );
}

export default App;
