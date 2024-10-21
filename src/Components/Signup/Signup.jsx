import React from "react";

import signup_img from "../../assets/Gif for synergy 1.png"; // Ensure the correct path

import { Box, Button, TextField, Typography } from "@mui/material";

const Signup = () => {
  return (
    <Box
      sx={{
        padding: { xs: "0px 13px", lg: "47px 18px" },
        backgroundColor: { xs: "white", lg: "#eeeeee" },
        width: "100%",
      }}
      id="signup"
    >
      <Box
        sx={{
          padding: { lg: "73px 178px" },
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { xs: "center", lg: "center" },
          alignItems: { xs: "center", lg: "center" },
          gap: { xs: "49px", lg: "94px" },
          width: "100%",
        }}
      >
        {/* Signup Form Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "40px", lg: "68px" },
            width: "100%",
          }}
        >
          {/* Signup Title */}
          <Typography
            sx={{
              color: "#0F172A",
              fontSize: { xs: "30px", lg: "56px", fontWeight: "600" },
            }}
            className=" text-[30px] lg:text-[56px] font-semibold"
          >
            Sign Up
          </Typography>

          {/* Signup Form */}
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: { xs: "36px", lg: "68px" },
            }}
          >
            {/* Name Input Field */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "#170F49",
                  fontSize: { xs: "14px", lg: "28px", fontWeight: "600" },
                }}
              >
                Full Name
              </Typography>
              <TextField
                variant="standard"
                id="name"
                sx={{
                    borderBottom: "2px solid #170F49",
                    width: { xs: "100%", lg: "400px" },
                    bgcolor: { lg: "transparent" }
                }}
              />
            </Box>

            {/* Email Input Field */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "#170F49",
                  fontSize: { xs: "14px", lg: "28px", fontWeight: "600" },
                }}
              >
                Email
              </Typography>
              <TextField
                variant="standard"
                id="email"
                sx={{
                    borderBottom: "2px solid #170F49",
                    width: { xs: "100%", lg: "400px" },
                    bgcolor: { lg: "transparent" }
                }}
              />
            </Box>
            {/* Password Input Field */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "#170F49",
                  fontSize: { xs: "14px", lg: "28px", fontWeight: "600" },
                }}
              >
                Password
              </Typography>
              <TextField
                variant="standard"
                id="password"
                sx={{
                    borderBottom: "2px solid #170F49",
                    width: { xs: "100%", lg: "400px" },
                    bgcolor: { lg: "transparent" }
                }}
              />
            </Box>

            {/* Create Account Button */}
            <Button
              type="submit"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#22739C",
                border: "1.2px solid #22739C",
                color: "#fff",
                width: { xs: "180px", lg: "276px" },
                height: { xs: "39px", lg: "76px" },
                borderRadius: { xs: "30px", lg: "58px" },
                padding: { lg: "23px 28px" },
                textTransform: "none",
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "11px", lg: "21px" }, fontWeight: "700" }}
              >
                Create Account
              </Typography>
            </Button>
          </Box>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            display: { lg: "flex" }, // Only flex on large screens
            justifyContent: { lg: "center" }, // Center content on large screens
            alignItems: { lg: "center" }, // Center items vertically on large screens
            width: { lg: "665px" },
            height: { lg: "498px" },
          }}
        >
          <img
            src={signup_img}
            alt="Signup Visual"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
