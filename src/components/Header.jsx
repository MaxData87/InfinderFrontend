import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/infinder.png'

const Header = () => {
  return (
    <HeadComp>
      <img src={logo} alt='Logo' className='infinderLogo'/>
    </HeadComp>
  )
}

const HeadComp = styled.div`
  padding: 2rem 15rem;

  @media (max-width: 1024px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    text-align: center;
  }

  .infinderLogo{
    height: auto;
    width: 10rem;
  }
`;

export default Header