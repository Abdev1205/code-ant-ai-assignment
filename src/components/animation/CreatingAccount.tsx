import { CreatingAccountLottie } from "@/assets/assetsManager";
import Lottie from "lottie-react";

const CreatingAccount = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-[-3rem]  ">
      <div className=" w-[28rem]   z-10 z-index-10 ">
        <Lottie
          animationData={CreatingAccountLottie}
          autoplay={true}
          loop={true}
          className="z-10 z-index-10"
        />
      </div>
    </div>
  );
};

export default CreatingAccount;
