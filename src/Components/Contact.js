import {useState} from "react";
import {Row,Col,Container} from "react-bootstrap";
import backround from "../assets/images/headerImg.svg"
import "../css/contact.css";




export const Contact = () =>{
    const formDetails = {
        fname : '',
        lname: '',
        phoneNo: '',
        email: '',
        message:'',

    }

    const [formDetail,setFormDetails] = useState(formDetails);
    //updates the button from send to sent or to sending etc
    const [buttonText, setButtonText] = useState('Send');

    const [status,setStatus] = useState({});

    const onFormUpdate = (category, value) =>{
        setFormDetails({
            ...formDetail, //this leaves prior details intact
            [category]: value, //only updates the target category
        })
    } 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers:{
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetail),
        });
        setButtonText('Send');
        let result = await response.json();
        setFormDetails(formDetails);
        if (result.code === 200){
            setStatus({success: true, message: "Message sent Successfully! "});
        }
        else{
            setStatus({success: false, message: "Failed to send Message, Please try Again Later. "});

        }
    }
    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">'
                    <Col md={6}>
                        <img src={backround} alt="Contact Me" />
                    </Col>
                    <Col>
                    <h2>
                        Lets Get in Touch
                    </h2>
                    <form onSubmit={handleSubmit}> 
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetail.fname} placeholder="First Name" onChange={(e) => onFormUpdate('fname',e.target.value)} />

                            </Col>
                            <Col sm={6} >
                                <input type="text" value={formDetail.lname} placeholder="Last Name" onChange={(e) => onFormUpdate('lname',e.target.value)} />

                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={formDetail.phoneNo} placeholder="Phone Number" onChange={(e) => onFormUpdate('phoneNo',e.target.value)} />

                            </Col>
                            <Col sm={6} >
                                <input type="email" value={formDetail.email} placeholder="Email" onChange={(e) => onFormUpdate('email',e.target.value)} />
                            </Col>
                            <Col>
                                <textarea rows={6} value={formDetail.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            <Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger": "success"}> {status.message} </p>
                                    </Col>
                                }
                            </Col>
                        </Row>
                    </form>

                    </Col>
                </Row>
            </Container>
        </section>


    )
}