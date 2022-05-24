import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = (props) => {
    return (
        <>
            <Navbar />
            <main>
                <section class="about">
                    <div class="page-info">
                        <h1 class="title">About <span>Me</span></h1>
                        <div class="underline"></div>
                    </div>
                </section>

                <section className="certifications">
                    
                </section>
            </main>
            <Footer />
        </>
    );
};

export default About;
