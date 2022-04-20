import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import MainCont from '../includes/MainCont';
import Loading from '../basics/Loading';
import { gsap } from "gsap";

// function Main(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <MainCont />
//             </Contents>
//             <Footer />
//         </>
//     )
// }

class Main extends React.Component {
    state = {
        isLoading: true, 
    }

    getSite = () => {
        setTimeout(()=>{
            gsap.to("#header", {
                duration:1.5,
                top: 0,
                ease: "expo"
            });
            gsap.to("#footer", {
                duration:1.5,
                bottom: 0,
                ease: "expo"
            });
            gsap.to(".main__inner > div:nth-child(1)", {
                duration:2.5,
                opacity: 1,
                y: 0,
                delay: 1.5,
                ease: "sine.out"
            });
            gsap.to(".main__inner > div:nth-child(2)", {
                duration:2.5,
                opacity: 1,
                y: 0,
                delay: 2,
                ease: "sine.out"
            });
            gsap.to(".main__inner > div:nth-child(3)", {
                duration:2.5,
                opacity: 1,
                y: 0,
                delay: 2.5,
                ease: "sine.out"
            });
            gsap.to(".main__inner > div:nth-child(4)", {
                duration:2.5,
                opacity: 1,
                y: 0,
                delay:3,
                ease: "sine.out"
            });
        }, 1000)
    }
    getPorts = () => {
        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading:false});
            this.getSite();
        }, 1600);
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            this.getPorts();
        }, 3000);
    }

    render(){
        const {isLoading} = this.state;

        return(
            <>
            {isLoading ? (
                <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <MainCont />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}

export default Main;