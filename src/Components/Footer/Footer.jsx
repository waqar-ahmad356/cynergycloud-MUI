import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../assets/logo.png"; // Importing the logo image
import linkedin from "../../assets/linkedin.png"; // Importing the LinkedIn icon
import phone from "../../assets/phone2.png"; // Importing the phone icon
import location from "../../assets/Location.png"; // Importing the location icon
import info from "../../assets/info.png"; // Importing the info icon


// Footer component
const Footer = () => {
  return (
    <Box sx={{padding:{xs:"39px 49px 27px 28px",lg:"47px 194px"}}} >
      {/* Main footer container */}
      <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",lg:"row"},gap:{xs:"16px"}}} >
        
        {/* Left section of the footer containing the logo and a tagline */}
        <Box sx={{display:"flex",flexDirection:"column", justifyContent:"space-between",gap:{xs:"16px",lg:"94px"}}}>
          <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"4px",lg:"4px"}}} className="flex flex-col gap-[4px]">
          <Box
        component="img"
        src={logo}
        alt="Company Logo"
        sx={{ width:{xs:"100%",lg:"265px"},height:{xs:"55px",lg:"55px"}

        }}
      />
            <Typography sx={{width:{xs:"250px",lg:"263px"},color:"#0F172A",fontSize:"16px",marginBottom:"0px",fontStyle:"normal"}}>
              Empower Your Team to Communicate, Collaborate, and Create—All in
              One Place!
            </Typography> {/* Tagline */}
          </Box>
           {/* LinkedIn icon */}
          <Box
        component="img"
        src={linkedin}
        alt="LinkedIn Logo"
        sx={{ width:{xs:"23px",lg:"28px"},height:{xs:"23px",lg:"28px"}

        }}
      />
        </Box>
        
        {/* Center section with quick links */}
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:{xs:"16px",lg:"28px"}}}>
          <Typography sx={{color:"#0F172A",fontSize:{sx:"24px",lg:"28px"},fontStyle:"normal",fontWeight:"700",lineHeight:"34px"}} >Quick Links</Typography> {/* Section heading */}
          <Box component="ul" sx={{padding:"0px",display:"flex",flexDirection:"column",listStyle:"none",gap:{xs:"16px",lg:"28px"}}}>
           {/* Unordered list for quick links */}
           {["About Us","Testimonials","Pricing","Contact Us"].map((text,index)=>(
                <Box
                component="li" 
                key={index}
                
                >
                <Typography sx={{fontSize:{xs:"16px",lg:"24px"},color:"#0F172A",fontStyle:"normal" ,lineHeight:"28px",fontWeight:"400"}}>{text}</Typography>
                </Box>
           ))}
            
         </Box>
        </Box>

        {/* Right section with contact information */}
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:{xs:"16px",lg:"20px"},width:{lg:"301px"}}}>
        <Typography sx={{color:"#0F172A",fontSize:{sx:"24px",lg:"28px"},fontStyle:"normal",fontWeight:"700",lineHeight:"34px"}} >Contact</Typography> {/* Section heading */}
          <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"16px",lg:"18px"},justifyContent:"flex-start"}} > {/* Contact info container */}
            
            {/* Contact info item 1: email */}
            <Box sx={{display:"flex",gap:"9px",justifyContent:"flex-start",alignItems:"center"}} >
              <Box
              component="img"
              src={info}
              sx={{width:{xs:"23px",lg:"28px"},height:{xs:"23px",lg:"28px"}}}
              ></Box> {/* Email icon */}
              <Typography sx={{color:"#0F172A",fontSize:{xs:"16px",lg:"24px"},fontStyle:"normal",fontWeight:"400",lineHeight:"28px"}} className="text-[16px] lg:text-[24px] text-[#0F172A] leading-6 font-normal">info@synergycloud.com</Typography> {/* Email address */}
            </Box>
            
            {/* Contact info item 2: phone number */}
            <Box sx={{display:"flex",gap:"9px",justifyContent:"flex-start",alignItems:"center"}}>
            <Box
              component="img"
              src={phone}
              sx={{width:{xs:"23px",lg:"28px"},height:{xs:"23px",lg:"28px"}}}
              ></Box> {/* Phone icon */}
              <Typography sx={{fontSize:{xs:"16px",lg:"24px"},color:"#0F172A",fontStyle:"normal" ,lineHeight:"28px",fontWeight:"400"}}>650-285-9974</Typography> {/* Phone number */}
            </Box>
            
            {/* Contact info item 3: location */}
            <Box sx={{display:"flex",gap:"9px",justifyContent:"flex-start",alignItems:"center"}}>
            <Box
              component="img"
              src={location}
              sx={{width:{xs:"23px",lg:"28px"},height:{xs:"23px",lg:"28px"}}}
              ></Box>  {/* Location icon */}
              <Typography sx={{fontSize:{xs:"16px",lg:"24px"},color:"#0F172A",fontStyle:"normal" ,lineHeight:"28px",fontWeight:"400"}}>110 Nottingham Street Boston MA 02090</Typography> {/* Address */}
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer; // Exporting the Footer component for use in other parts of the app
