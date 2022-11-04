import React, {useState, useEffect, Fragment} from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import {useSections} from "../hoocks/useSections";
import Hero from "../components/Hero";
// import Wallet from "../components/Wallet";
// import Roadmap from "../components/Roadmap";
// import Video from "../components/Video";
// import Mission from "../components/Mission";
// import Products from "../components/Products";
// import Team from "../components/Team";

function App() {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        console.log("mounted");
        setSections(useSections)
        window.scrollTo(0, 0)
    }, [])

    return (
        <ErrorBoundary>
            <NavBar/>
            <Hero/>
            {sections.map((section, i) => (
                <Section
                    title={ section.title }
                    quotes={ section.quotes }
                    imgName={ section.imgName }
                    qoutesPalleteIds={ section.qoutesPalleteIds }
                    key={ i }
                >
                    { section.body }
                </Section>
            ))}
            <Footer/>
        </ErrorBoundary>
    )
}

export default App
