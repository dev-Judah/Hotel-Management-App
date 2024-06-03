import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

const Bookings = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>

        {/* reuseAble component to filter and sort */}
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
};

export default Bookings;