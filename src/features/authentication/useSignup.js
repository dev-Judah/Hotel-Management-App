import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

const useSignup = () => {
  const { mutate: signup, isLoading: isSigningUp } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),
    onSuccess: (data) => {
      toast.success(
        "Account successfull created! Please verify the new account from the user's email address.",
      );
      console.log(data);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isSigningUp };
};

export default useSignup;
