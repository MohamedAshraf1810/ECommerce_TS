import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "@validations/signUpSchema";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthRegister, resetUI } from "@store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useRegister = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { loading, error, accessToken } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors: formErrors },
  } = useForm<signUpType>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const submitForm: SubmitHandler<signUpType> = async (data) => {
    const { firstName, lastName, email, password } = data;
    dispatch(actAuthRegister({ firstName, lastName, email, password }))
      .unwrap()
      .then(() => {
        navigate("/login?message=account_created");
      });
  };

  const {
    emailAvilabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();
  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");
    if (isDirty && !invalid && enteredEmail !== value) {
      // check email availability
      checkEmailAvailability(value);
    }

    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    accessToken,
    formErrors,
    emailAvilabilityStatus,
    emailOnBlurHandler,
    submitForm,
    register,
    handleSubmit,
  };
};

export default useRegister;
