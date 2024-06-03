import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";

export const useCheckin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkingIn, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Successfully checked-in Booking #${data.id}`);
      queryClient.invalidateQueries({
        active: true,
      });
      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { checkingIn, isCheckingIn };
};
