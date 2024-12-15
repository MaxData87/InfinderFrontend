import React from 'react';
import styled from 'styled-components';
import Batn from './Batn';

const HomeSix = () => {
    return (
        <HomeHeroSix>
            <div className='mainOne'>
                <span className='head'>Ready to revolutionize healthcare accessibility?</span>
                <span className='desc'>Infinder is here to simplify patient care by connecting
                    hospitals, labs, and equipment suppliers seamlessly. Empower your healthcare
                    system to deliver better outcomes with less hassle.
                </span>
                <Batn 
                    marginTop='3rem'
                    text='Join the Waitlist Now'
                />
            </div>
        </HomeHeroSix>
    );
};

const HomeHeroSix = styled.div`
    background-color: #FFFFFF;

    .mainOne {
        padding: 5rem 15rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .head {
        font-family: "DM Serif Text", serif;
        font-size: 32px;
        display: block;
        color: #2C3146;
        text-align: center;
    }

    .desc {
        font-family: "DM Sans", sans-serif;
        font-size: 16px;
        color: #2C3146;
        text-align: center;
        width: 55%;
    }

    @media (max-width: 1024px) { /* Tablet */
        .mainOne {
            padding: 3rem 10rem;
        }

        .head {
            font-size: 28px;
        }

        .desc {
            font-size: 14px;
            width: 70%;
        }
    }

    @media (max-width: 768px) { /* Mobile */
        .mainOne {
            padding: 2rem 5rem;
        }

        .head {
            font-size: 24px;
        }

        .desc {
            font-size: 14px;
            width: 90%;
        }
    }

    @media (max-width: 480px) { /* Small Mobile */
        .mainOne {
            padding: 1rem 2rem;
        }

        .head {
            font-size: 20px;
        }

        .desc {
            font-size: 12px;
            width: 100%;
        }
    }
`;

export default HomeSix;