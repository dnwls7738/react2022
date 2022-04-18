import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import Title from '../layout/Title';
import Contact from '../layout/Contact';
import YouTubeCont from '../includes/YouTubeCont';


function Youtube(){
    return (
        <>
            <Header />
            <Contents>
                <Title title={["YouTube","BOOK"]} />
                <YouTubeCont />
                <Contact />
            </Contents>
        </>
    )
}

export default Youtube;