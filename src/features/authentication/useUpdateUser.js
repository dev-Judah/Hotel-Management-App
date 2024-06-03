import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser as updateCurrentUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: ({ fullName, avatar, password }) =>
      updateCurrentUserApi({ fullName, avatar, password }),

    onSuccess: () => {
      toast.success("Successfully Updated User Profile");
      queryClient.invalidateQueries("user");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isLoading };
};

export default useUpdateUser;
