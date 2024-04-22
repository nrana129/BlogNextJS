import 'jquery'; // Import jQuery globally
import Header from "./assets/components/header/Header"
import Footer from "./assets/components/footer/Footer"
import Slider from "./assets/components/home/slider/Slider"
import Popular from "./assets/components/home/popular/Popular"
import Trending from "./assets/components/home/trending/Trending"

export default function Home() {
  return (
    <>
      <Header/>
      <Slider/>
      <Popular/>
      <Trending/>
      <Footer/>
    </>
  );
}
