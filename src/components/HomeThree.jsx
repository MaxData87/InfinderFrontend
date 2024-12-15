import React from 'react'
import styled from 'styled-components'
import png1 from '../assets/images/png4.png'
import png2 from '../assets/images/png5.png'
import png3 from '../assets/images/png6.png'

const HomeThree = () => {
    return (
        <HomeHeroOne>
            <div className='mainOne'>
                <span className='head'>Why Choose Infinder?</span>
                <span className='desc'>At Infinder, we believe healthcare is about more than
                    just connecting patients to doctors; it’s about creating lasting
                    relationships and empowering providers to deliver their best care. By
                    joining Infinder, you're not just gaining visibility—you’re becoming part
                    of a trusted network built on transparency, convenience, and personalized
                    care.
                </span>
                <div className='row'>
                    <div className='rowBox'>
                        <img src={png1} className='icon' />
                        <span className='titleTxt'>Expand Your Reach</span>
                        <span className='descBox'>Infinder helps your hospital or lab get
                            discovered by more patients actively looking for trusted care,
                            expanding your practice’s reach and reputation.
                        </span>
                    </div>
                    <div className='rowBox'>
                        <img src={png2} className='icon' />
                        <span className='titleTxt'>Streamline Your Operations</span>
                        <span className='descBox'>Manage patient appointments, test bookings,
                            and follow-ups effortlessly with our easy-to-use platform—saving you
                            time and reducing administrative headaches.
                        </span>
                    </div>
                    <div className='rowBox'>
                        <img src={png3} className='icon' />
                        <span className='titleTxt'>Enhance Patient Trust</span>
                        <span className='descBox'>Infinder isn’t just a marketplace. It’s a
                            platform that builds long-term relationships by providing patients
                            with reliable, transparent healthcare options.
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
    padding: 5rem 15rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) { /* Tablets */
        padding: 2rem 5rem;
    }

    @media (max-width: 480px) { /* Phones */
        padding: 1.5rem 2rem;
    }
}

.head {
    font-family: "DM Serif Text", serif;
    font-size: 32px;
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
        font-size: 16px;
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

export default HomeThree
