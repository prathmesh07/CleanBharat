import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="bg txt font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
       
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
         <h5>&copy; {new Date().getFullYear()} Copyright: Team Digiton</h5> 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;