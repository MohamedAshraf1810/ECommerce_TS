import Lottie from "lottie-react";
import notFound from "@assets/lottieFiles/notFound404.json";
import empty from "@assets/lottieFiles/empty.json";
import error from "@assets/lottieFiles/error.json";
import loading from "@assets/lottieFiles/loading.json";
import success from "@assets/lottieFiles/success.json";

const lottieFilesMap = {
  notFound,
  empty,
  error,
  loading,
  success,
};

type LottieHandlerProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
  className?: string;
  LoopStatus?: boolean;
};

const LottieHandler = ({
  type,
  message,
  className,
  LoopStatus = true,
}: LottieHandlerProps) => {
  const lottie = lottieFilesMap[type];
  const messageStyle =
    type === "error"
      ? { fontSize: "19px", color: "red" }
      : { fontSize: "19px", marginTop: "30px" };
  return (
    <div className={`d-flex flex-column align-items-center ${className}`}>
      <Lottie
        animationData={lottie}
        style={{ width: "200px" }}
        loop={LoopStatus}
      />
      {message && <h3 style={messageStyle}>{message}</h3>}
    </div>
  );
};

export default LottieHandler;
