import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import skill1 from "../assets/images/skill1.svg";
import skill2 from "../assets/images/skill2.svg";
import skill3 from "../assets/images/bootstrap-svgrepo-com.svg";
import skill4 from "../assets/images/skill4.svg";
import cert from "../assets/images/spacialCert.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../css/skills.css";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {

          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
       
    return (
        <section className="skills" id='skills'>
            <Container>      
                <Row className="align-items-center">
                    <Col> 
                        <div className="skill-bx">
                            <h2 className="mainHeader">Skills and Certifications </h2>
                            <p>
                            I have a strong proficiency in C++, JavaScript, React, HTML, CSS, and Bootstrap. 
                            I bring a blend of technical expertise and exceptional customer service, with a confident, clear communication style that helps bridge the gap between code and team needs. 
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider" >
                                <div className="item" >
                                    <img src={skill1} alt="skillimg" />
                                    <h3>JavaScript</h3>
                                </div>
                                <div className="item" >
                                    <img src={skill2} alt="skillimg" />
                                    <h3>React</h3>
                                </div>
                                <div className="item" >
                                    <img src={skill3} alt="skillimg" />
                                    <h3>BootStrap</h3>
                                </div>
                                <div className="item" >
                                    <img src={cert} alt="skillimg" />
                                    <h3>Spatial Computing Certification</h3>
                                </div>
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
}
