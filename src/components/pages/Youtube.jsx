import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeList from "../includes/YoutubeList";
import YoutubeSearch from "../includes/YoutubeSearch";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// require("dotenv").config();

function Youtube() {
  const [videos, setVideos] = useState([]);
  console.log(videos);

  const mainAnimation = () => {
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading__active");

      gsap.to("#header", {
        duration: 1.5,
        top: 0,
        ease: "expo",
      });
      gsap.to(".cont__title strong", {
        duration: 2.5,
        x: 0,
        y: 0,
        opacity: 1,
        ease: "expo",
        delay: 1.5,
      });
      gsap.to(".cont__title em", {
        duration: 2.5,
        x: 0,
        y: 0,
        opacity: 1,
        ease: "expo",
        delay: 2.0,
      });
      gsap.to(".youtube__inner", {
        duration: 2.5,
        x: 0,
        y: 0,
        opacity: 1,
        ease: "expo",
        delay: 2.5,
      });
      gsap.to(".youtube__search", {
        duration: 2.5,
        x: 0,
        y: 0,
        opacity: 1,
        ease: "expo",
        delay: 2.5,
      });
    }, 2000);
  };

  const search = (query) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&key=${process.env.REACT_APP_API}&type=video`,requestOptions)
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=React&key=${process.env.REACT_APP_API}&type=video`,requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
        mainAnimation();
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Loading />
      <Header />
      <Contents>
        <Title title={["YOUTUBE", "BOOK"]} />
        <section id="youtube__cont">
          <div className="container">
            <div className="youtube__inner">
              <YoutubeSearch onSearch={search} />
              <YoutubeList videos={videos} />
            </div>
          </div>
        </section>
        <Contact />
      </Contents>
    </>
  );
}

export default Youtube;
