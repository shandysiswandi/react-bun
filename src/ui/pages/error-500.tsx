import { Component, type ErrorInfo, type ReactNode } from "react";
import { ROUTES } from "@/lib/constants/app";
import { Button } from "@/ui/components/ui/button";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div
          className="flex min-h-screen flex-col items-center justify-center space-y-6 text-center"
          data-testid="error-boundary-fallback"
        >
          <h1 className="text-9xl font-extrabold text-red-500">500</h1>
          <h2 className="text-3xl font-bold">Oops, Something Went Wrong</h2>
          <p className="text-muted-foreground max-w-md text-lg">
            We apologize for the inconvenience. Please try refreshing the page, or contact support
            if the problem persists.
          </p>
          <Button asChild>
            <a href={ROUTES.root}>Go Back Home</a>
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
