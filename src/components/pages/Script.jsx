import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import Title from '../layout/Title';
import Contact from '../layout/Contact';
import ScriptCont from '../includes/ScriptCont';

function Script(){
    return (
        <>
            <Header />
            <Contents>
                <Title title={["SCRIPT","BOOK"]} />
                <ScriptCont />
                <Contact />
            </Contents>
        </>
    )
}

export default Script;