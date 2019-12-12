import React, { Component } from "react";
import { MDBTable, MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon, MDBTableBody } from "mdbreact";
import SubscribeForm from "../forms/subscribeform";
import ContactCard from "../generalcards/contactcard";
import { Config } from "../../config/Config";

class FooterPage extends Component {



    createMiddleColumn() {
        return (
            <>
                <h5 className="font-weight-bold">Opening Hours</h5>
                <MDBRow className="">
                    <MDBTable borderless className="white-text">
                        <MDBTableBody>
                            {Config.TIME_TABLE.map((item, key) => (
                                <tr key={key}>
                                    <td><strong> {item.day}</strong></td>
                                    <td>{item.time}</td>
                                </tr>
                            ))}
                        </MDBTableBody>
                    </MDBTable>
                </MDBRow>
            </>
        )
    }


    createMiddleSocilaMedial() {
        return (
            <MDBContainer>
                <h5 className="font-weight-bold">Follow Us </h5>
                <a href={Config.FACEBOOK_LINK} className="fb-ic mr-3">
                    <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#!" className="ins-ic mr-3">
                    <MDBIcon fab icon="instagram" />
                </a>
                <a href="#!" className="email-ic mr-3">
                    <MDBIcon icon="envelope" />
                </a>
            </MDBContainer>
        )
    }

    render() {
        return (
            <MDBFooter color="stylish-color-dark" className="font-small pt-5">
                <MDBContainer fluid>
                    <MDBRow className="p-md-3">
                        <MDBCol md="3" sm="12" className="text-md-left">
                        <h5 className="font-weight-bold">Contact Us </h5>
                           <ContactCard/>
                        </MDBCol>
                        <MDBCol md="3" sm="12" className="text-md-center">
                            {this.createMiddleSocilaMedial()}
                        </MDBCol>
                        <MDBCol md="3" sm="12" >
                            {this.createMiddleColumn()}
                        </MDBCol>
                        <MDBCol md="3" sm="12" >
                        <h5 className="font-weight-bold">Stay Updated</h5>
                            <SubscribeForm/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer>
                        &copy; {new Date().getFullYear()} Copyright: <a href="/"> {Config.COMPANY_NAME} </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        )
    }
}
export default FooterPage;