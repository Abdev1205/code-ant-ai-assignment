import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "@/layout/AppLayout";
import { useSession } from "@clerk/clerk-react";

const AuthMiddleware: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isSignedIn, isLoaded, session } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/sign-in");
    }
  }, [isLoaded, isSignedIn]);
  console.log("session", session);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-medium">Loading...</div>
      </div>
    );
  }

  return <AuthLayout>{children}</AuthLayout>;
};

export default AuthMiddleware;
