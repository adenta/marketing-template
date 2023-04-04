import { Cta } from "../components/cta";
import Faq from "../components/faq";
import { Hero } from "../components/hero";
import Listings from "../components/listings";
import { Navbar } from "../components/navbar";
import { Newsletter } from "../components/newsletter";
import { PricingWithTable } from "../components/pricing-with-table";
import { StatWithCallToAction } from "../components/StatWithCallToAction/App";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Listings />
      <PricingWithTable />
      <StatWithCallToAction />
      <Faq />
      <Cta />
      <Newsletter />
    </>
  );
};

export default Home;
