import React from "react";
import {Container,Row,Col, Tab} from "react-bootstrap";
import {ProjectCard} from "../Components/ProjectCard.js";
import skill1 from "../assets/images/skill1.svg";
import sospic from "../assets/images/sospic.jpg";
import symplcycle from "../assets/images/sympcyclepic.jpg";
import "../css/project.css";


export const Projects = () => {
    const projectDict = [
        {
            title: "Recipe Randomizer",
            description: "This is an application to allow people to get quick and easy recipes online for free",
            imgURL: skill1,
        },
        {
            title: "SOS Game",
            description: "Developed in C++ using the SFML Library I designed a more complex variation of Tic-Tac-Toe. This allowed me to work on state handling and OOP methodologies in a fun and performative manner.",
            imgURL: sospic,
        },
        {
            title: "Sympl Cycle",
            description: "SymplCycle is an app I developed using the Electron JS framework with the goal of helping women track and manager symptoms of their menstrual cycle. ",
            imgURL: symplcycle,
        }
    ];

    return (
        <section className="project">
            <Container>
                <Row> 
                    <Col size={12}>
                        <h2>Projects </h2>
                        <p> This is a short gallery to show off some of my project based works</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">                    
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projectDict.map((project,index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem</Tab.Pane>

                        </Tab.Content>
                        </Tab.Container>
                    </Col>

                </Row>
            </Container>
        </section>


    )
}