import {
  //   KeyRound,
  LayoutDashboard,
  //   LockKeyhole,
  LogIn,
  type LucideIcon,
  //   MessageSquareCode,
  // Settings,
  // User,
  //   UserPlus,
} from "lucide-react";
import { type ComponentType, lazy, type ReactNode } from "react";
import { ROUTES } from "@/lib/constants/app";
import AuthLayout from "@/ui/layouts/auth";
import MainLayout from "@/ui/layouts/main";

// --- Lazy-loaded Page Components ---
const NotFound = lazy(() => import("../ui/pages/error-404"));
//
const Login = lazy(() => import("../features/auth/view/login"));
//
const Dashboard = lazy(() => import("../features/dashboard/view"));

export interface RouteType {
  title: string;
  path: string;
  element: ComponentType;
  icon?: LucideIcon;
  isHidden?: boolean; // To hide from navigation menus
  children?: RouteType[];
}

export interface RouteLayoutType {
  layout: ComponentType<{ children: ReactNode }>;
  routes: RouteType[];
}

/**
 * Routes accessible to unauthenticated users.
 * These are typically wrapped in the AuthLayout.
 */
export const authRoutes: RouteType[] = [
  {
    title: "Login",
    path: ROUTES.login,
    element: Login,
    icon: LogIn,
    isHidden: true,
  },
];

/**
 * Routes accessible only to authenticated users.
 * These are typically wrapped in the MainLayout.
 */
export const protectedRoutes: RouteType[] = [
  {
    title: "Dashboard",
    path: ROUTES.root,
    element: Dashboard,
    icon: LayoutDashboard,
  },
  // Add other protected routes for your application here
  // e.g., { title: "Settings", path: "/settings", element: Settings, icon: SettingsIcon }
];

/**
 * Publicly accessible routes that don't require a specific layout.
 */
export const publicRoutes: RouteType[] = [
  {
    title: "Not Found",
    path: ROUTES.notFound,
    element: NotFound,
    isHidden: true,
  },
];

/**
 * The final routing structure that combines all route types with their layouts.
 * This is consumed by the main App component to generate React Router routes.
 */
export const routes: RouteLayoutType[] = [
  {
    layout: AuthLayout,
    routes: authRoutes,
  },
  {
    layout: MainLayout,
    routes: protectedRoutes,
  },
];
