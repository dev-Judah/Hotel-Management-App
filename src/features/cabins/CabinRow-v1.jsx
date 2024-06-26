/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.7fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.8rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
  border-radius: 3px;
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const CabinRow = ({ cabin, onClose }) => {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();
  // eslint-disable-next-line react/prop-types
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  const handleDuplicate = () => {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  };

  // const queryClient = useQueryClient();

  // const { isLoading, mutate } = useMutation({
  //   mutationFn: (id) => deleteCabin(id),

  //   onSuccess: () => {
  //     toast.success(`Cabin ${name} successfully deleted`);
  //     queryClient.invalidateQueries({
  //       queryKey: ["cabins"],
  //     });
  //   },
  //   onError: (error) => toast.error(error.message),
  // });

  return (
    <>
      <Table.Row role="row">
        <Img src={image} />
        <Cabin>{name} </Cabin>
        <div>Fits up to {maxCapacity}</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <ButtonContainer>
            <button disabled={isCreating} onClick={handleDuplicate}>
              <HiSquare2Stack />
            </button>
            <Modal>
              <Modal.Open opens="edit">
                <button>
                  <HiPencil width={10} />
                </button>
              </Modal.Open>
              <Modal.Window name="edit">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>
            </Modal>
            {/* <button disabled={isDeleting} onClick={() => deleteCabin(cabinId)}>
            <HiTrash />
          </button> */}
            <Modal>
              <Modal.Open opens="delete">
                <button>
                  <HiTrash />
                </button>
              </Modal.Open>
              <Modal.Window name="delete">
                <ConfirmDelete
                  onClose={onClose}
                  resourceName={name}
                  disabled={isDeleting}
                  onConfirm={() => deleteCabin(cabinId)}
                />
              </Modal.Window>
            </Modal>
          </ButtonContainer>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />
            <Menus.List id={cabinId}>
              <Menus.Button onClick={handleDuplicate} icon={<HiSquare2Stack />}>
                Duplicate
              </Menus.Button>
              <Menus.Button icon={<HiPencil width={10} />}>Edit</Menus.Button>
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </div>
      </Table.Row>
    </>
  );
};

export default CabinRow;
