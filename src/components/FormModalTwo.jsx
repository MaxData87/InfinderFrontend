import React, { useState } from 'react';
import styled from 'styled-components';

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

    if (name === 'mobileNo') {
      setErrors({ ...errors, mobileNo: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const mobileRegex = /^[6-9][0-9]{9}$/;

    // Validate mobile number
    if (!formData.mobileNo) {
      newErrors.mobileNo = 'Mobile number is required';
    } else if (!mobileRegex.test(formData.mobileNo)) {
      newErrors.mobileNo = 'Please enter a valid mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    } else {
      setMessage("Form validation failed!");
    }
  };

  return (
    <ModalOverlay>
      <ContentSection>
        <button className="close-btn" onClick={onClose}>✖</button>
        <div className="content">
          <h2>Register Early and Get 30% Off!</h2>
          <p>Infinder is transforming healthcare connections—join early and get 30% off essential printing materials with our partner, Printlyte!</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Your name *</label>
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />

          <label>Business email *</label>
          <input type="email" name="businessEmail" placeholder="Enter your email" value={formData.businessEmail} onChange={handleChange} required />

          <label>Mobile Number *</label>
          <input type="number" name="mobileNo" placeholder="Enter your mobile" value={formData.mobileNo} onChange={handleChange} required />
          {errors.mobileNo && <span style={{ color: 'red' }}>{errors.mobileNo}</span>}

          <label>Lab/Hospital Name *</label>
          <input type="text" name="clinicName" placeholder="Your company name" value={formData.clinicName} onChange={handleChange} required />

          <label>Printing Materials</label>
          <select name="printing_materials" onChange={handleChange} value={formData.printing_materials}>
            <option value="">Select an option</option>
            <option value="Visiting Card">Visiting Card</option>
            <option value="Docket Folder">Docket Folder</option>
            <option value="Envelopes">Envelopes</option>
            <option value="MRI/CT Scan Bag">MRI/CT Scan Bag</option>
          </select>

          <label>Enter query if any</label>
          <input type="text" name="query" placeholder="Describe here" value={formData.query} onChange={handleChange} />

          <div className="newsletter">
            <input type="checkbox" name="isNewsletter" id="newsletter" checked={formData.isNewsletter} onChange={handleChange} required />
            <label htmlFor="newsletter">Please add me to your newsletter</label>
          </div>

          <button type="submit">Register Now to Claim Your Discount!</button>
          <p>By clicking submit, you agree to our <a href="#">Privacy Policy</a>.</p>
        </form>
      </ContentSection>
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
  padding: 0 1rem;
`;

const ContentSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .content {
    margin-bottom: 1rem;
    text-align: center;
    h2 {
      color: #003F5C;
      font-family: 'DM Serif Text', serif;
    }
    p {
      color: #3A5070;
      font-size: 1rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-weight: bold;
    }
    input, select {
      padding: 0.7rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      background: #6d4aff;
      color: white;
      border: none;
      padding: 1rem;
      border-radius: 5px;
      cursor: pointer;
    }
    p {
      font-size: 0.8rem;
      color: #888;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    form {
      button {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    .content {
      h2 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
    form {
      gap: 0.4rem;
      button {
        font-size: 0.8rem;
        padding: 0.8rem;
      }
    }
  }
`;
