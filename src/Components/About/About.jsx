import React from "react";

import about_img from '../../assets/right.png'; // Importing the image to be used in the component
import { Box, Typography } from "@mui/material";

// About component definition
const About = () => {
  return (
    <Box sx={{padding:{xs:"0px 16px",lg:"94px"}}} id="about">
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:{xs:"column-reverse",lg:"row"},gap:{xs:"16px",lg:"94px"}}}>
        {/* Image section */}
        <Box >
         
          <Box component="img" src={about_img}
          sx={{width:{xs:"262px",lg:"500px"},height:{xs:"209px",lg:"400px"}}}
          >

          </Box> {/* Displaying the image */}
        </Box>
        
        {/* Content section */}
        <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"0px",lg:"30px"},justifyContent:"flex-start",alignItems:"flex-start"}}>
          <Typography sx={{color:"#0F172A", fontSize:{xs:"24px",lg:"65px"},fontWeight:{xs:"700",lg:"800"},marginBottom:"0px"}}>About Us</Typography> {/* Section title */}
          <Typography sx={{marginBottom:"0px",fontSize:{xs:"16px",lg:"24px",fontWeight:{xs:"400",lg:"400"},lineHeight:{xs:"18px",lg:"42px"},width:{lg:"600px"},height:{lg:"252px"}},alignSelf:"stretch"}} className="mb-0 leading-7 lg:text-[24px] lg:leading-10 lg:w-[600px] lg:h-[252px] text-[16px] font-normal text-[#0F172A]">
            {/* Description text */}
            At SynergyCloud, we believe that seamless communication is the
            backbone of productive teams. Designed for the modern workplace, our
            platform fosters real-time collaboration, efficient communication,
            and organized workflows. Whether your team is remote, hybrid, or
            in-office, we make staying connected effortless.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About; // Exporting the component for use in other parts of the application
