import React, { Component } from "react"
import { MDBIcon , MDBModal , MDBCloseIcon, MDBCard, MDBCardTitle, MDBCardBody, MDBRow, MDBCol} from "mdbreact";
import { Config } from "../config/Config";
import ContactForm from '../components/forms/contactform'

class ContactCard extends Component{

    state = {
        modal: false
      }
      
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

  render(){

    let addModal = this.props.addModal ? (<MDBModal isOpen={this.state.modal} size="lg" toggle={this.toggle} centered>
    <MDBCloseIcon onClick={this.toggle}  className="pull-right"/>
           <MDBCard className="p-4">
               <MDBCardTitle className="text-center">Write To Us</MDBCardTitle>        
                 <MDBCardBody>
               <ContactForm />     
               </MDBCardBody>  
               </MDBCard>
           </MDBModal>) : '';


    return(
        <>
        <p className="mb-1"><MDBIcon icon="clinic-medical" className="fa-2x mr-4  p-3  rounded-circle" />{Config.CONTACT_CARD.address}</p>
        <p className="mb-1"><MDBIcon icon="phone" className="fa-2x mr-4  p-3  rounded-circle" />{Config.CONTACT_CARD.phone}</p>
        <p className="mb-1"><a  href="#" onClick={this.props.addModal ? this.toggle : ()=>{}}><MDBIcon icon="envelope" className="fa-2x mr-4  p-3  rounded-circle" /> </a>{this.props.addModal ? 'Email Us' :Config.CONTACT_CARD.email}</p>
          {addModal}
    </>
    )
  }
}

export default ContactCard