import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ 
        position: "absolute", 
        bottom: 0, 
        textAlign: "center" ,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        padding: "10px 0px 10px 0px",
        width: "100%"
    }}>
        <Typography>
            &copy; Bond Trinh 2022
        </Typography>
    </Box>
  )
}

export default Footer