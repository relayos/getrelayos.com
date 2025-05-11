import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet } from "react-helmet";

// Add Helmet for global head elements
createRoot(document.getElementById("root")!).render(
  <>
    <Helmet>
      <title>RelayOS - Advanced Real-Time Communication Infrastructure</title>
      <meta name="description" content="RelayOS provides robust, developer-friendly, and scalable solutions for real-time communication. Built on advanced technology for businesses and communities." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </Helmet>
    <App />
  </>
);
