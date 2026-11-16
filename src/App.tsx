import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageSkeleton } from "@/components/SkeletonMedia";

// Cada página é baixada só quando é aberta (o site carrega mais rápido).
// Enquanto baixa, aparece o skeleton da página.
const Index = lazy(() => import("./pages/Index.tsx"));
const Emagrecimento = lazy(() => import("./pages/Emagrecimento.tsx"));
const FFSculpt = lazy(() => import("./pages/FFSculpt.tsx"));
const Intima = lazy(() => import("./pages/Intima.tsx"));
const Injetaveis = lazy(() => import("./pages/Injetaveis.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<PageSkeleton />}>
      {/* A página entra com o mesmo movimento do skeleton (desfoque → nítido) */}
      <div key={location.pathname} className="t-page-in">
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/emagrecimento" element={<Emagrecimento />} />
          <Route path="/ffsculpt" element={<FFSculpt />} />
          <Route path="/intima" element={<Intima />} />
          <Route path="/injetaveis" element={<Injetaveis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Suspense>
  );
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
