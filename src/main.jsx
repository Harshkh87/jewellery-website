import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import customTheme from './utils/themes.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
        <BrowserRouter>
          <ColorModeSwitcher justifySelf="flex-end" />
          <App />
          
        </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
