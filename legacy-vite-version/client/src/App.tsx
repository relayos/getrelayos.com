import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";

// Import pages
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/not-found";
import CompanyPage from "@/pages/CompanyPage";
import ContactPage from "@/pages/ContactPage";
import SupportPage from "@/pages/SupportPage";

// Solution pages
import SolutionsPage from "@/pages/SolutionsPage";
import BusinessChatSolutionPage from "@/pages/BusinessChatSolutionPage";
import CustomCommunicationSolutionPage from "@/pages/CustomCommunicationSolutionPage";
import OnlineCommunitiesSolutionPage from "@/pages/OnlineCommunitiesSolutionPage";

// Product pages
import ProductsPage from "@/pages/ProductsPage";
import EmbedProductPage from "@/pages/EmbedProductPage";
import ConnectProductPage from "@/pages/ConnectProductPage";

function Router() {
  return (
    <Switch>
      {/* Main pages */}
      <Route path="/" component={HomePage} />
      <Route path="/company" component={CompanyPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/support" component={SupportPage} />
      
      {/* Solutions pages */}
      <Route path="/solutions" component={SolutionsPage} />
      <Route path="/solutions/business-chat" component={BusinessChatSolutionPage} />
      <Route path="/solutions/custom-communication" component={CustomCommunicationSolutionPage} />
      <Route path="/solutions/online-communities" component={OnlineCommunitiesSolutionPage} />
      
      {/* Product pages */}
      <Route path="/products" component={ProductsPage} />
      <Route path="/products/embed" component={EmbedProductPage} />
      <Route path="/products/connect" component={ConnectProductPage} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
