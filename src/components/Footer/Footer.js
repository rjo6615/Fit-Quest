import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='bg-image text-center text-lg-start text-muted'  style={{
      backgroundImage: 'url(./images/black_paper.webp)'}}>
      <section className='d-flex justify-content-center p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='#/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='#/' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='#/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='#/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='#/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='#/' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
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
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>fdsafda</h6>
              <p>
                <a href='#!' className='text-reset'>
                  fdsafd
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  fdsfda
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 fdsafdas
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                fdsafda
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  fdsafdas
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    fdsaf
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    fdsaf
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                    fdsafs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                fdsfdasf
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
               fdsafdafdaf
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> fdsafdsfdsf
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://github.com/rjo6615'>
        fdsfdsf
        </a>
      </div>
    </MDBFooter>
  );
}