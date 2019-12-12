import React, { Component } from "react";
import { MDBTable, MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon, MDBTableBody } from "mdbreact";
import SubscribeForm from "../forms/subscribeform";
import ContactCard from "../generalcards/contactcard";
import { Config } from "../../config/Config";

class FooterPage extends Component {



    createMiddleColumn() {
        return (
            <div className="pb-5">
                  <style jsx>{`
                   td.nopad{
                      padding-left :0px !important;
                      padding-right:0px !important;
                      font-size:0.9em;
                  }
                  `
                } 
                </style>
                <h5 className="font-weight-bold pb-3 pl-2">Opening Hours</h5>
                <MDBRow className="">
                    <MDBCol size="12">
                    <MDBTable borderless className="white-text">
                        <MDBTableBody>
                            {Config.TIME_TABLE.map((item, key) => (
                                <tr key={key}>
                                    <td className="nopad"><strong> {item.day}</strong></td>
                                    <td className="nopad">{item.time}</td>
                                </tr>
                            ))}
                        </MDBTableBody>
                    </MDBTable>
                    </MDBCol>
                </MDBRow>
            </div>
        )
    }


    createMiddleSocilaMedial() {
        return (
            <MDBContainer className="pb-5">
                <h5 className="font-weight-bold pb-5">Follow Us </h5>
                <ul className="list-unstyled">
               <li className="pl-5 pr-5 pb-5">
                <a href={Config.FACEBOOK_LINK} className="mr-3">
                    <MDBIcon fab icon="facebook-f fa-3x"/>
                </a>
                </li>
                <li className="pl-5 pr-5"> 
                <a href="#!" className="mr-3">
                    <MDBIcon fab icon="instagram fa-3x" />
                </a>
                </li>
                <li className="pl-5 pr-5 pt-5">
                <a href="#!" className="mr-3">
                    <MDBIcon icon="envelope fa-3x" />
                </a>
                </li>
                </ul>
            </MDBContainer>
        )
    }

    render() {
        return (

            <MDBFooter color="stylish-color-dark" className="font-small pt-5">
        
    
                <MDBContainer fluid>
                    <MDBRow className="p-md-3">
                        <MDBCol md="3" sm="12" className="text-md-left pb-3">
                        <h5 className="font-weight-bold pb-4">Contact Us </h5>
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