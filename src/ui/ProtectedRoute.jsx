/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  //3. no authenticated user redirect to login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [navigate, isAuthenticated, isLoading]);

  //2. show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //is authenticated redirect to /dashboard
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
