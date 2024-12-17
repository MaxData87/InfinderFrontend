// Modal.js
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/images/infinder.png";
import Avatar from "../assets/images/AvatarCrop.png";
import { FaUser, FaEnvelope } from "react-icons/fa"; // Icons for name and email
import axios from "axios"; // Import axios for API requests

const FormodalOne = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        businessEmail: "",
        clinicName: "",
    });
    const [isChecked, setIsChecked] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    if (!isOpen) return null;

    const resetForm = () => {
        setFormData({
            name: "",
            businessEmail: "",
            clinicName: "",
        });
        setIsChecked(false);
        setMessage(""); // Clear any submission message
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleClose = () => {
        resetForm(); // Reset the form
        onClose();   // Close the modal
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage("");

        try {
            const response = await axios.post(
                "https://api.infinder.in/new-feedback/mainpage",
                formData
            );
            if (response.data.success) {
                setMessage("Thank you! Your data has been submitted.");
            } else {
                setMessage("Failed to submit the data. Please try again.");
            }
        } catch (error) {
            setMessage("An error occurred while submitting the form.");
            console.error("API error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <button className="closeButton" onClick={handleClose}>
                    &times;
                </button>
                <img src={logo} alt="Logo" className="infinderLogo" />
                <div className="headBox">
                    <span className="heading">Get your free landing page audit now</span>
                    <img src={Avatar} alt="Avatar" className="AvatarPng" />
                </div>
                <span className="desc">
                    Send me your email and landing page URL and I will review it - no
                    strings attached.
                </span>
                <form className="form" onSubmit={handleSubmit} method="post" action="#">
                    <div className="inputGroup">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <FaUser className="inputIcon" />
                    </div>
                    <div className="inputGroup">
                        <input
                            type="email"
                            id="businessEmail"
                            name="businessEmail"
                            required
                            placeholder="Enter your email"
                            value={formData.businessEmail}
                            onChange={handleInputChange}
                        />
                        <FaEnvelope className="inputIcon" />
                    </div>
                    <div className="inputGroup">
                        <input
                            type="text"
                            id="clinicName"
                            name="clinicName"
                            required
                            placeholder="Enter Lab/Hospital Name"
                            value={formData.clinicName}
                            onChange={handleInputChange}
                        />
                        <FaUser className="inputIcon" />
                    </div>
                    <div className="checkboxContainer">
                        <input
                            type="checkbox"
                            id="marketing-consent"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <label className="marketing-consent">
                            I allow Infinder to send me marketing emails and store my
                            personal data.
                        </label>
                    </div>
                    <button className="submit" type="submit" disabled={!isChecked || isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Get my free audit"}
                    </button>
                    {message && <p className="message">{message}</p>}
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
    width: 90%; /* Default width for smaller screens */
    max-width: 440px; /* Max width for larger screens */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    /* Logo and Avatar */
    .infinderLogo {
        height: auto;
        width: 8rem; /* Adjusted for responsiveness */
        margin: 0 auto;
    }

    .headBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        .heading {
            font-family: "DM Serif Text", serif;
            font-size: 28px; /* Smaller heading on mobile */
            color: #2C3146;
            text-align: center;
        }

        .AvatarPng {
            width: 8rem;
            height: auto;
        }
    }

    /* Description */
    .desc {
        font-family: "DM Sans", sans-serif;
        font-size: 14px;
        color: #2C3146;
        text-align: center;
    }

    /* Form Styling */
    .form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .inputGroup {
            position: relative;

            input {
                width: 100%;
                padding: 0.8rem;
                padding-left: 2.5rem;
                font-size: 14px;
                border: 1px solid #ccc;
                border-radius: 4px;
                outline: none;
                background-color: #f0f0f0;
            }

            .inputIcon {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                color: #2C3146;
            }
        }
    }

    /* Checkbox Container */
    .checkboxContainer {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 14px;
        color: #2C3146;
    }

    /* Submit Button */
    .submit {
        font-family: "DM Sans", sans-serif;
        font-size: 16px;
        background-color: #007bff;
        color: white;
        padding: 0.75rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
            color: black;
        }
    }

    /* Close Button */
    .closeButton {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 24px;
        color: #333;
        cursor: pointer;
        &:hover {
            color: #f44336;
        }
    }

    /* Responsive Design */
    @media (min-width: 768px) {
        width: 70%; /* Adjust modal width for tablets */
        .headBox .heading {
            font-size: 32px; /* Larger heading */
        }
        .desc {
            font-size: 16px;
        }
    }

    @media (min-width: 1024px) {
        width: 440px; /* Standard desktop modal width */
        .headBox .heading {
            font-size: 36px;
        }
        .desc {
            font-size: 16px;
        }
    }
`;



export default FormodalOne;
