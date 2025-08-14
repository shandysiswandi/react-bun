import { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Loading } from "@/ui/components/loading";
import { ProtectedRoute } from "@/ui/components/protected-route";
import { PublicRoute } from "@/ui/components/public-route";
import { ThemeProvider } from "@/ui/components/theme-provider";
import { Toaster } from "@/ui/components/ui/sonner";
import AuthLayout from "@/ui/layouts/auth";
import MainLayout from "@/ui/layouts/main";
import { ErrorBoundary } from "@/ui/pages/error-500";
import { useAuthStore } from "@/ui/stores/auth";
import { authRoutes, protectedRoutes, publicRoutes } from "./routes";

export default function App() {
  const { setLoading } = useAuthStore();

  useEffect(() => {
    // When the app mounts, the persist middleware has already rehydrated the auth state from cookies.
    // We can now safely set isLoading to false to allow the ProtectedRoute to render.
    setLoading(false);
  }, [setLoading]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="app-ui-theme">
      <Toaster position="top-center" richColors />

      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Routes>
              <Route element={<PublicRoute />}>
                <Route element={<AuthLayout />}>
                  {authRoutes.map(({ path, element: Element, title }) => (
                    <Route key={title} path={path} element={<Element />} />
                  ))}
                </Route>
              </Route>

              {/* Routes with MainLayout (Protected) */}
              <Route element={<ProtectedRoute />}>
                <Route element={<MainLayout />}>
                  {protectedRoutes.map(({ path, element: Element, title }) => (
                    <Route key={title} path={path} element={<Element />} />
                  ))}
                </Route>
              </Route>

              {/* Public routes that don't need a layout */}
              {publicRoutes.map(({ path, element: Element, title }) => (
                <Route key={title} path={path} element={<Element />} />
              ))}
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
