import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ContContact  from "../layout/Contact";
import ReFerCont from "../includes/ReFerCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";
// function Reference(){
//     return (
//         <>
//             <Header color="light" />
//             <Contents>
//                 <Title title={["reference","book"]} color="light" />
//                 <ReferCont color="light" />
//                 <Contact />
//             </Contents>
//             <Footer color="light" />
//         </>
//     )
// }
class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
    }
    mainAnimation = () => {
        setTimeout(() => {
            gsap.to("#header", {
                duration:1.5,
                top: 0,
                ease: "expo",
            });
            gsap.to("#footer", {
                duration:1.5,
                bottom: 0,
                ease: "expo"
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
            gsap.to(".refer__inner", {
                duration:2.5,
                x : 0,
                y : 0,
                opacity : 1,
                ease: "expo",
                delay : 2.5
            });
        }, 10)
    }
    getSite = async () => {
        const {
                data: {
                    data : {htmlRefer},
            },
        } = await axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json");
        setTimeout(() => {
            this.setState({refers: htmlRefer, isLoading: false})
            this.mainAnimation();
         }, 1600);
    }
    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#F0EEEB";
            this.getSite();
        }, 2000);
    }
    render(){
        const {isLoading, refers} = this.state;
        return (
            <>
                {isLoading ? (
                    <Loading color="light" />
                    ):(
                    <>
                        <Header color="light" />
                        <Contents>
                            <Title title={["Reference","book"]} color="light" />
                            <ReFerCont refer={refers} color="light" />
                            <ContContact />
                        </Contents>
                        <Footer color="light" />
                    </>
                )}
            </>
        )
    }
}
export default Reference;