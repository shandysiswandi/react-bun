# React Enterprise Starter Kit

A production-ready, feature-rich starter template for building modern, scalable, and maintainable web applications with React. This repository provides a robust foundation featuring a clean, feature-driven architecture and a complete authentication system, allowing you to bypass boilerplate and focus directly on building your application's core features.

![Dark Mode](/docs/dash-dark.png)

---

## Features

This starter template comes packed with a modern tech stack and tooling, all configured to work seamlessly together.

| Category      | Fature                                                                            |
| ------------- | --------------------------------------------------------------------------------- |
| Framework     | **React 19** with modern features like Concurrent Rendering.                      |
| Build Tool    | **Bun** for an incredibly fast development experience and optimized builds.       |
| Testing       | **Bun:test** for unit/UI tests & **Playwright** for E2E tests.                    |
| Styling       | **Tailwind CSS** with `tailwind-merge` and `clsx` for utility-first styling.      |
| UI Components | **Radix UI** & **Lucide Icons** for accessible, unstyled components.              |
| Routing       | **React Router** for declarative, client-side routing.                            |
| State         | **Zustand** for simple, scalable global state management.                         |
| Lint & Format | **Biome** configured with Husky and lint-staged for code quality.                 |
| Language      | **TypeScript** for type safety and improved developer experience.                 |
| Deployment    | **Docker** & **NGINX** configuration included for production-ready deployment.    |

---

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing.

### Prerequisites

- **bun**: `v1.2.20` or higher

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/shandysiswandi/react-bun.git
    cd react-bun
    ```

2.  **Configure Environment Variables:**
    Create a `.env` file by copying the example and update it with your configuration.

    ```bash
    cp .env.example .env
    ```

3.  **Install Dependencies:**

    ```bash
    bun install
    ```

4.  **Run the Development Server:**
    ```bash
    bun run dev
    ```

The application will now be available at **http://localhost:3003**.

---

## Project Structure

This project follows a feature-driven architecture designed for scalability and maintainability. Instead of organizing files by type (e.g., all components in one folder), we group them by feature. This makes the codebase easier to navigate and scale as new features are added.

```bash
...
```

## Testing

This project uses a comprehensive testing strategy to ensure code quality and application stability.

- **Unit Tests**(`tests/unit`): These tests use **Bun:test** to verify individual functions and business logic in isolation. They are fast and focus on the smallest parts of the application.
- **UI Tests**(`tests/ui`): Also using **Bun:test**, these tests focus on rendering React components and verifying their behavior and appearance without a full browser.
- **End-to-End (E2E) Tests**(`tests/e2e`): These tests use **Playwright** to simulate real user interactions in a browser, ensuring that entire features work correctly from start to finish.

### Running Tests using NPM

- `bun run test`: Runs all Vitest (unit and UI) and Playwright E2E tests.
- `bun run test:ui`: Runs only the UI tests.
- `bun run test:unit`: Runs only the unit tests.
- `bun run test:e2e`: Runs only Playwright E2E tests.

---

## Available Scripts

This project includes a set of npm scripts to streamline common development tasks:

- `bun run dev`: Starts the Vite development server with hot-reloading.
- `bun run build`: Compiles and bundles the application for production.
- `bun run start`: Serves the production build locally for testing.
- `bun run lint`: Lints the codebase for potential errors and style issues.
- `bun run format`: Formats all files with Prettier.

## Deployment

This project is configured for containerized deployment using Docker and NGINX.

1. Build the Docker Image:

   ```bash
    docker build -t react-bun .
   ```

2. Run the Container:
   ```bash
    docker run --rm -it -p 3000:80 react-bun
   ```

The application will be accessible at http://localhost:3000. The Dockerfile uses a multi-stage build to create a small, optimized production image.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find a bug, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
