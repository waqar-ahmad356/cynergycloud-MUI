import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll"; // Link for smooth scroll between sections
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State to toggle mobile menu
  const [anchorEl, setAnchorEl] = useState(null); // For mobile menu

  // Function to toggle mobile menu visibility
  const handleMobileMenuToggle = (event) => {
    setAnchorEl(event.currentTarget);
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMobileMenuOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: "#fff", boxShadow: "none" }}
      sx={{ padding: { xs: "16px 16px", lg: "18px 80px" } }}
    >
      <Toolbar sx={{ justifyContent: "space-evenly",gap:"70px", alignItems: "center" }}>
        {/* Logo section */}
        <Box>
          <Link to="hero" offset={0} smooth={true} duration={100}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: { xs: "125px", lg: "266px" },
                height: { xs: "25px", lg: "55px" },
              }}
            />
          </Link>
        </Box>

        {/* Desktop menu */}
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            gap: "47px",
          }}
        >
          <Link
            to="about"
            smooth={true}
            offset={-100}
            duration={100}
            style={{ color: "#0F172A", fontSize: "18px", fontWeight: "500" }}
          >
            About Us
          </Link>

          <Link
            to="pricing"
            smooth={true}
            offset={-30}
            duration={100}
            style={{ color: "#0F172A", fontSize: "18px", fontWeight: "500" }}
          >
            Pricing
          </Link>

          <Link
            to="testimonials"
            smooth={true}
            offset={-80}
            duration={100}
            style={{ color: "#0F172A", fontSize: "18px", fontWeight: "500" }}
          >
            Testimonials
          </Link>

          <Link
            to="contact"
            smooth={true}
            offset={-5}
            duration={100}
            style={{ color: "#0F172A", fontSize: "18px", fontWeight: "500" }}
          >
            Contact Us
          </Link>
          {/* Login and Sign Up section */}
          <Box
            style={{
              marginLeft: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <a
              href="#login"
              style={{
                color: "#22739C",
                fontWeight: "500",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Log In
            </a>

            <Button
              variant="contained"
              style={{
                backgroundColor: "#22739C",
                width: "129px",
                height: "57px",
                borderRadius: "58px",
                border: "2px solid #22739C",
                color: "#fff",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              <Link
                to="signup"
                smooth={true}
                offset={0}
                duration={100}
                style={{ color: "#fff", textDecoration: "none", textTransform:"none" }}
              >
                Sign Up
              </Link>
            </Button>
          </Box>
        </Box>

        {/* Mobile menu toggle */}
        <IconButton
          edge="start"
          color="#101828"
          aria-label="menu"
          onClick={handleMobileMenuToggle}
          sx={{ display: { lg: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile menu items */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(isMobileMenuOpen)}
          onClose={handleCloseMenu}
          PaperProps={{
            style: {
              width: "100%",
              
              
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              
              zIndex: "10",
            },
          }}
        >
          <MenuItem onClick={handleCloseMenu}>
            <Link
              to="about"
              smooth={true}
              offset={-100}
              duration={100}
              style={{ color: "#0F172A", fontSize: "1rem" }}
            >
              About Us
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <Link
              to="pricing"
              smooth={true}
              offset={-30}
              duration={100}
              style={{ color: "#0F172A", fontSize: "1rem" }}
            >
              Pricing
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <Link
              to="testimonials"
              smooth={true}
              offset={-80}
              duration={100}
              style={{ color: "#0F172A", fontSize: "1rem" }}
            >
              Testimonials
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <Link
              to="contact"
              smooth={true}
              offset={-5}
              duration={100}
              style={{ color: "#0F172A", fontSize: "1rem" }}
            >
              Contact Us
            </Link>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <a
              href="#login"
              style={{ color: "#22739C", fontWeight: "500", fontSize: "1rem",textDecoration:"none" }}
            >
              Login
            </a>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#22739C",
                color: "#fff",
                fontWeight: "500",
                fontSize: "1rem",
                width:"110px",
                borderRadius:"20px"
              }}
            >
              <Link
                to="signup"
                smooth={true}
                offset={0}
                duration={100}
                style={{ color: "#fff", textDecoration: "none",textTransform:"none" }}
              >
                Sign Up
              </Link>
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
