import axios from "axios";
import { useState } from "react";

type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed";

const useCheckEmailAvailability = () => {
  const [emailAvilabilityStatus, setEmailAvilabilityStatus] =
    useState<TStatus>("idle");

  const [enteredEmail, setEnteredEmail] = useState<null | string>(null);

  const checkEmailAvailability = async (email: string) => {
    setEnteredEmail(email);
    setEmailAvilabilityStatus("checking");
    try {
      const response = await axios.get(`/users?email=${email}`);
      if (!response.data.length) {
        setEmailAvilabilityStatus("available");
      } else {
        setEmailAvilabilityStatus("notAvailable");
      }
    } catch (error) {
      setEmailAvilabilityStatus("failed");
    }
  };

  const resetCheckEmailAvailability = () => {
    setEmailAvilabilityStatus("idle");
    setEnteredEmail(null);
  };

  return {
    emailAvilabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  };
};

export default useCheckEmailAvailability;
