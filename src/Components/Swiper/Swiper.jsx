import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, Typography } from "@mui/material";
import testimonial_icon from "../../assets/testimonial-icon.png"; // Import the icon

// Testimonials array
const testimonials = [
  {
    id: 1,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  {
    id: 2,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  {
    id: 3,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  {
    id: 4,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  {
    id: 5,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  {
    id: 6,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  {
    id: 7,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  // Add more testimonials as needed...
];

const ContinuousSlider = () => {
  // Settings for the slider
  const settings = {
    dots: false, // Disable dots
    infinite: true, // Infinite scrolling
    speed: 3000, // Speed of transition
    slidesToShow: 4, // Show 5 slides at once by default
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Set delay to 0 (continuous scroll)
    cssEase: "linear", // Smooth transition
    arrows: false, // Hide arrows for clean look
    pauseOnHover: false, // No pause on hover
    responsive: [
      {
        breakpoint: 768, // Adjust at screen width <= 768px (tablets/small devices)
        settings: {
          slidesToShow: 3, // Show 3 slides at once on small devices
        },
      },
      {
        breakpoint: 480, // Adjust at screen width <= 480px (smaller devices)
        settings: {
          slidesToShow: 2, // Show 2 slides at once on very small devices
        },
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <Box
            key={testimonial.id}
            sx={{
              padding: {xs:"0 5px",lg:"0 12px"}, // Add padding to create space between slides
            }}
          >
            <Card
              sx={{
                padding: {xs:"12px",lg:"30px"},
                textAlign: "left",
                width:{xs:"100%",lg:"100%"},
                backgroundColor: "#eeeeee",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "space-between",
                gap:{xs:"41px",lg:"50px"}
              }}
            >
            <Box>
            <Box
                component="img"
                src={testimonial.icon}
                alt={testimonial.name}
                sx={{ width: {xs:"35px",lg:"79px"}, height: {xs:"37px",lg:"84px"},fontWeight:"500",letterSpacing:"-0.741px",lineHeight:{xs:"16px",lg:"38px"}, marginBottom: "5px" }}
              />
              <Typography variant="body1"  sx={{fontSize:{xs:"12px",lg:"27px"},color:"#413D45" }}>
                {testimonial.feedback}
              </Typography>
            </Box>
              
              <Typography variant="body2" sx={{fontSize:{xs:"8px",lg:"14px"},color:"#67646A"}}>
                {testimonial.name}, {testimonial.company}
              </Typography>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ContinuousSlider;
