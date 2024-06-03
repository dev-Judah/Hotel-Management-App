import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

const useTodayActivity = () => {
  const { data: activites, isLoading } = useQuery({
    queryKey: ["TodayActivity"],
    queryFn: getStaysTodayActivity,
  });
  return { activites, isLoading };
};

export default useTodayActivity;
