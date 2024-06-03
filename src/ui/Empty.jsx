/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function Empty({ resource }) {
  return <StyledP>No {resource} could be found.</StyledP>;
}

export default Empty;
