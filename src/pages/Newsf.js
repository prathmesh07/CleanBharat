import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


export default function Newsf() {
    return (
        <div className="vii">
            <Header />
            <br /><br /><br /><br />
            <MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form action="https://formspree.io/f/moqpjbrz"
  method="POST"   enctype="multipart/form-data">
        <h4 className="h4 text-center mb-4">Write to us</h4>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Your name
        </label>
        <input type="text" name="name" id="defaultFormContactNameEx" className="form-control" required />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text" required>
          Your email
        </label>
        <input type="email" name="_replyto" id="defaultFormContactEmailEx" className="form-control"  required/>
        <br />
        <div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroupFileAddon01">
      Upload
    </span>
  </div>
  <div className="custom-file">
    <input
      type="file"
      className="custom-file-input"
      id="inputGroupFile01"
      aria-describedby="inputGroupFileAddon01"
      name="attachment" accept="image/png, image/jpeg"
      required
    />
    <label className="custom-file-label" htmlFor="inputGroupFile01">
      Choose file
    </label>
  </div>
</div>
<br />
       
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Your message 
        </label>
        <textarea type="text" name="message" id="defaultFormContactMessageEx" className="form-control" rows="3" required />
        <div className="text-center mt-4">
                  
                  <MDBBtn  type="submit"  value="Send" color="success">Send</MDBBtn>
                   
                   
                 
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <br /><br />
        <Footer />
        </div>
    )
}
