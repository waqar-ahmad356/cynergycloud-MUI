import React from "react";


import MySwiper from "../Swiper/Swiper";
import { Box, Typography } from "@mui/material";

const Testimonials = () => {
  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"11px",lg:"24px"},padding:{xs:"28px 0px 59px 0px",lg:"65px 0px 127px 0px"}}} className="testimonials lg:flex lg:flex-col lg:gap-6 gap-[11px] lg:pt-[65px] pt-[28px] pb-[59px] lg:pb-[127px]">
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} className="flex flex-col lg:gap-0 gap-0 justify-center items-center">
      <Typography sx={{color:"#0f172a", fontSize:{xs:"24px",lg:"56px"},fontWeight:"700",lineHeight:{lg:"85px",xs:"37px"}}} >Testimonials</Typography>
      <Typography sx={{color:"#6f6c90",fontSize:{xs:"10px",lg:"21px",fontWeight:"400",lineHeight:{xs:"15px",lg:"35px"}}}} className=" lg:text-[21px] text-[10px] text-[#6f6c90] font-normal leading-4 lg:leading-8 ">See How Teams Are Thriving with SynergyCloud</Typography>
      </Box>
      <Box >
      <MySwiper />
      </Box>
    </Box>
  );
};

export default Testimonials;
