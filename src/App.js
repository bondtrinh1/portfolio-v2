// import React from 'react';
// import AppBar from './components/AppBar';
// import Footer from "./components/Footer";
// import HomeContent from "./components/HomeContent";
// import { 
//   Box,
//   Container,
//   Typography,
//   Divider
// } from '@mui/material';
// import Avatar from '@mui/material/Avatar';

// function App() {
//   return (
//     <Box sx={{ 
//       color: "#fff"
//     }}>
//       <AppBar />
//       <HomeContent />
//       <Footer />
//     </Box>
//   )
// }

// export default App;

import React from "react";
import { Link } from "react-router-dom";
import { Box,Container} from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Box>
      <nav style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="projects">Projects</Link>
      </nav>
      <Container>
       
      </Container>
    </Box>
    <Outlet/>
    </>

  );
}

export default App