import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Avatar from '../assets/images/Avatar.png'
import Batn from './Batn'
import FormodalOne from './FormodalOne'

const HomeOne = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 5000); // 5000ms = 5 seconds

        return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);

    return (
        <HomeHeroOne>
            <div className='mainOne'>
                <div>
                    <span className='head'>Partner with Infinder: Empower Your Healthcare Practice</span>
                    <span className='desc'>Connect with more patients, streamline operations,
                        and enhance your business—Infinder helps healthcare providers and equipment
                        suppliers grow together.</span>
                    <div className="buttonContainer">
                        <Batn
                            text='Join infinder today'
                            textSize='18px'
                            marginTop='6rem'
                            onClick={handleOpenModal}
                        />
                        <span className='shortTxt'>Sincere support, no hidden agenda.</span>
                    </div>
                </div>
                <img src={Avatar} alt='Doctor Avatar' className='Avatar' />
            </div>

            <FormodalOne isOpen={isModalOpen} onClose={handleCloseModal} />
        </HomeHeroOne>
    )
}

const HomeHeroOne = styled.div`
background-color: #EFF3FA;
.mainOne {
    padding: 2rem 15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    @media (max-width: 1024px) { /* Tablet */
        padding: 2rem 5rem;
        flex-direction: column;
        text-align: center;
    }

    @media (max-width: 768px) { /* Phone */
        padding: 1rem 2rem;
    }
}
.head {
    font-family: "DM Serif Text", serif;
    font-size: 36px;
    max-width: 40rem;
    display: block;
    color: #2C3146;

    @media (max-width: 768px) {
        font-size: 28px;
    }
    @media (max-width: 480px) {
        font-size: 22px;
    }
} 
.desc {
    margin-top: 1rem;
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    max-width: 40rem;
    display: block;
    line-height: 1.5rem;
    color: #2C3146;

    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 1.4rem;
    }
    @media (max-width: 480px) {
        font-size: 14px;
    }
}
.Avatar {
    height: auto;
    width: 22rem;

    @media (max-width: 1024px) { /* Tablet */
        width: 20rem;
    }
    @media (max-width: 768px) { /* Phone */
        width: 15rem;
    }
    @media (max-width: 480px) { /* Small Phone */
        width: 12rem;
    }
}
.buttonContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;

    @media (max-width: 768px) {
        margin-top: 1rem;
        width: auto;
    }
}
.shortTxt {
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    color: #4C4B5C;
    letter-spacing: 0.5px;
    text-align: center;
    margin-top: 0.5rem;
    width: 100%;

    @media (max-width: 480px) {
        font-size: 9px;
    }
}
`;


export default HomeOne