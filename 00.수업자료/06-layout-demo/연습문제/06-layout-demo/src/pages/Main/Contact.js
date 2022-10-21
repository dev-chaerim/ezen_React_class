import React from 'react';
import styled from 'styled-components';



const ContactContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;

    h1 {
    font-size: 30px;
}

    .contact_t {
        width: 900px;
        padding: 18px 0;
    }

    b {
        font-weight: bold;
        font-size: 18px;
        color:rgb(101, 150, 150)
    }

    .input_form{
        width: 880px;
        padding: 18px;
        margin-top: 10px;
        border-width: 0 0 1px 0;
        border-color: #d1d1d1;
    }

    .input_btn {
        padding: 15px 10px;
        margin: 20px 0;
        border-style: none;
        cursor: pointer;
    }

    .input_form::placeholder{
        opacity: 0.8;
    }

    .submit input[type="date"] {
        opacity: 0.6;
    }
`

const Contact = () => {
  return (
    <ContactContainer>
        <h1>Contact</h1>
            <br />
            <p className="contact_t">We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p className="contact_t"><b>Catering Service, 42nd Living St, 43043 New York, NY</b></p>
            <p className="contact_t">You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <form className="submit">
                <p><input className="input_form" type="text" placeholder="name" /></p>
                <p><input className="input_form" type="text" placeholder="How many people" /></p>
                <p><input className="input_form" type="date" /></p>
                <p><input className="input_form" type="text" placeholder="Message \ Special requirements" /></p>
                <p><input className="input_btn" type="submit" value="SEND MESSAGE" /></p>
            </form>
    </ContactContainer>
  );
}

export default Contact;