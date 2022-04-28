import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Title from '../layout/Title';
import Contact from '../layout/Contact';
import AboutCont from '../includes/AboutCont';
import Loading from '../basics/Loading';
import { gsap } from "gsap";
import axios from "axios";

class About extends React.Component {
    state = {
        isLoading: true,
        ports: [],
    };

    mainAnimation = () => {
        setTimeout(()=>{
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
            });
            gsap.to(".cont__title em", {
                duration:2.5,
                x : 0,
                y : 0,
                opacity : 1,
                ease: "expo",
                delay : 2.0
            });
            gsap.to(".about__inner", {
                duration:2.5,
                x : 0,
                y : 0,
                opacity : 1,
                ease: "expo",
                delay : 2.5
            });
        }, 10)
    }
    getPorts = async () => {
        const {data: {data : {ports}}} = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
        
        this.setState({ports : ports});
        


        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading:false});
            this.mainAnimation();
        }, 1600);
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("첫번째 시작")
            document.getElementById("loading").classList.remove("loading__active");
            this.getPorts();
        }, 2000);
    }

    render(){
        const {isLoading, ports} = this.state;
        console.log(ports)
        return (
            <>
            {isLoading ? (
                <Loading color="light"/>
                ) : (
                    <>
                        <Header color="light"/>
                        <Contents>
                        <Title title={["about","me"]} color="light"/>
                        <AboutCont color="light"/>
                        <Contact />
                    </Contents>
                </>
            )}
            </>
        )
    }
}

// function About(){
//     return (
//         <>
//             <Header color="light"/>
//             <Contents>
//                 <Title title={["about","me"]} color="light"/>
//                 <AboutCont color="light"/>
//                 <Contact />
//             </Contents>
//         </>
//     )
// }

export default About;