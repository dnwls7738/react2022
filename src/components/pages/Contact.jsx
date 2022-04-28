import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ContactCont from "../includes/ContactCont";
import { gsap } from "gsap";

const mainAnimation = () => {
  setTimeout(() => {
    document.getElementById("loading").classList.remove("loading__active");

    gsap.to("#header", {
      duration: 1.5,
      top: 0,
      ease: "expo",
    });
  }, 2000);
};
mainAnimation();

function Contact() {
  return (
    <>
      <Header />
      <Contents>
        <ContactCont />
      </Contents>
      <Footer />
    </>
  );
}

export default Contact;
