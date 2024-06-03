import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

const AddCabin = () => {
  // const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>

      {/* <Button onClick={() => setIsOpenModal((prev) => !prev)}>Show Form</Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onClose={() => setIsOpenModal(false)} />
        </Modal>
      )} */}
    </>
  );
};

export default AddCabin;
