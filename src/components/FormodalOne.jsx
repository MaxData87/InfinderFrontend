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
                {/* <img src={logo} alt="Logo" className="infinderLogo" /> */}
                <div className="headBox">
                    <span className="headtxt">Join Us Today—Together, Let’s Transform Healthcare.</span>
                    <img src={Avatar} alt="Avatar" className="AvatarPng" />
                </div>
                <span className="descForm1">
                    Help us improve! Share your hospital details and participate in our
                    survey to optimize healthcare services.
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
    padding: 1.5rem;
    border-radius: 8px;
    width: 95%; /* Better for mobile */
    max-width: 440px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .infinderLogo {
        height: auto;
        width: 6rem; /* Responsive logo */
        margin: 0 auto 0.5rem auto;
    }

    .headBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0.5rem;

        .headtxt {
            font-family: "DM Serif Text", serif;
            font-size: 22px; /* Adjusted for phones */
            color: #2C3146;
            line-height: 1.3;
        }

        .AvatarPng {
            width: 8rem;
            height: auto;
        }
    }

    .descForm1 {
        font-family: "DM Sans", sans-serif;
        font-size: 12px;
        color: #2C3146;
        text-align: center;
        margin-bottom: 1rem;
        line-height: 1.4;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        .inputGroup {
            position: relative;

            input {
                width: 100%;
                padding: 0.75rem 0.5rem 0.75rem 2.5rem;
                font-size: 14px;
                border: none;
                border-bottom: 2px solid #ccc;
                outline: none;
                box-sizing: border-box; /* Prevents overflow */
            }

            .inputIcon {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                color: #000000;
            }
        }
    }

    .inputGroup input::placeholder {
    color: #000000; /* Replace with your desired color */
}

    .checkboxContainer {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 12px;
        color: #2C3146;
    }

    .submit {
        font-family: "DM Sans", sans-serif;
        font-size: 14px;
        background-color: #007bff;
        color: white;
        padding: 0.75rem;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.2s ease-in-out;

        &:hover {
            background-color: #0056b3;
        }

        &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
            color: black;
        }
    }

    .message {
        font-size: 12px;
        color: green;
        text-align: center;
    }

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

    @media (max-width: 768px) {
        padding: 1rem;
        width: 90%;

        .headBox .headtxt {
            font-size: 18px;
        }
        .headBox .AvatarPng {
            width: 4rem;
        }
        .infinderLogo {
            width: 5rem;
        }
        .desc {
            font-size: 11px;
        }
        .submit {
            font-size: 12px;
            padding: 0.6rem;
        }
    }
`;




export default FormodalOne;
