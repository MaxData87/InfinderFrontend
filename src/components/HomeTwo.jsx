import React from 'react'
import styled from 'styled-components'
import png1 from '../assets/images/png1.png'
import png2 from '../assets/images/png2.png'
import png3 from '../assets/images/png3.png'

const HomeTwo = () => {
    return (
        <HomeHeroOne>
            <div className='mainOne'>
                <span className='head'>What is infinder?</span>
                <span className='desc'>Infinder is an innovative platform bridging
                    the gap between healthcare providers, patients, and suppliers. Whether
                    you're a heart patient looking for personalized care or a surgical
                    supplier seeking growth opportunities, Infinder is designed with you
                    in mind.
                </span>
                <div className='row'>
                    <div className='rowBox'>
                        <img src={png1} className='icon' />
                        <span className='titleTxt'>Improve Accessibility</span>
                        <span className='descBox'>Empower patients with easy access to trusted hospitals, labs,
                            and healthcare services, all from one platform.
                        </span>
                    </div>
                    <div className='rowBox'>
                        <img src={png2} className='icon' />
                        <span className='titleTxt'>Reduce Healthcare Costs</span>
                        <span className='descBox'>Connect directly with affordable healthcare providers, labs,
                            and suppliers to eliminate unnecessary middlemen.
                        </span>
                    </div>
                    <div className='rowBox'>
                        <img src={png3} className='icon' />
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
background-color: #FFFFFF;
.mainOne {
    padding: 5rem 15rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 1024px) { /* Tablet */
        padding: 2rem 10rem;
    }

    @media (max-width: 768px) { /* Tablets */
        padding: 2rem 5rem;
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

.desc {
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    color: #2C3146;
    text-align: center;

    @media (max-width: 768px) { /* Tablets */
        font-size: 14px;
    }

    @media (max-width: 480px) { /* Phones */
        font-size: 14px;
    }
}

.row {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    @media (max-width: 768px) { /* Tablets */
        flex-wrap: wrap;
        gap: 1rem;
    }

    @media (max-width: 480px) { /* Phones */
        flex-direction: column;
        gap: 1.5rem;
    }
}

.rowBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    // align-items: center;

    @media (max-width: 768px) { /* Tablet */
        text-align: center;
        align-items: center;
    }

    @media (max-width: 480px) { /* Phones */
        text-align: center;
        align-items: center;
    }
}

.icon {
    height: auto;
    width: 1.5rem;

    @media (max-width: 480px) { /* Phones */
        width: 2rem;
    }
}

.titleTxt {
    font-family: "DM Serif Text", serif;
    font-size: 18px;
    color: #2C3146;

    @media (max-width: 768px) { /* Tablets */
        font-size: 16px;
    }

    @media (max-width: 480px) { /* Phones */
        font-size: 14px;
    }
}

.descBox {
    font-family: "DM Sans", sans-serif;
    font-size: 14px;
    color: #2C3146;
    width: 90%;

    @media (max-width: 768px) { /* Tablets */
        font-size: 13px;
        width: 100%;
    }

    @media (max-width: 480px) { /* Phones */
        font-size: 12px;
    }
}
`

export default HomeTwo
