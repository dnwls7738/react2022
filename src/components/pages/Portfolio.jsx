import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import PortCont from '../includes/PortCont';
import Title from '../layout/Title';
import Contact from '../layout/Contact';

function Portfolio(){
    return (
        <>
            <Header />
            <Contents>
                <Title title = {["portolio", "site"]}/>
                <PortCont />
                <Contact />
            </Contents>
            <Footer />
        </>
    )
}

export default Portfolio;