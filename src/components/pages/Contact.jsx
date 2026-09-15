import React from "react";
// 문의 페이지의 로딩과 연락처 콘텐츠를 조합합니다.
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
