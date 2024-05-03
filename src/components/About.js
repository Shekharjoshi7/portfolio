import React, { useEffect } from 'react'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

const About = () => {
    const Certificate = './IMG/CERTIFICATE.JPG'
    useEffect(() => {
        AOS.init({
            duration: "500",
            delay: "500"
        });
    }, []);
    return (

        <section id='About'>
            <div className="Box" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500">
                <div className="Container">
                    <div className=" SContainer ">
                        <div>
                            <h1 data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="500" className="Heading ">About me</h1>
                            <h2 className="SecondaryH"> Hey I Am <span>Shekhar</span></h2>
                            <p className="para AbPara"> I'm dedicated to staying up-to-date with the latest trends and best practices in web development, ensuring that the solutions I create are not only functional but also maintainable and scalable. Whether you're looking for a developer to enhance your existing project or start from scratch, I'm excited to collaborate and bring your ideas to life.Feel free to explore my portfolio to see some of my previous work, and don't hesitate to reach out if you have any questions or project inquiries. Let's work together to turn your web development goals into reality!"
                            </p>
                        </div>
                        <div className="SecondaryBox">
                            <div className="item">
                                <div className="detail">
                                    <h3>Birthday :-</h3><span className="text"> 19-05-2004</span>
                                </div>
                                <hr />
                                <div className="detail">
                                    <h3>Website :-</h3><span className="text"> https://shekharjoshi7.github.io/portfolio/</span>
                                </div>
                                <hr />
                                <div className="detail">
                                    <h3>Mail :- </h3><span className="text">shekharjoshi813@gmail.com</span>
                                </div>
                                <hr />
                              

                            </div>
                            <div className="item">
                                <div className="detail">
                                    <h3>Phone :- </h3><span className="text"> 8619035728</span>
                                </div>
                                <hr />
                                <div className="detail">
                                    <h3>City :- </h3><span className="text"> Udaipur</span>
                                </div>

                                <hr />
                                <div className="detail">
                                    <h3>Degree :- </h3><span className="text"> B.C.A. </span>
                                </div>
                                <hr />
                               

                            </div>
                            

                        </div>
                        <div className="About2">
                            <div className="boxes">
                                <h2 className="">High School</h2>
                                <div>

                                    <div className="School">
                                        <span>
                                            2019-2020
                                        </span>
                                        <h3>
                                        Guru Nanak Public Senior Secondary School, Udaipur
                                        </h3>
                                        <span>
                                        Percent 76.83
                                        </span>
                                    </div>
                                    <div className="School">
                                        <span>
                                            2021-2022
                                        </span>
                                        <h3>
                                        Guru Nanak Public Senior Secondary School, Udaipur
                                        </h3>
                                        <span>
                                            Percent 78.60
                                        </span>
                                    </div>
                                </div>
                                <h2 className="">Graduation</h2>
                                
                                <div className="School">
                                    <span>
                                        2022-Present
                                    </span>
                                    <h3>
                                        Mohanlal Sukhadia University, Udaipur
                                    </h3>
                                    <span>
                                        SGPA 8.69
                                    </span>
                                </div>
                                    <h2 className=""> Interests</h2>
                                <div className=" IntBox">
                                    <span className="Interest">
                                        Gaming
                                    </span>
                                    <span className="Interest">
                                        Volleyball
                                    </span>
                                </div>
                            </div>

                            <div className="boxes">
                                <h2 className=""> Certificate</h2>
                                <div>
                                    <div className="School certificate">
                                        <span>
                                            07/2022 - 08/2022
                                        </span>
                                        <h3>
                                           Internshala , Web Development Training
                                        </h3>

                                        <p className="para">
                                           Successfully completed a 8 weeks online certified training on Web Development. The training consisted of HTML, CSS,Bootstrap, DBMS, PHP, JS, React, and Final Project modules. I scored 100% in the final assessment and was a top performerin the training.
                                        </p>
                                        <img src={Certificate} alt="Certificate" />
                                    </div>

                                </div>
                                

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
