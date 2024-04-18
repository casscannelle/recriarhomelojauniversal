import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Button } from '../Button/Button';
import './Footer.css'

export default function Footer() {
  return (
    <MDBFooter className='text-left' color='white' bgColor='black'>
      <MDBContainer className='p-4'>
        

        <section className=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <img src="https://universalmusic.vtexassets.com/assets/vtex/assets-builder/universalmusic.store-theme/2.0.1/img/logo-footer___3fee49fb94ed8fbc52e9d76a2a6cde91.png"></img>
                </p>
              </MDBCol>
               </MDBRow>
        </section>
    
        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <Button primary="true" size="large" label="Área do revendedor"/> 
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='titulo'>Institucional</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Clube do Vinil
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Notícias
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='titulo'>Política comercial</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Formas de pagamento                  
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                Trocas e devoluções                  
                </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Termos de uso
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Polítiva de Privacidade
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='titulo'>Ajuda</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Sobre Cashback
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Fale Conosco
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Perguntas Frequentes
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Prazos e Entregas
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
        <section className='mb-4'>
        <h5 className='text-uppercase'>Siga nossas redes sociais</h5>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}