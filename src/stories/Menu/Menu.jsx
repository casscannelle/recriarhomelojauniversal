import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Menu() {
  return (
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Artistas</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  Billie Eilish
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Charlie Brown Jr
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Justin Bieber
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Katy Perry
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Vestuário</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  Boné
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Camiseta
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Moletom
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Meia
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Formatos</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  CD
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  DVD
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Vinil / LP
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Box
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Gênero Musical</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  MPB
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Pop
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Samba
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Sertanejo
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
}