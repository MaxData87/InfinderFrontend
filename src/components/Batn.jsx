import React from 'react';
import styled from 'styled-components';

const Batn = ({
    text = "Click Me",
    onClick,
    textColor = "#FFFFFF",
    textSize = "1rem",
    direction = "center",
    marginTop = "0rem"
}) => {
    return (
        <ButtonComp direction = {direction} marginTop = {marginTop}>
            <StyledButton
                onClick={onClick}
                textColor={textColor}
                textSize={textSize}
            >
                <span>{text}</span>
            </StyledButton>
        </ButtonComp>
    );
};

const ButtonComp = styled.div`
    display: flex;
    justify-content: ${({ direction }) => direction};
    align-items: center;
    width: 100%;
    margin-top: ${({ marginTop }) => marginTop};
`;

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #7357F6;
    border: none;
    border-radius: 35px;
    padding: 1rem 4rem;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(213, 169, 255, 0.5);
    }

    span {
        font-size: ${({ textSize }) => textSize};
        color: ${({ textColor }) => textColor};
        font-family: "DM Sans", sans-serif;
        font-weight: 600;
        letter-spacing: 1px;
    }

    /* Responsive Styles */
    @media (max-width: 1024px) {
        padding: 0.65rem 1.2rem;
        span {
            font-size: calc(${({ textSize }) => textSize} - 0.1rem);
        }
    }

    @media (max-width: 768px) {
        padding: 0.5rem 1rem;
        span {
            font-size: calc(${({ textSize }) => textSize} - 0.2rem);
        }
    }

    @media (max-width: 480px) {
        padding: 0.4rem 0.8rem;
        span {
            font-size: calc(${({ textSize }) => textSize} - 0.3rem);
        }
    }
`;

export default Batn;
