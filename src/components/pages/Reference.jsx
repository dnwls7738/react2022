import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Title from '../layout/Title';
import Contact from '../layout/Contact';
import ReFerCont from '../includes/ReFerCont';

function Reference(){
    return (
        <>
            <Header/>
            <Contents>
                <Title title={["REFERENCE","BOOK"]} />
                <ReFerCont />
                <Contact />
            </Contents>
        </>
    )
}

export default Reference;