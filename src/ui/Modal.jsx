/* eslint-disable react/prop-types */
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; */
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(84, 68, 68, 0.27);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;
const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openModalName, setOpenModalName] = useState("");
  const close = () => setOpenModalName("");
  const open = (name) => setOpenModalName(name);
  return (
    <ModalContext.Provider value={{ openModalName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens: openWindowName }) => {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
};

function Window({ children, onClose, name }) {
  const { openModalName, close } = useContext(ModalContext);
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && ref.current.contains(e.target)) {
          console.log("clicked outside");
          close();
        }
      }

      document.addEventListener("mousedown", handleClick);

      return document.removeEventListener("mousedown", handleClick);
    },
    [close],
  );
  if (name !== openModalName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark onClick={onClose} />
        </Button>
        {cloneElement(children, { onClose: close })}
      </StyledModal>
      ;
    </Overlay>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
