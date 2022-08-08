import React from "react";
import Services from "../Services/Services";
import Header from "../Header/Header";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Testimonials from "../Testimonials/Testimonials";
import FeaturedService from "../FeaturedService/FeaturedService";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeaturedService></FeaturedService>
      <MakeAppoinment></MakeAppoinment>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
