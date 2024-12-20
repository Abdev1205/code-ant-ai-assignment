import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";
import { AntImage, LogoImage, SignHeroImage } from "@/assets/assetsManager";
import Image from "@/components/custom/Image";
import { FaGithub, FaBitbucket } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { LiaKeySolid } from "react-icons/lia";

const SignInPage = () => {
  const { signIn, isLoaded } = useSignIn();
  const [activeTab, setActiveTab] = useState("SAAS");

  type OAuthProvider =
    | "facebook"
    | "google"
    | "hubspot"
    | "github"
    | "tiktok"
    | "gitlab"
    | "discord"
    | "twitter"
    | "twitch"
    | "linkedin"
    | "linkedin_oidc"
    | "dropbox"
    | "bitbucket"
    | "microsoft"
    | "notion"
    | "apple"
    | "x";

  type OAuthStrategy = `oauth_${OAuthProvider}` | "saml" | "enterprise_sso";

  const handleSignIn = async (provider: OAuthStrategy) => {
    if (!isLoaded) return;
    try {
      await signIn.authenticateWithRedirect({
        strategy: provider, // No casting is needed now
        redirectUrl: "/", // Adjust as per your needs
        redirectUrlComplete: "/",
      });
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <div className="flex h-[100vh] justify-center items-center bg-[#FAFAFA] ">
      <div className=" bg-white h-full lg:w-[50%] lg:flex hidden items-center justify-center relative ">
        <div className="flex items-center justify-center w-full h-full ">
          <Image src={SignHeroImage} className=" w-[23rem] mt-[-2rem] " />
        </div>

        <div className="absolute bottom-0 left-0 ">
          <Image src={AntImage} className=" w-[14rem]  " />
        </div>
      </div>

      <div className="lg:w-[50%] sm:w-[50rem] w-[100%] sm:px-[2rem] px-[1rem]   ">
        <div className="bg-white border rounded-[.7rem] relative  py-[1.4rem] flex flex-col items-center ">
          <div className=" px-[1.4rem] w-full justify-center  ">
            <div className="flex items-center gap-[.3rem] justify-center ">
              <Image src={LogoImage} className=" w-[1.4rem] " />
              <h2 className=" text-[1.6rem] ">CodeAnt AI</h2>
            </div>
            <h2 className="mt-[1rem] text-center font-[500] font-openSans sm:text-[1.8rem] text-[1.3rem]  ">
              Welcome to CodeAnt AI
            </h2>
            <div className="flex justify-center  w-full relative border rounded-[.5rem] mt-[1rem] ">
              <button
                onClick={() => setActiveTab("SAAS")}
                className={` ${
                  activeTab === "SAAS"
                    ? "bg-[#1570EF] border-none outline-none  text-white rounded-[.5rem] "
                    : "bg-[#fafafa]"
                } w-[50%] py-[.8rem] font-openSans font-[600] duration-200  `}
              >
                SAAS
              </button>
              <button
                onClick={() => setActiveTab("Self Hosted")}
                className={` ${
                  activeTab === "Self Hosted"
                    ? "bg-[#1570EF] border-none outline-none  text-white rounded-[.5rem] "
                    : " bg-[#fafafa] "
                } w-[50%] py-[.8rem] font-openSans font-[600] duration-200  `}
              >
                Self Hosted
              </button>
            </div>
          </div>
          <hr className="w-full bg-[#D5D7DA] h-[1px] mt-[2rem]  " />

          {activeTab === "SAAS" ? (
            <>
              <div className="flex flex-col gap-[1rem] sm:w-[23rem] w-[90%] mt-[2rem] ">
                <button
                  onClick={() => handleSignIn("oauth_github")}
                  className="flex items-center justify-center w-full gap-2 border-[#D8DAE5] border-[1px] py-[.5rem] rounded-[.5rem] font-[600] font-openSans "
                >
                  <FaGithub />
                  Sign in with GitHub
                </button>
                <button
                  onClick={() => handleSignIn("oauth_bitbucket")}
                  className="flex items-center justify-center w-full gap-2 border-[#D8DAE5] border-[1px] py-[.5rem] rounded-[.5rem] font-[600] font-openSans "
                >
                  <FaBitbucket className="text-[#2684ff] " />
                  Sign in with Bitbucket
                </button>
                <button
                  onClick={() => handleSignIn("oauth_github")}
                  className="flex items-center justify-center w-full gap-2 border-[#D8DAE5] border-[1px] py-[.5rem] rounded-[.5rem] font-[600] font-openSans "
                >
                  <VscAzureDevops className=" text-[#0074d1] text-[1.22rem] " />
                  Sign in with Azure DevOps
                </button>
                <button
                  onClick={() => handleSignIn("oauth_github")}
                  className="flex items-center justify-center w-full gap-2 border-[#D8DAE5] border-[1px] py-[.5rem] rounded-[.5rem] font-[600] font-openSans "
                >
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png"
                    alt="GitLab"
                    className="h-5"
                  />
                  Sign in with GitLab
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-[1rem] sm:w-[23rem] w-[90%] mt-[2rem] ">
                <button
                  onClick={() => handleSignIn("oauth_github")}
                  className="flex items-center justify-center w-full gap-2 border-[#D8DAE5] border-[1px] py-[.5rem] rounded-[.5rem] font-[600] font-openSans "
                >
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png"
                    alt="GitLab"
                    className="h-5"
                  />
                  Self Hosted GitLab
                </button>
                <button
                  onClick={() => handleSignIn("oauth_github")}
                  className="flex items-center justify-center w-full gap-2 border-[#D8DAE5] border-[1px] py-[.5rem] rounded-[.5rem] font-[600] font-openSans "
                >
                  <LiaKeySolid className="" />
                  Sign in with SSO
                </button>
              </div>
            </>
          )}
        </div>

        <div className=" text-center mt-[2rem] ">
          <p>
            By signing up you agree to the{" "}
            <span className=" font-[600] ">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
