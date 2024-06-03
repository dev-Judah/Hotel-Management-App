/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import useCheckout from "./useCheckOut";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();
  return (
    <Button
      onClick={() => checkout(bookingId)}
      disable={isCheckingOut}
      variation="primary"
      size="small"
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
