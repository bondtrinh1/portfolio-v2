import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Container>
        <nav style={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-evenly"
        }}>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="projects">Projects</Link>
        </nav>
      </Container>
      <Outlet/>
    </>
  );
}

export default App