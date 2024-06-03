import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useEditCabin() {
  const queryClient = useQueryClient();
  //mutation when creating a new cabin
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id), // newCabin => createCabin(newCabin)
    onSuccess: (data) => {
      toast.success(` Cabin ${data.name}  successfully Edited`);
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      //   setShowForm(false);
      //   reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { editCabin, isEditing };
}

export default useEditCabin;
