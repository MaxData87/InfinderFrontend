import React from 'react'
import styled from 'styled-components'
import png1 from '../assets/images/png7.png'
import png2 from '../assets/images/png8.png'
import png3 from '../assets/images/png9.png'

const HomeFour = () => {
    return (
        <HomeHeroFour>
            <div className='mainOne'>
                <div className='Box'>
                    <img src={png1} className='img' />
                    <span className='title'>Simplifying Complex Connections</span>
                    <span className='desc'>Infinder completely changed the way we connect with hospitals.
                        Earlier, we spent weeks reaching out to the right buyers, but now we
                        get qualified leads from hospitals actively looking for our equipment.
                        It’s a game-changer for suppliers like us.
                    </span>
                    <div className='imgAnFont'>
                        <img src={png2} className='png' />
                        <span className='name'>- Priya Menon</span>
                    </div>
                </div>
                <div className='Box'>
                    <img src={png1} className='img' />
                    <span className='title'>Saving Time, Boosting Sales</span>
                    <span className='desc'>We’ve seen a 40% increase in inquiries from hospitals since joining
                        Infinder. The precision-matching feature has ensured that we’re only
                        reaching out to institutions that need our equipment. Our sales team
                        couldn’t be happier!
                    </span>
                    <div className='imgAnFont'>
                        <img src={png3} className='png' />
                        <span className='name'>- Ankit Sharma</span>
                    </div>
                </div>
            </div>
        </HomeHeroFour>
    )
}

const HomeHeroFour = styled.div`
background-color: #FFFFFF;

.mainOne {
    padding: 2rem 15rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 1024px) { /* Tablet */
        padding: 2rem 10rem;
    }

    @media (max-width: 768px) { /* Tablets */
        padding: 2rem 5rem;
        flex-direction: column;
        gap: 3rem;
    }

    @media (max-width: 480px) { /* Phones */
        padding: 1.5rem 2rem;
        gap: 2rem;
    }
}

.Box {
    background-color: #FDF2E4;
    display: flex;
    padding: 6rem;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 1024px) { /* Tablet */
        padding: 2rem;
    }

    @media (max-width: 768px) { /* Tablets */
        padding: 4rem;
    }

    @media (max-width: 480px) { /* Phones */
        padding: 2rem;
    }
}

.img {
    height: auto;
    width: 1rem;

    @media (max-width: 480px) { /* Phones */
        width: 1.5rem;
    }
}

.imgAnFont {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px) { /* Phones */
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
}

.png {
    height: auto;
    width: 5rem;

    @media (max-width: 480px) { /* Phones */
        width: 4rem;
    }
}

.title {
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #3A5070;

    @media (max-width: 768px) { /* Tablets */
        font-size: 16px;
    }

    @media (max-width: 480px) { /* Phones */
        font-size: 14px;
    }
}

.desc {
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    color: #3A5070;

    @media (max-width: 768px) { /* Tablets */
        font-size: 14px;
    }

    @media (max-width: 480px) { /* Phones */
        font-size: 13px;
    }
}

.name {
    font-family: "DM Sans", sans-serif;
    font-size: 14px;
    color: #3A5070;

    @media (max-width: 768px) { /* Tablets */
        font-size: 13px;
    }

    @media (max-width: 480px) { /* Phones */
        font-size: 12px;
    }
}
`

export default HomeFour
