import { createBrowserRouter } from "react-router-dom";
import ConfigProvider from "./provider/ConfigProvider";
import App from "./App";
import SignInPage from "./(auth)/SignInPage";
import SignUpPage from "./(auth)/SignUpPage";
import AuthMiddleware from "./middleware/AuthMiddleware";
import UnderConstruction from "./pages/UnderConstruction";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ConfigProvider>
        <AuthMiddleware>
          <App />
        </AuthMiddleware>
      </ConfigProvider>
    ),
  },
  {
    path: "sign-in/*",
    element: (
      <ConfigProvider>
        <SignInPage />
      </ConfigProvider>
    ),
  },
  {
    path: "sign-up/*",
    element: (
      <ConfigProvider>
        <SignUpPage />
      </ConfigProvider>
    ),
  },
  {
    path: "under-construction/:page",
    element: (
      <ConfigProvider>
        <AuthMiddleware>
          <UnderConstruction />
        </AuthMiddleware>
      </ConfigProvider>
    ),
  },
]);

export default router;
