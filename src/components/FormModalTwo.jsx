// Modal.js
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/infinder.png'
import Avatar from '../assets/images/AvatarCrop.png'
import { FaUser, FaEnvelope } from 'react-icons/fa'; // Icons for name and email

const FormModalTwo = ({ isOpen, onClose }) => {
    const [isChecked, setIsChecked] = useState(false);

    if (!isOpen) return null;

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <button className="closeButton" onClick={onClose}>
                    &times;
                </button>
                <img src={logo} alt='Logo' className='infinderLogo' />
                <div className='headBox'>
                    <span className='heading'>Get your free landing page audit now</span>
                    <img src={Avatar} alt='Avatar' className='AvatarPng' />
                </div>
                <span className='desc'>Send me your email and landing page URL and I will review it - no strings attached.</span>
                <form className='form'>
                    <div className="inputGroup">
                        <input type="text" id="name" name="name" required placeholder="Enter your name" />
                        <FaUser className="inputIcon" />
                    </div>
                    <div className="inputGroup">
                        <input type="email" id="email" name="email" required placeholder="Enter your email" />
                        <FaEnvelope className="inputIcon" />
                    </div>
                    <div className="checkboxContainer">
                        <input type="checkbox" id="marketing-consent" checked={isChecked} onChange={handleCheckboxChange} />
                        <label className="marketing-consent">
                            I allow ConversionLab to send me marketing emails and store my personal data.
                        </label>
                    </div>
                    <button className='submit' type="submit" disabled={!isChecked}>Get my free audit</button>
                </form>
            </ModalContent>
        </ModalOverlay>
    );
};

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    width: 440px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    position: relative; /* Ensure child elements are positioned relative to this */
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .infinderLogo {
        height: auto;
        width: 10rem;
    }

    .headBox {
        display: flex;
        align-items: center;
    }

    .heading {
        font-family: "DM Serif Text", serif;
        font-size: 36px;
        color: #2C3146;
    }

    .AvatarPng {
        height: auto;
        width: 10rem;
    }

    .desc {
        font-family: "DM Sans", sans-serif;
        font-size: 16px;
        color: #2C3146;
    }

    .form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        button {
            font-family: "DM Sans", sans-serif;
            font-size: 14px;
            background-color: #007bff;
            color: white;
            padding: 0.5rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            &:disabled {
                background-color: #ccc;
                cursor: not-allowed;
                color: black;
            }
        }
    }

    .inputGroup {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;

        input {
            width: 100%;
            padding: 0.8rem;
            font-size: 14px;
            border: none;
            border-radius: 4px;
            padding-left: 2.5rem;
            box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 0.8),
                inset 2px 2px 5px rgba(0, 0, 0, 0.1);
            background-color: #f0f0f0;
            outline: none;
            transition: box-shadow 0.3s ease;
        }

        .inputIcon {
            position: absolute;
            left: 10px;
            color: #2C3146;
            font-size: 16px;
            pointer-events: none;
        }

        input:focus {
            box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 0.8),
                inset 2px 2px 5px rgba(0, 0, 0, 0.15);
        }

        input::placeholder {
            font-family: "DM Sans", sans-serif;
            color: #2C3146;
            font-size: 14px;
            padding-left: 0.5rem;
        }
    }

    .checkboxContainer {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .closeButton {
        position: absolute; /* Relative to the modal content */
        top: 0px; /* Adjust as needed */
        right: 10px; /* Adjust as needed */
        background: none;
        border: none;
        font-size: 24px;
        color: #333;
        cursor: pointer;
        transition: color 0.3s ease;
    }

    .marketing-consent{
        font-family: "DM Sans", sans-serif;
        color: #2C3146;
        font-size: 14px;
    }

    .closeButton:hover {
        color: #f44336;
    }
`;


export default FormModalTwo;
