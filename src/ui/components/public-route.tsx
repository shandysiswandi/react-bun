import { Navigate, Outlet } from "react-router";
import { ROUTES } from "@/lib/constants/app";
import { Loading } from "@/ui/components/loading";
import { useAuthStore } from "@/ui/stores/auth";

export function PublicRoute() {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTES.root} replace />;
  }

  return <Outlet />;
}
