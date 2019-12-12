import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


const SubscribeForm = ()=>{
    return(
        <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
              <div className="grey-text">
                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
              </div>
              <div className="text-center">
                <MDBBtn outline color="primary">
                  Subscribe <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    )


}


export default SubscribeForm

