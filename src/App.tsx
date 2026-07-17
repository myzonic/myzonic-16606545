import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Bookkeeping from "./pages/Bookkeeping.tsx";
import LogoDesign from "./pages/LogoDesign.tsx";
import WebsiteDesign from "./pages/WebsiteDesign.tsx";
import GraphicDesign from "./pages/GraphicDesign.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bookkeeping" element={<Bookkeeping />} />
          <Route path="/logodesign" element={<LogoDesign />} />
          <Route path="/websitedesign" element={<WebsiteDesign />} />
          <Route path="/graphicdesign" element={<GraphicDesign />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
