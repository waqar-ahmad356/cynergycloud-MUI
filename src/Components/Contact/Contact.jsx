import React from "react";

import phone from "../../assets/phone.png"; // Importing phone image
import location from "../../assets/location2.png"; // Importing location image
import email from "../../assets/email.png"; // Importing email image
import { Box, Typography } from "@mui/material";


// Contact component definition
const Contact = () => {
  return (
    <Box sx={{padding:{xs:"17px 13px 39px 13px",lg:"89px 190px"}}} id="contact">
      <Box sx={{display:"flex",width:{lg:"auto"},height:{lg:"784px"},flexDirection:{xs:"column",lg:"row"},gap:{xs:"39px",lg:"35px"}, padding:{lg:"11px"},borderRadius:"12px",boxShadow:"0px 0px 70.583px 35.292px rgba(0, 0, 0, 0.03)",justifyContent:"space-between",alignItems:"flex-start"}} >
        
        {/* Contact Us section */}
        <Box sx={{display:"flex", flexDirection:"column",width:{xs:"350px",lg:"500px"},height:{xs:"auto",lg:"760px"},padding:{xs:"16px",lg:"47px"},gap:{xs:"9px",lg:"131px"},justifyContent:"flex-start",alignItems:"flex-start",backgroundColor:"#22739C",borderRadius:"12px"}} >
          <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"9px",lg:"0px"}}} >
            <Typography sx={{color:"#fff",fontSize:{xs:"24px",lg:"38px",fontWeight:"600"}}}>Contact Us</Typography> {/* Section heading */}
            <Typography sx={{color:"#C9C9C9",fontSize:{xs:"16px",lg:"24px"}}} >Say something to start a live chat!</Typography> {/* Introductory text */}
          </Box>

          {/* Contact information items */}
          <Box sx={{display:"flex",flexDirection:"column",gap:{xs:"9px",lg:"56px"}}}>
            <Box sx={{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:{xs:"8px",lg:"29px"}}} >
              
              <Box
              component="img"
              src={phone}
              sx={{width:{sx:"21px",lg:"28px"},height:{xs:"21px",lg:"28px"}}}
              ></Box> {/* Phone icon */}
              <Typography sx={{marginBottom:"0px",color:"#fff",fontSize:{xs:"16px",lg:"24px"},fontStyle:"normal"}}>+1012 3456 789</Typography> {/* Phone number */}
            </Box>
            <Box sx={{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:{xs:"8px",lg:"29px"}}}>
            <Box
              component="img"
              src={email}
              sx={{width:{sx:"21px",lg:"28px"},height:{xs:"21px",lg:"28px"}}}
              ></Box> {/* Email icon */}
              <Typography sx={{marginBottom:"0px",color:"#fff",fontSize:{xs:"16px",lg:"24px"},fontStyle:"normal"}}>demo@gmail.com</Typography> {/* Email address */}
            </Box>
            <Box sx={{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:{xs:"8px",lg:"29px"}}}>
            <Box
              component="img"
              src={location}
              sx={{width:{sx:"21px",lg:"28px"},height:{xs:"21px",lg:"28px"}}}
              ></Box> {/* Location icon */}
              <Typography sx={{marginBottom:"0px",color:"#fff",fontSize:{xs:"16px",lg:"24px"},fontStyle:"normal"}}>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </Typography> {/* Physical address */}
            </Box>
           
          </Box>
          
          
        </Box>

        {/* Contact form section */}
        <div class="sm:pr-[23px] lg:gap-[52px] pl-[19px] lg:mt-[100px] lg:w-[668px]">
          <form class="flex flex-col items-start gap-2 lg:gap-[95px]">
            
            {/* First and Last Name Fields */}
            <div class="flex flex-col lg:flex-row gap-2 lg:gap-[28px]">
              <div class="flex flex-col  gap-2 lg:gap-4">
                <label for="input1" className="text-[20px] lg:text-[28px] text-black font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  class="border-b-[2px] border-[#011C2A] w-[330px] lg:w-[220px] focus:outline-none focus:shadow-none placeholder:text-[23px] placeholder:text-[#011C2A] placeholder:font-semibold "
                  id="input1"
                  placeholder="Shaoor"
                />
              </div>
              <div class="flex flex-col gap-2 lg:gap-4">
                <label for="input2" className="text-[20px] lg:text-[28px] text-black font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  class="border-b-[2px] border-[#011C2A] w-[330px] lg:w-[220px] placeholder:text-[#B3B3B3] focus:outline-none focus:shadow-none placeholder:text-[16px] placeholder:font-semibold"
                  id="input2"
                  placeholder="I"
                />
              </div>
             
            </div>
            

            {/* Email and Phone Number Fields */}
            <div class="flex flex-col lg:flex-row lg:gap-[28px]">
              <div class="flex flex-col gap-2 lg:gap-4">
                <label
                  for="input3"
                  className="text-[20px] text-black font-semibold lg:text-[#8D8D8D] lg:text-[28px]"
                >
                  Email
                </label>
                <input
                  type="text"
                  class="border-b-[2px] lg:border-[#8D8D8D] border-[#011C2A] w-[330px]  lg:w-[220px] placeholder:text-[#B3B3B3] focus:outline-none focus:shadow-none placeholder:text-[16px] placeholder:font-semibold"
                  id="input3"
                  placeholder=""
                />
              </div>
              <div class="flex flex-col gap-2 lg:gap-4">
                <label for="input4" className="text-[20px] lg:text-[28px] text-black font-semibold">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="border-b-[2px] lg:border-[#8D8D8D] border-[#011C2A] w-[330px] lg:w-[220px] placeholder:text-[#011C2A] focus:outline-none focus:shadow-none placeholder:text-[16px] lg:placeholder:text-[24px] placeholder:font-semibold"
                  id="input4"
                  placeholder="+92-3124700158"
                />
            </div>
              
              </div>
             

            {/* Message Text Area */}
            <div class="flex flex-col gap-2 lg:gap-4">
              <label
                for="textarea"
                className="text-[20px] lg:text-[#8D8D8D] lg:text-[28px] text-black font-semibold"
              >
                Message
              </label>
              <textarea
                class="border-b-[2px] lg:border-[#8D8D8D] border-[#011C2A] lg:w-[470px] w-[330px] resize-none focus:outline-none focus:shadow-none placeholder:text-[#B3B3B3] placeholder:text-[16px] placeholder:font-semibold"
                id="textarea"
                rows="1"
                placeholder="I"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="lg:mt-[-40px] lg:ml-[210px] ms-[180px]">
              <button type="submit" class=" text-[16px] text-white font-semibold lg:w-[261px] lg:h-[75px] lg:text-[21px] lg:font-bold py-[6px] px-4 w-[148px] h-[33px] bg-[#22739C] border-solid-[2.5px] border-[#22739C] rounded-[58px]">
                Send Message
              </button>
              </div>
          </form>
        </div>
      </Box>
    </Box>
  );
};

export default Contact; // Exporting the component for use in other parts of the application
