import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState,useEffect} from "react";
import logo from '../assets/images/logo.svg';
import linkedin from '../assets/images/linkedin.svg';
import insta from  '../assets/images/insta.svg';
import github from  '../assets/images/github.svg';
import '../css/navBar.css';



export const NavBar = () => {
    //this is a state handler 
    const [activeLink, setActiveLink]  = useState('home');
    const [scrolled, setScrolled] = useState(false);
  

    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 40){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return ()  => window.removeEventListener("scroll",onScroll);

    }, [])

    //update what link is active
    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    };

   


    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt='LogoHere' className='navbar-brand'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link':'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link':'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link':'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className='navbar-text'> 
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/branden-mitchell-2722a7306/' target='blank'> <img src={linkedin} alt='social' /> </a>
                        <a href='https://www.instagram.com/branden_mitchell_/' target='blank'> <img src={insta} alt='social' target='blank'/> </a>
                        <a href='https://github.com/BrandenMitchell'target='blank'> <img id='git' src={github} alt='social'/> </a>
                    </div>
                    <a href='#connect'>
                        <button className='lets-connect'><span>Lets Connect</span></button>

                    </a>
                </span>
                
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

