import { createTheme, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/pages/Index";
import Add from "./components/pages/index/Add";
import Layout from "./components/shared/Layout";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { themeOptions } from "./utils/themeOptions";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

const theme = createTheme(themeOptions);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/add" element={<Add />} />
                <Route path="/" element={<Index />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </JotaiProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
