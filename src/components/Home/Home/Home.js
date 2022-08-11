import React from "react";
import Services from "../Services/Services";
import Header from "../Header/Header";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Testimonials from "../Testimonials/Testimonials";
import FeaturedService from "../FeaturedService/FeaturedService";
import Doctors from "../Doctors/Doctors";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeaturedService></FeaturedService>
      <MakeAppoinment></MakeAppoinment>
      <Testimonials></Testimonials>
      <Doctors></Doctors>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
