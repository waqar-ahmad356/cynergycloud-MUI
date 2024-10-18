import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Signup from './Components/Signup/Signup';
import Testimonials from './Components/Testimonials/Testimonials';

const theme = createTheme({
  typography: {
    fontFamily: 'DM Sans, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
      <Hero/>
      <About/>
      <Testimonials/>
      <Signup/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
