import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./layout.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';
import profile from "../../assets/Images/profile.webp"


const Header = () => {
  return (
    <>
      <Navbar className='myHeader'>
        <Container >
          <div className='navContent' >
            <FontAwesomeIcon icon={faBell} className='notiIcon' />
            <div className='profileImg'>
              <Image src={profile} className='myImg' alt='profile' roundedCircle />
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header