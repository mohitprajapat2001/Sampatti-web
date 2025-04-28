import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRoutes } from "@/routes";
import { ThemeProvider } from "@/providers/theme-providers";
import { UtilsProvider } from "./providers/utils-providers";
import { TokenProvider } from "./providers/token-provider";
import { AuthProvider } from "./providers/auth-providers";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <TokenProvider>
        <UtilsProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AppRoutes />
          </ThemeProvider>
        </UtilsProvider>
      </TokenProvider>
    </AuthProvider>
  </StrictMode>
);
