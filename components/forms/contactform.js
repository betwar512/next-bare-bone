import { Component } from "react";
import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
class ContactForm extends Component {



    render() {
        return (
 
                        <form>
                            <div className="grey-text">
                                <MDBInput
                                    label="Your name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                   <MDBInput
                                    label="Phone Number"
                                    icon="phone"
                                    group
                                    type="number"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    label="Subject"
                                    icon="tag"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    type="textarea"
                                    rows="2"
                                    label="Your message"
                                    icon="pencil-alt"
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn outline color="primary">
                                    Send The Enquiry<MDBIcon far icon="paper-plane" className="ml-1" />
                                </MDBBtn>
                            </div>
                        </form>
        );
    }

}

export default ContactForm