import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = (props) => {
    return (
        <>
            <div className="hero">
                <Navbar />
                <section className="main">
                    <div className="profile">
                        <img src="./assets/image/my_image/img_6.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3>Hi, I am Suman</h3>
                        <span>Front-end Developer</span>
                        <p>creative and self-taught programmer I always look to learn  new skills technologies.</p>
                        <a href="/about" target="blank" className="btn">
                            About me
                        </a>
                    </div>
                </section>
            </div>
            <main>
                <section id="skill" className="skill">
                    <div className="page-info">
                        <h1 className="title">My Skills</h1>
                        <div className="underline">
                            <div className="underline-thick" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="skill-card">
                            <img src="./assets/image/skills/html.png" alt="" />
                        </div>
                        <div className="skill-card">
                            <img src="./assets/image/skills/css.png" alt="" />
                        </div>
                        <div className="skill-card">
                            <img src="./assets/image/skills/sass.png" alt="" />
                        </div>
                        <div className="skill-card">
                            <img src="./assets/image/skills/js.png" alt="" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
