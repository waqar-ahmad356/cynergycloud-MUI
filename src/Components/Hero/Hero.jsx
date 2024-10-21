import React from "react";
import { Box, Typography, Button } from "@mui/material"; // Import MUI components
import arrow from "../../assets/arrow.png"; // Arrow icon for the button
import desktop from "../../assets/desktop-app.png"; // Image for desktop view in hero section
import Autotyping from "../AutoTyping/AutoTyping";


const Hero = () => {
  return (
    <>
      {/* Hero Section: Main container for the hero content */}
      <Box style={{display:"flex",flexDirection:"column",justifyContent: "center",
          alignItems: "center"}}
        sx={{ padding:{xs:"0px 16px 46px",lg:"94px"},
                gap:{xs:"16px",lg:"40px"}
        }}
        id="hero"
      >
        {/* Text Content: Heading and description */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"
        sx={{gap:{sx:"8px",lg:"16px"}}}
        >
          {/* Hero Heading */}
          
          <Typography
  variant="h2"
  sx={{
    color: "#0F172A",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: { xs: "24px", lg: "56px" }, // Responsive font size
  }}
>
  Unlock Seamless  
  <Box  sx={{display:{xs:"inline",lg:"none"}}}>
<br/>
  </Box>
  
    <Autotyping /> 
    <Box  sx={{display:{xs:"inline",lg:"none"}}}>
<br/>
  </Box>
    

  Where Teams Connect and Ideas Flourish!
</Typography>
          {/* Hero Description */}
          <Typography
            variant="body1"
            sx={{
              color: "#0F172A",
              textAlign: "center",
              fontSize:{xs:"16px",lg:"24px"}
              
            }}
          >
            Empower Your Team to Communicate, Collaborate, and Create—All in One Place!
          </Typography>
        </Box>

        {/* Button Section: Start For Free button */}
        <Box
          sx={{
            
            backgroundColor: "#0B608B",
            color: "white",
            width:{xs:"227px",lg:"331px"},
            height:{xs:"40px",lg:"76px"},
            borderRadius:"58px",
            gap:"28px",
            
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
             
          }}
        >
          {/* Button Text */}
          <Button
            href="#"
            sx={{
             
              color: "white",
              textTransform: "none",
              fontSize:{xs:"18px",lg:"28px"},
              
            }}
          >
            Start For Free
          </Button>
          {/* Arrow Icon */}
          <img src={arrow} alt="" />
        </Box>
      </Box>

      {/* Image Section: Displays the desktop image and background animation */}
      <Box
        sx={{
          paddingX:{xs:"16px",lg:"94px"},
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          
        }}
      >
       
      {/* Image Section: Displays the desktop image */}
      <Box
        component="img" // Use Box as an image component
        src={desktop}
        alt=""
        sx={{
          borderRadius: { xs: "6px", lg: "23px" }, // Border radius for small and large screens
          border: { xs: "1.5px solid #4C1D95", lg: "6px solid #4C1D95" }, // Border for small and large screens
          width: "100%", // Adjust width as necessary
          height: "auto", // Maintain aspect ratio
        }}
      />

        {/* Background Animation */}
        <Box
          sx={{
            position: "absolute",
            
            top:{xs:"-30px",lg:"-230px"},
            left:{xs:"-60px",lg:"-190px"},
            
            width:{xs:"500px",lg:"1600px"},
            height:{xs:"200px",lg:"900px"},
            backgroundImage: "url('/images/hero-animation.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
            lg: {
              display: "block", // Ensure this is only applied on large screens
            },
            display: { xs: "block", lg: "block" }, // Hide on small screens and show on large
          }}
        />
      </Box>
    </>
  );
};

export default Hero;
