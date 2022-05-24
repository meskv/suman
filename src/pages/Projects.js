import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="project">
                    <div className="page-info">
                        <h1 className="title">My <span>Projects</span></h1>
                        <div className="underline" />
                    </div>
                </section>

                <div className="wrapper">
                    {/* Project */}
                    <div className="project-wrapper">
                        <div className="project-image item">
                            <img src="../assets/image/project/air.jpg" alt="" />
                            <div className="image" />
                        </div>
                        <div className="project-info item">
                            <div className="project-title title">
                                <h3>AIR club Website</h3>
                            </div>
                            <div className="project-desc">
                                <p>This is a multi-page responsive website made by using HTML, SCSS,</p>
                            </div>
                            <a href="https://ai-robotics.netlify.app/" target="blank" className="btn">Website Link</a>
                        </div>
                    </div>
                    <div className="project-wrapper">
                        <div className="project-image item">
                            <img src="../assets/image/project/numberGame.jpg" alt="" />
                            <div className="image" />
                        </div>
                        <div className="project-info item">
                            <div className="project-title title">
                                <h3>Random Number Game</h3>
                            </div>
                            <div className="project-desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam nostrum architecto.
                                    Praesentium esse saepe eum quidem ut cumque alias officia similique quo, eos sit. Hic cum
                                    adipisci fugit sunt.</p>
                            </div>
                            <a href="../projects/NumberGame/index.html" className="btn">Project Link</a>
                        </div>
                        <div className="project-wrapper">
                            <div className="project-image item">
                                <img src="../assets/image/project/ColorPalleteGenerator.jpg" alt="" />
                                <div className="image" />
                            </div>
                            <div className="project-info item">
                                <div className="project-title title">
                                    <h3>Color Pallete Generator</h3>
                                </div>
                                <div className="project-desc">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam nostrum architecto.
                                        Praesentium esse saepe eum quidem ut cumque alias officia similique quo, eos sit. Hic cum
                                        adipisci fugit sunt.</p>
                                </div>
                                <a href="../projects/ColorPalleteGenerator/index.html" className="btn">Project Link</a>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
};

export default Projects;
