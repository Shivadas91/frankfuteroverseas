import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Programmes from "@/pages/Programmes";
import LanguageTraining from "@/pages/LanguageTraining";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/programmes" component={Programmes} />
      <Route path="/language-training" component={LanguageTraining} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
