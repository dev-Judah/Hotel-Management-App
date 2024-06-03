import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";

const useUpdateSettings = () => {
  const queryClient = useQueryClient();

  const { mutate: editSettings, isLoading: isUpdating } = useMutation({
    mutationFn: updateSetting, // ({ newSettingsData }) => updateSetting({ newSettingsData })
    onSuccess: () => {
      toast.success(` Settings successfully Updated`);
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { editSettings, isUpdating };
};

export default useUpdateSettings;
