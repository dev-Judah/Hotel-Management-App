import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: loginUser, isLoading: isGettingUser } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/dashboard", { replace: true });
      toast.success(`Successfully logged-in user: ${data.user.email}`);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { loginUser, isGettingUser };
};

export default useLogin;
