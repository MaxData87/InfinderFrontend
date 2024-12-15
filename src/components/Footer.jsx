import React from 'react'
import styled from 'styled-components'
import icon1 from '../assets/images/instagram.png'
import icon2 from '../assets/images/facebook.png'
import icon3 from '../assets/images/youtube.png'

const Footer = () => {
  return (
    <FootComp>
      <div className='mainOne'>
        <div className='footerMenuBox'>
          <div className='footerMenuList'>
            <span className='footerLink'>About Us</span>
            <span className='footerLink'>Services</span>
            <span className='footerLink'>Contact Us</span>
            <span className='footerLink'>FAQs</span>
            <span className='footerLink'>Privacy Policy</span>
          </div>
          <span className='reserveTxt'>© 2024 Infinder. All Rights Reserved.</span>
        </div>
        <div className='boxOne'>
          <div className='boxTwo'>
            <div className='boxThree'>
              <span className='title'>“Join Us Today—Together, Let’s Transform Healthcare.”</span>
              <div className='contactBox'>
                <span className='contact'>Email: support@infinder.com</span>
                <span className='contact'>Phone: +91-98765-43210</span>
                <span className='contact'>Address: Infinder HQ, 123 Healthcare Street, New Delhi, India.</span>
              </div>
            </div>
            <div className='iconBox'>
              <img src={icon1} className='icon'/>
              <img src={icon2} className='icon'/>
              <img src={icon3} className='icon'/>
            </div>
          </div>
          <span className='footerLogo'>Infinder</span>
        </div>
      </div>
    </FootComp>
  )
}

const FootComp = styled.div`
  background-color: #FDF2E4;
  padding: 2rem 15rem;

  .mainOne {
    display: flex;
    justify-content: space-between;
  }

  .footerMenuBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 6;
    gap: 1.5rem;
  }

  .footerMenuList {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .reserveTxt {
    font-family: "DM Sans", sans-serif;
    font-size: 10px;
    color: #003F5C;
    letter-spacing: 2px;
  }

  .boxOne {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 2;
  }

  .boxTwo {
    display: flex;
    justify-content: space-between;
  }

  .boxThree {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contactBox {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .contact {
    font-family: "DM Sans", sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: #3A5070;
    max-width: 25rem;
    display: block;
  }

  .iconBox {
    display: flex;
    flex-direction: column;
  }

  .icon {
    height: auto;
    width: 2rem;
  }

  .footerLink {
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: #3A5070;
  }

  .title {
    font-family: "DM Serif Text", serif;
    font-size: 20px;
    color: #003F5C;
  }

  .footerLogo {
    font-family: "DM Serif Text", serif;
    font-size: 32px;
    color: #003F5C;
    text-align: right;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    padding: 2rem 5rem;

    .mainOne {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .boxTwo {
      flex-direction: column;
      gap: 1.5rem;
      text-align: center;
    }

    .footerLogo {
      text-align: center;
    }

    .contactBox {
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;

    .footerMenuBox {
      align-items: center;
      text-align: center;
    }

    .footerMenuList {
      gap: 1rem;
    }

    .reserveTxt {
      font-size: 9px;
    }

    .contact {
      font-size: 14px;
    }

    .title {
      font-size: 18px;
    }

    .footerLogo {
      font-size: 28px;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    .footerLink {
      font-size: 10px;
    }

    .contact {
      font-size: 12px;
    }

    .title {
      font-size: 16px;
    }

    .footerLogo {
      font-size: 24px;
    }

    .icon {
      width: 1.5rem;
    }
  }
`;

export default Footer