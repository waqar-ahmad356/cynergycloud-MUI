import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import testimonial_icon from "../../assets/testimonial-icon.png";

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

const MySwiper = () => {
  return (
    <Box sx={{ overflowX: "hidden", padding: { lg: 0 } }}>
      <Swiper
        spaceBetween={22} // Default space between slides
        slidesPerView={5}  // Default number of slides for large screens
        centeredSlides={true}
        autoplay={{
          delay: 100,
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3, // For extra small devices (show 1 full and part of 2nd slide)
            spaceBetween: 10,   // Less space between slides
          },
          600: {
            slidesPerView: 3, // For small devices (show 2 slides)
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3, // For medium devices
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5, // For large devices (default)
            spaceBetween: 22,
          },
        }}
        modules={[Autoplay]}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Box
              sx={{
                display: { xs: "flex", lg: "flex" },
                flexDirection: "column",
                padding: { xs: "20px", lg: "30px" },
                gap: { xs: "10px", lg: "96px" },
                backgroundColor: "#eeeeee",
                width: { xs: "150px", lg: "200px" },
                borderRadius: "12px",
                justifyContent: "center",
                alignItems:"center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "2px", lg: "10px" },
                  alignItems: "flex-start",
                }}
              >
                <Box
                  component="img"
                  src={testimonial.icon}
                  alt={testimonial.name}
                  sx={{
                    width: { xs: "35px", lg: "79px" },
                    height: { xs: "37px", lg: "84px" },
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "12px", lg: "21px" },
                    color: "#413D45",
                    lineHeight: { xs: "15px", lg: "30px" },
                  }}
                >
                  {testimonial.feedback}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "8px", lg: "12px" },
                    color: "#67646A",
                    lineHeight: { xs: "10px", lg: "20px" },
                  }}
                >
                  {testimonial.name}, {testimonial.company}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MySwiper;
