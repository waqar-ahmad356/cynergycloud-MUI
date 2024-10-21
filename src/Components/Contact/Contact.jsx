import React from "react";
import phone from "../../assets/phone.png";
import location from "../../assets/location2.png";
import email from "../../assets/email.png";
import { Box, TextField, Typography, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ padding: { xs: "17px 13px 39px 13px", lg: "89px 190px" } }} id="contact">
      <Box
        sx={{
          display: "flex",
          width: { lg: "1000px" },
          height: { lg: "784px" },
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: "39px", lg: "35px" },
          padding: { lg: "11px" },
          borderRadius: "12px",
          boxShadow:{xs:"none",lg:"0px 0px 70.583px 35.292px rgba(0, 0, 0, 0.03)"} ,
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Contact Us section */}
        <Box className="contact-us"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", lg: "900px" },
            height: { xs: "auto", lg: "760px" },
            padding: { xs: "16px", lg: "47px" },
            gap: { xs: "9px", lg: "100px" },
            justifyContent: "flex-start",
            alignItems: "flex-start",
            backgroundColor: "#22739C",
            borderRadius: "12px",
            
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "9px", lg: "0px" } }}>
            <Typography sx={{ color: "#fff", fontSize: { xs: "24px", lg: "38px" }, fontWeight: "600" }}>
              Contact Us
            </Typography>
            <Typography sx={{ color: "#C9C9C9", fontSize: { xs: "16px", lg: "24px" } }}>
              Say something to start a live chat!
            </Typography>
          </Box>

          {/* Contact information items */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "9px", lg: "56px" } }}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: { xs: "8px", lg: "29px" } }}>
              <Box
                component="img"
                src={phone}
                sx={{ width: { xs: "21px", lg: "28px" }, height: { xs: "21px", lg: "28px" } }}
              ></Box>
              <Typography sx={{ marginBottom: "0px", color: "#fff", fontSize: { xs: "16px", lg: "24px" } }}>
                +1012 3456 789
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: { xs: "8px", lg: "29px" } }}>
              <Box
                component="img"
                src={email}
                sx={{ width: { xs: "21px", lg: "28px" }, height: { xs: "21px", lg: "28px" } }}
              ></Box>
              <Typography sx={{ marginBottom: "0px", color: "#fff", fontSize: { xs: "16px", lg: "24px" } }}>
                demo@gmail.com
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: { xs: "8px", lg: "29px" } }}>
              <Box
                component="img"
                src={location}
                sx={{ width: { xs: "21px", lg: "28px" }, height: { xs: "21px", lg: "28px" } }}
              ></Box>
              <Typography sx={{ marginBottom: "0px", color: "#fff", fontSize: { xs: "16px", lg: "24px" } }}>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Contact form section */}
        <Box sx={{ width: "100%", padding: { xs: "0px 0px 0px 19px", lg: "0px" }, marginTop: {xs:"5px",lg:"100px"} }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "8px", lg: "75px" } }} component="form">
            <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: { xs: "8px", lg: "50px" } }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Typography sx={{ fontSize: { xs: "20px", lg: "28px" }, fontWeight: "600" }}>First Name</Typography>
                <TextField
                  variant="standard"
                  InputProps={{
                    sx: {
                      borderBottom: "2px solid #170F49",
                      width: { xs: "100%", lg: "200px" },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Typography sx={{ fontSize: { xs: "20px", lg: "28px" }, fontWeight: "600" }}>Last Name</Typography>
                <TextField
                  variant="standard"
                  InputProps={{
                    sx: {
                      borderBottom: "2px solid #170F49",
                      width: { xs: "100%", lg: "200px" },
                    },
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: { xs: "8px", lg: "50px" } }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Typography sx={{ fontSize: { xs: "20px", lg: "28px" },color:"#8D8D8D", fontWeight: "600" }}>Email</Typography>
                <TextField
                  variant="standard"
                  InputProps={{
                    sx: {
                      borderBottom: "2px solid #011C2A",
                      width: { xs: "100%", lg: "200px" },
                    },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <Typography sx={{ fontSize: { xs: "20px", lg: "28px" }, fontWeight: "600" }}>Phone Number</Typography>
                <TextField
                  variant="standard"
                  placeholder="+92-3124700158"
                  InputProps={{
                    sx: {
                      borderBottom: "2px solid #011C2A",
                      width: { xs: "100%", lg: "200px" },
                    },
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography sx={{ fontSize: { xs: "20px", lg: "28px" },color:"#8D8D8D", fontWeight: "600" }}>Messages</Typography>
              <TextField
                variant="standard"
                multiline
                rows={1}
                InputProps={{
                  sx: {
                    borderBottom: "2px solid #011C2A",
                    width: { xs: "100%", lg: "450px" },
                  },
                }}
              />
            </Box>

            <Box sx={{ marginTop: { lg: "-30px" }, marginLeft: { xs: "auto", lg: "auto" } }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  padding:{xs:"6px 16px"},
                  fontSize: { xs: "12px", lg: "21px" },
                  fontWeight: {xs:"noraml",lg:"bold"},
                  width: { xs: "148px", lg: "261px" },
                  height: { xs: "33px", lg: "75px" },
                  borderRadius: "58px",
                  backgroundColor: "#22739C",
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
