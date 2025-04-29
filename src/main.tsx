import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppRoutes } from "@/routes";

/**
 * Third party Components
 * 1. react-toastify
 */
import { ToastContainer } from "react-toastify";

/**
 * Sampatti App Providers
 * 1. Theme provider
 * 2. Utils provider
 * 3. Token provider
 * 4. Auth provider
 */
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
            <ToastContainer
              draggablePercent={60}
              draggable
              theme="dark"
              position="top-right"
              autoClose={5000}
              stacked
            />
            <AppRoutes />
          </ThemeProvider>
        </UtilsProvider>
      </TokenProvider>
    </AuthProvider>
  </StrictMode>
);
