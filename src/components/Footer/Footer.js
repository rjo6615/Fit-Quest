import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='bg-image text-center text-lg-start text-muted'  style={{
      backgroundImage: 'url(./images/black_paper.webp)'}}>
      <section className='d-flex justify-content-center p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        </div>

        <div>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Fit Quest Company
              </h6>
              <p>
              Allow us to help you on your fitness journey by giving you workouts based on your goals. Sign up today free of charge to give it a try!
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon fab icon="github" className="me-2" />
                <a href= "https://github.com/rjo6615">rjo6615</a>
              </p>
              <p>
                <MDBIcon fab icon="github" className="me-2" />
                <a href= "https://github.com/johnboy514">johnboy514</a>
              </p>
              <p>
                <MDBIcon fab icon="github" className="me-2" /> 
                <a href= "https://github.com/rjo6615/Fit-Quest">Fit Quest</a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://github.com/rjo6615'>
        If u steal code from this and don't credit us I'll ugly cry :C
        </a>
      </div>
    </MDBFooter>
  );
}