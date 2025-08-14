import { Navigate, Outlet } from "react-router";
import { ROUTES } from "@/lib/constants/app";
import { Loading } from "@/ui/components/loading";
import { useAuthStore } from "@/ui/stores/auth";

export function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to={ROUTES.login} replace />;
}
