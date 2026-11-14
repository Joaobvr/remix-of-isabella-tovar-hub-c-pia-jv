import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Emagrecimento from "./pages/Emagrecimento.tsx";
import FFSculpt from "./pages/FFSculpt.tsx";
import Intima from "./pages/Intima.tsx";
import Injetaveis from "./pages/Injetaveis.tsx";
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
          <Route path="/emagrecimento" element={<Emagrecimento />} />
          <Route path="/ffsculpt" element={<FFSculpt />} />
          <Route path="/intima" element={<Intima />} />
          <Route path="/injetaveis" element={<Injetaveis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
