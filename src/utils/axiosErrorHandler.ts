import { isAxiosError } from "axios";

// UNKNOWN used because i don't Know the type of error
const axiosErrorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    return (
      error.response?.data || error.response?.data.message || error.message
    );
  } else {
    return "an unexpected error";
  }
};

export default axiosErrorHandler;
