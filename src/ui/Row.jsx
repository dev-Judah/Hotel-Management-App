import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

    ${(props) =>
    props.type === "vertical full" &&
    css`
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
