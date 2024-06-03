import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
import Stats from "./Stats";
import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import Today from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
  const { bookings, isLoading } = useRecentBookings();
  const {
    // stays,
    numDays,
    confirmedStays,
    isLoading: isLoading1,
  } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();
  if (isLoading || isLoading1 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        numDays={numDays}
        cabinCount={cabins.length}
        bookings={bookings}
        confirmedStays={confirmedStays}
      />
      <Today />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
