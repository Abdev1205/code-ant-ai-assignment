import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import CreatingAccount from "@/components/animation/CreatingAccount";

const SSOCallback: React.FC = () => {
  const { handleRedirectCallback } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    const completeSignIn = async () => {
      try {
        await handleRedirectCallback({}, (to: string) => {
          return new Promise((resolve) => {
            navigate(to, { replace: true });
            resolve(true);
          });
        });
      } catch (error) {
        console.error("Error completing sign-in:", error);
      }
    };

    completeSignIn();
  }, [handleRedirectCallback, navigate]);

  return (
    <div className="flex flex-col items-center justify-center py-[2rem] ">
      <CreatingAccount />
      <div className="text-[2rem] font-medium font-openSans ">
        Creating Your Profile...
      </div>
    </div>
  );
};

export default SSOCallback;
