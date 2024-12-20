import React from "react";
import Progress from "@/components/custom/loader/Progress";
import { ToastContainer } from "react-toastify";
import { ClerkProvider } from "@clerk/clerk-react";

interface ConfigProviderProps {
  children: React.ReactNode;
}

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const PRIMARY_SIGN_IN_URL = "/sign-in";
const PRIMARY_SIGN_UP_URL = "/sign-up";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      signInUrl={PRIMARY_SIGN_IN_URL}
      signUpUrl={PRIMARY_SIGN_UP_URL}
    >
      <Progress>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {children}
      </Progress>
    </ClerkProvider>
  );
};

export default ConfigProvider;
