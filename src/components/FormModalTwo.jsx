import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/AvatarCrop.png'

const FormModalTwo = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    businessEmail: '',
    mobileNo: '',
    clinicName: '',
    website: '',
    printing_materials: [],
    query: '',
    isNewsletter: false,
  });
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    mobileNo: '',
  });

  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;
    if (type === 'select-multiple') {
      const selectedValues = Array.from(selectedOptions, option => option.value);
      setFormData({ ...formData, [name]: selectedValues });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === 'mobileNumber') {
      setErrors({ ...errors, mobileNo: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate mobile number
    if (!formData.mobileNo) {
      newErrors.mobileNo = 'Mobile number is required';
    } else if (!mobileRegex.test(formData.mobileNo)) {
      newErrors.mobileNo = 'Please enter a valid mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const mobileRegex = /^[6-9][0-9]{9}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    if (validateForm()) {
      // Proceed with form submission logic
      if (!formData.isNewsletter) {
        alert("Please agree to the newsletter to submit the form.");
        return;
      }

      const postData = {
        name: formData.name,
        businessEmail: formData.businessEmail,
        mobileNo: formData.mobileNo,
        website: formData.website,
        clinicName: formData.clinicName,
        printing_materials: formData.printing_materials,
        query: formData.query,
      };

      try {
        const response = await fetch('https://api.infinder.in/new-feedback/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });

        console.log('Response status:', response.status);

        const result = await response.json();
        console.log('Response result:', result);
        if (result.success) {
          setMessage("Thank you! Your data has been submitted.");
          onClose(); // Close the modal after successful submission
        } else {
          setMessage("Failed to submit the data. Please try again.");
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setMessage("An error occurred while submitting the form.");
      }
      console.log('Form submitted successfully!', formData);
    } else {
      setMessage("Form valiation failed!");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        {/* Left Section */}
        <LeftSection>
          <span className='headingLeft'>Register Early on Infinder and Get 30% Off Your Printing Needs!</span>
          <span className='paraLeft'>
            Infinder is here to revolutionize healthcare connections—and we’re
            giving you an exclusive bonus for joining early! Register today and
            enjoy 30% off your essential printing materials with our printing
            service partner Printlyte.
          </span>
          <ul>
            <li>☑️ Boost your healthcare connections with ease</li>
            <li>☑️ Save big on printing costs through Printlyte</li>
            <li>☑️ Enjoy seamless, dedicated support every step of the way</li>
          </ul>
          <div className="testimonial">
            <img
              src={logo}
              alt="Founder"
              className="founder-img"
            />
            <div>
              <em>I can’t wait to connect!</em>
              {/* <p><strong>Finge Holden</strong><br />Founder, ConversionLab</p> */}
            </div>
          </div>
        </LeftSection>

        {/* Right Section */}
        <RightSection>
          <button className="close-btn" onClick={onClose}>✖</button>
          <form onSubmit={handleSubmit} method="post" action="#">
            <label>Your name *</label>
            <input type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required />

            <label>Business email *</label>
            <input type="email"
              name="businessEmail"
              placeholder="Enter your email"
              value={formData.businessEmail}
              onChange={handleChange}
              required />

            <label>Mobile Number *</label>
            <input type="number"
              name="mobileNo"
              placeholder="Enter your mobile"
              value={formData.mobileNo}
              onChange={handleChange}
              required />
            {errors.mobileNo && <span style={{ color: 'red' }}>{errors.mobileNo}</span>}

            <label>Lab/Hospital Name *</label>
            <input type="text"
              name="clinicName"
              placeholder="Your company name"
              value={formData.clinicName}
              onChange={handleChange}
              required />

            <label>Printing Materials</label>
            <select name="printing_materials" onChange={handleChange} value={formData.printing_materials}>
              <option value="">Select an option</option>
              <option value="Visiting Card">Visiting Card</option>
              <option value="Docket Folder">Docket Folder</option>
              <option value="Envelopes">Envelopes</option>
              <option value="MRI/CT Scan Bag">MRI/CT Scan Bag</option>
            </select>

            <label>Enter query if any</label>
            <input type="text"
              name="query"
              placeholder="Describe here"
              value={formData.query}
              onChange={handleChange} />

            <div className="newsletter">
              <input type="checkbox"
                name="isNewsletter"
                id="newsletter"
                checked={formData.isNewsletter}
                onChange={handleChange}
                required />
              <label htmlFor="newsletter">Please add me to your newsletter</label>
            </div>

            <button type="submit" className="submit-btn">
              Register Now to Claim Your Discount!
            </button>
            <p className="policy">
              By clicking submit below you agree to our <a href="#">Privacy Policy</a>.
            </p>
            
          </form>
        </RightSection>
      </ModalContent>
    </ModalOverlay>
  );
};

export default FormModalTwo;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  display: flex;
  background: white;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  flex-direction: row;

  .headingLeft {
    font-family: "DM Serif Text", serif;
    font-size: 1.5rem;
    color: #003F5C;
  }

  .paraLeft {
    font-family: "DM Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: #3A5070;
    text-align: justify;
  }

  ul {
    list-style: none;
    padding: 0;
    li {
      margin: 0.5rem 0;
      color: #555;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .headingLeft {
      font-size: 1.5rem;
    }

    .paraLeft {
      font-size: 0.9rem;
    }
  }
`;

const LeftSection = styled.div`
  flex: 1;
  background: #fdf0e5;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  .testimonial {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;

    .founder-img {
      height: auto;
      width: 6rem;
    }

    em {
      color: #7a7a7a;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    .testimonial .founder-img {
      width: 4rem;
    }
  }
`;

const RightSection = styled.div`
  flex: 1;
  padding: 2rem 3rem;
  position: relative;

  .close-btn {
    position: absolute;
    top: 0rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-weight: bold;
      color: #333;
      font-size: 0.9rem;
    }

    select[multiple] {
      height: auto;
      min-height: 100px;
      width: 100%;
      padding: 5px;
    }

    input,
    select {
      padding: 0.7rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 0.8rem;
    }

    .newsletter {
      display: flex;
      input {
        margin-right: 0.5rem;
      }
    }

    .submit-btn {
      background: #6d4aff;
      color: white;
      border: none;
      padding: 1rem;
      border-radius: 5px;
      font-size: 0.8rem;
      cursor: pointer;
    }

    .policy {
      margin-top: 1rem;
      font-size: 0.9rem;
      color: #888;
    }

    a {
      color: #6d4aff;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .close-btn {
      top: 0.5rem;
      right: 0.5rem;
      font-size: 1.2rem;
    }

    .submit-btn {
      padding: 0.8rem;
      font-size: 0.9rem;
    }

    .policy {
      font-size: 0.8rem;
    }
  }
`;
