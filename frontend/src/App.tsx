import React from "react";
import "./App.scss";
import { ApolloProvider } from "@apollo/client";
import { AClient } from "./providers/ApolloClient";
import { Router } from "./Router/Router";
function App() {
    return (
        <ApolloProvider client={AClient}>
            <Router />
        </ApolloProvider>
    );
}

export default App;
