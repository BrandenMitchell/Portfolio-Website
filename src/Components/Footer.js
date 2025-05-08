import React from "react";
import {Row,Col,Container} from "react-bootstrap";
import logo from '../assets/images/logo.svg';
import '../css/footer.css';

export const Footer = () =>{
    
    
    return(
        <footer id="footer" className="footer">
            <Container>
                <Row className="main">
                    <Col className="aboutCol">
                        
                        {/* this will be the information Copyright Notice:
                        Include the copyright symbol (©), the year of creation or update, and the name of the copyright holder. 
                        
                        Privacy Policy:
                        A privacy policy outlines how you collect, use, and protect user data, particularly if you collect any information through contact forms or cookies. 
                        This builds trust with visitors and complies with relevant data protection laws.  and log */}
                         <h2 className="mainHeader">
                            Branden Mitchell
                        </h2>
                       
                        <p>
                         <b>About My Mission </b> <br />
                         As a software engineer, I strive to build work that my team and I can be proud of—projects that are creative, technically sound, and thoughtfully executed. I'm driven by the opportunity to bring ideas to life through clean, efficient solutions, and I’m always looking to connect with others who share a passion for meaningful impact in the tech world.</p>
                    </Col>
                    <Col className="contactCol">
                        {/* this will be contact info, back to top and socials again */}
                        <h2 className="mainHeader">
                            Contact Me
                        </h2>
                        <ul>
                            <li>
                                <a href="tel:+18167037995">+1 (816) 703-7995</a>
                            </li>
                            <li>
                                <a href="mailto:bmitchell325@icloud.com">Personal Email</a>
                            </li>
                            <li>
                                <a href="mailto:brandenm2004@gmail.com">Business Email</a>
                            </li>
                        </ul>
                        <div className="logo">
                            <a href="#home" className="logo">
                                <img src={logo} alt="logo image" />
                            </a>
                        </div>
                   </Col>
                   <Col className="privacyNotice">
                   <h2>Privacy Notice</h2>
                    <p>
                        This website is operated by Branden Mitchell. I respect your privacy and am committed to protecting any personal information you may provide.
                    </p>
                    
                    <h3>Information Collection</h3>
                    <p>
                        This site may collect basic contact information (such as your name and email address) if you choose to fill out a contact form. This information is used solely to respond to your inquiry.
                    </p>

                    <h3>Analytics</h3>
                    <p>
                        This site may use analytics tools (like Google Analytics) to understand how visitors interact with the site. These tools collect anonymous usage data (such as pages visited, device type, and general location).
                    </p>

                    <h3>Cookies</h3>
                    <p>
                        This site may use cookies to improve your browsing experience. You can choose to disable cookies in your browser settings.
                    </p>

                    <h3>Third-Party Sharing</h3>
                    <p>
                        I do not sell, trade, or otherwise transfer your personal information to outside parties.
                    </p>

                    <h3>Changes to This Notice</h3>
                    <p>
                        This privacy notice may be updated occasionally. Any changes will be posted on this page.
                    </p>

                    <p>
                        If you have any questions about this privacy notice, please <a href="mailto:bmitchell325@icloud.com">contact me</a>.
                    </p>
                   </Col>
                </Row>
                <Row className="copyright">
                    <h3>© 2025 Branden Mitchell. All Rights Reserved. </h3>
                </Row>
            </Container>
        </footer>
        
    
    
    );

}