import { Hero } from "../components/hero";
import Listings from "../components/listings";
import { Navbar } from "../components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Listings />
    </>
  );
};

export default Home;
