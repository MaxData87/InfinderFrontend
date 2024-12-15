import React from 'react'
import styled from 'styled-components'
import png1 from '../assets/images/png10.png'
import png2 from '../assets/images/png11.png'
import png3 from '../assets/images/png12.png'

const HomeFive = () => {
    return (
        <HomeHeroOne>
            <div className='mainOne'>
                <span className='head'>How it works</span>
                <div className='imgLine'>
                    <img src={png1} className='iconWithLine' />
                    <span className='line'></span>
                    <img src={png2} className='iconWithLine' />
                    <span className='line'></span>
                    <img src={png3} className='iconWithLine' />
                </div>
                <div className='row'>
                    <div className='rowBox'>
                        <img src={png1} className='iconSingle' />
                        <span className='titleTxt'>Improve Accessibility</span>
                        <span className='descBox'>Empower patients with easy access to trusted hospitals, labs,
                            and healthcare services, all from one platform.
                        </span>
                    </div>
                    <div className='rowBox'>
                        <img src={png2} className='iconSingle' />
                        <span className='titleTxt'>Reduce Healthcare Costs</span>
                        <span className='descBox'>Connect directly with affordable healthcare providers, labs,
                            and suppliers to eliminate unnecessary middlemen.
                        </span>
                    </div>
                    <div className='rowBox'>
                        <img src={png3} className='iconSingle' />
                        <span className='titleTxt'>Build Stronger Healthcare Relationships</span>
                        <span className='descBox'>Create long-term trust between patients and healthcare providers
                            through personalized and seamless experiences.
                        </span>
                    </div>
                </div>
            </div>
        </HomeHeroOne>
    )
}

const HomeHeroOne = styled.div`
background-color: #FDF2E4;

.mainOne {
    padding: 5rem 10rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 1024px) { /* Laptops */
        padding: 2rem 7rem;
    }

    @media (max-width: 768px) { /* Tablets */
        padding: 2rem 4rem;
    }

    @media (max-width: 480px) { /* Phones */
        padding: 2rem 2rem;
    }
}

.head {
    font-family: "DM Serif Text", serif;
    font-size: 32px;
    display: block;
    color: #2C3146;
    text-align: center;

    @media (max-width: 768px) { /* Tablets */
        font-size: 28px;
    }

    @media (max-width: 480px) { /* Phones */
        font-size: 24px;
    }
}

.imgLine {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 480px) { /* Phones */
        display: none; /* Hide imgLine for phone sizes */
    }
}

.line {
    background-color: #003F5C;
    height: 1.5px;
    width: 35%;

    @media (max-width: 768px) { /* Tablets */
        width: 35%;
    }

    @media (max-width: 480px) { /* Phones */
        width: 50%;
    }
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 3%;

    @media (max-width: 768px) { /* Tablets */
        flex-wrap: wrap;
        gap: 1rem;
    }

    @media (max-width: 480px) { /* Phones */
        flex-direction: column;
        gap: 2rem;
    }
}

.rowBox {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    max-width: 20%;

    @media (max-width: 768px) { /* Tablets */
        max-width: 30%;
    }

    @media (max-width: 480px) { /* Phones */
        text-align: center;
        align-items: center;
        max-width: 100%;
    }
}

.iconWithLine {
    display: none; /* Hide on phones by default */

    @media (min-width: 768px) { /* Tablets and larger */
        display: block; /* Show on tablets and desktops */
        height: auto;
        width: 2rem;
    }
}

.iconSingle {
    display: none; /* Hide on tablets and desktops by default */

    @media (max-width: 768px) { /* Phones only */
        display: block; /* Show on phones */
        height: auto;
        width: 2rem;
    }
}

.titleTxt {
    font-family: "DM Serif Text", serif;
    font-size: 16px;
    color: #2C3146;

    @media (max-width: 768px) { /* Tablets */
        font-size: 15px;
    }

    @media (max-width: 480px) { /* Phones */
        font-size: 14px;
    }
}

.descBox {
    font-family: "DM Sans", sans-serif;
    font-size: 14px;
    color: #2C3146;
    line-height: 1.5;

    @media (max-width: 768px) { /* Tablets */
        font-size: 13px;
    }

    @media (max-width: 480px) { /* Phones */
        font-size: 12px;
        text-align: center;
    }
}
`

export default HomeFive;


