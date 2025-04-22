

import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import skill1 from "../assets/images/skill1.svg";
import skill2 from "../assets/images/skill2.svg";
import skill3 from "../assets/images/skill3.svg";
import "../css/skills.css";
 


export const Skills = () => {
    
    return (
        <section className="skills">
            <Container>
                <h1 className="mainHeader">Skills and Certifications </h1>
                <Row className="align-items-center">
                    <Col className="skills-intro" >
                        <p className="skills-intro-text">
                        I have a strong proficiency in C++, JavaScript, React, HTML, CSS, and Bootstrap. I bring a blend of technical expertise and exceptional customer service, with a confident, clear communication style that helps bridge the gap between code and client needs. 
                        </p>
                    </Col>
                </Row>
                <Row className = "skills-imgs">
                    <Col className="skills-img" >   
                        <img src={skill1} />
                        <h2>JavaScript</h2>
                    </Col>
                    <Col className="skills-img">
                        <img src={skill2} />
                        <h2>BootStrap</h2>
                    </Col>
                    <Col className="skills-img">
                        <img src={skill3} />
                        <h2>React</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}