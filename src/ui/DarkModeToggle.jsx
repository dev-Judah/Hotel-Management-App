import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, darkModeToggle } = useDarkMode();
  return (
    <ButtonIcon onClick={darkModeToggle}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
