import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ReFerCont from "../includes/ReFerCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";

//변수설정 - 로딩소스 없애주고 - 데이터 가져와서 변수 시켜주고 -
class Reference extends React.Component {   //1
    state = {
        isLoading: true,
        refers: [],
    }
    mainAnimation = () => {
        setTimeout (() => {
            gsap.to("#header", {
                duration:1.5,
                top: 0,
                ease: "expo",
            });
            gsap.to("#footer", {
                duration:0.8,
                bottom: 0,
                delay: 0.2,
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
            gsap.to(".refer__inner", {
                duration:2.5,
                x : 0,
                y : 0,
                opacity : 1,
                ease: "expo",
                delay : 2.5
            })
        }, 10)
    }
    getRefers = async () => {   //await, async 같이 써야함
        const {     //3
            data: {
                data: {htmlRefer},
            },
        } = await axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json");
        this.setState({ refers: htmlRefer, isLoading: false})
        this.mainAnimation();
    }
    
    componentDidMount(){        //2
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            this.getRefers()
        }, 2000);
    }
    render(){
        const {isLoading, refers} = this.state;
        console.log(refers)
        return (
            <>
            {isLoading ? (
                <Loading  />
            ) : (
                <>
                    <Header />
                    <Contents>
                        <Title title={["Reference","book"]} />
                            <section className="refer__cont">
                                <div className="container">
                                    <div className="refer__inner">
                                        <h2>CSS</h2>
                                        <ul className="refer__list">
                                            {refers.map((refer)=> (
                                                <ReFerCont
                                                    key={refer.id}
                                                    id={refer.id}
                                                    title={refer.title}
                                                    desc={refer.desc}
                                                    use={refer.use}

                                                    desc2={refer.desc2}
                                                    element={refer.element}
                                                    tag={refer.tag}
                                                    version={refer.version}
                                                    view={refer.view}
                                                    link={refer.link}
                                                    Definition={refer.Definition}
                                                    Accessibility={refer.Accessibility}
                                                    Related={refer.Related}
                                                    mdn={refer.mdn}
                                                    w3c={refer.w3c}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        <Contact />
                    </Contents>
                    <Footer />
                </>
            )}
        </>
        )
    }
}
export default Reference;