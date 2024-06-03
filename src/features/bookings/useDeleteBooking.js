import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteBookings, isLoading: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      toast.success("Booking deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["bookings", "booking"],
      });
      navigate("/bookings");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteBookings, isDeletingBooking };
};

export default useDeleteBooking;
