import { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledApp>
      <Navbar />
      <Outlet />
      <Footer />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.main`
  display: grid;
  background-color: #1e1e1e;
  box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.25);
  max-width: 280px;
  /* height: 400px; */
  border-radius: 8%;
  gap: 12px;
`;
