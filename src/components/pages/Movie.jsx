import React, { useEffect, useState } from 'react'
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Title from '../layout/Title';
import Contact from '../layout/Contact';
import MovieList from '../includes/MovieList';
import MovieSearch from '../includes/MovieSearch';
import Loading from '../basics/Loading';
import { gsap } from "gsap";

// require('dotenv').config()

function Movie() {

    const [videos, setVideos] = useState([]);
    console.log(videos)

    const mainAnimation = () => {
        setTimeout(() => {

            document.getElementById("loading").classList.remove("loading__active");

            gsap.to("#header", {
                duration:1.5,
                top: 0,
                ease: "expo",
            });
            gsap.to(".cont__title strong", {
                duration:2.5,
                x : 0,
                y : 0,
                opacity : 1,
                ease: "expo",
                delay : 1.5
            })
            gsap.to(".cont__title em", {
                duration:2.5,
                x : 0,
                y : 0,
                opacity : 1,
                ease: "expo",
                delay : 2.0
            });
            gsap.to(".movie__inner", {
                duration:2.5,
                x : 0,
                y : 0,
                opacity : 1,
                ease: "expo",
                delay : 2.5
            })
            gsap.to(".movie__search", {
                duration:2.5,
                x : 0,
                y : 0,
                opacity : 1,
                ease: "expo",
                delay : 2.5
            })
        }, 2000);
    }

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=${query}`, requestOptions)
          .then(response => response.json())
          .then(result => setVideos(result.results))
          .catch(error => console.log('error', error));
    }

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=Jack`, requestOptions)
          .then(response => response.json())
          .then(result => {
              setVideos(result.results)
              mainAnimation();
            })
          .catch(error => console.log('error', error));
    }, []);

  return (
        <>
        <Loading />
            <Header />
            <Contents>
                <Title title={["MOVIE","BOOK"]} />
                <section id='movie__cont'>
                    <div className='container'>
                        <div className='movie__inner'>
                            <MovieSearch onSearch={search}/>
                            <MovieList videos={videos}/>
                        </div>
                    </div>
                </section>
                <Contact />
            </Contents>
        </>
  )
}

export default Movie