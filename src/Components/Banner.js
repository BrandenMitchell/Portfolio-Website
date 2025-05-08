import {useState, useEffect} from "react";
import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/images/headerImg2.svg"
import '../css/banner.css';


export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const toRotate = ["Web Developer", "Software Engineer", "UI/UX Designer"];
    const [text,setText] = useState('');
    const interval = 2300;
    const [delta,setDelta]= useState(300-Math.random()* 100);
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();

        }, delta)
        return () => {clearInterval(ticker)};
    },[text])


    const tick = () =>{
        let i  = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length -1 ) : fullText.substring(0,text.length + 1);

        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta /2);

        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(interval);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
        
    }






    return(
        <section className="banner" id="home"> 
            <Container>
                <Row className="align-items-center">
                    <Col xs = {12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Showcase</span>
                    <h1>{`I'm Branden Mitchell A `}<span className="wrap">{text}</span></h1>
                    <p> 
                    I’m a software engineer specializing in web development, driven by a passion for the artistic side of coding. I view software as a tool to build intuitive, engaging experiences using a strong foundation in web technologies.
                    </p>
                    <a href="#connect" className="connectbtn">
                        <button>Lets Connect <ArrowRightCircle size={25} /></button>
                    </a>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                    <img src={headerImg} className="header-img" alt="Header img " />                 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}