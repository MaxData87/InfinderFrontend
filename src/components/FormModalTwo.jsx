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
          <div className="inputGroup">
            <span className="inputIcon">👤</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputGroup">
            <span className="inputIcon">✉️</span>
            <input
              type="email"
              name="businessEmail"
              placeholder="Your email"
              value={formData.businessEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputGroup">
            <span className="inputIcon">📞</span>
            <input
              type="number"
              name="mobileNo"
              placeholder="Your mobile"
              value={formData.mobileNo}
              onChange={handleChange}
              required
            />
            {errors.mobileNo && <span style={{ color: "red" }}>{errors.mobileNo}</span>}
          </div>

          <div className="inputGroup">
            <span className="inputIcon">🏥</span>
            <input
              type="text"
              name="clinicName"
              placeholder="Your company name"
              value={formData.clinicName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputGroup">
            <span className="inputIcon">📋</span>
            <select
              name="printing_materials"
              onChange={handleChange}
              value={formData.printing_materials}
              required
            >
              <option value="" disabled>
                Select printing material
              </option>
              <option value="Visiting Card">Visiting Card</option>
              <option value="Docket Folder">Docket Folder</option>
              <option value="Envelopes">Envelopes</option>
              <option value="MRI/CT Scan Bag">MRI/CT Scan Bag</option>
            </select>
          </div>

          <div className="inputGroup">
            <span className="inputIcon">📝</span>
            <textarea
              name="query"
              placeholder="Describe your query here"
              value={formData.query}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          <div className="newsletter">
            <input
              type="checkbox"
              name="isNewsletter"
              id="newsletter"
              checked={formData.isNewsletter}
              onChange={handleChange}
              required
            />
            <label htmlFor="newsletter">Please add me to your newsletter</label>
          </div>

          <button type="submit">Register Now to Claim Your Discount!</button>
          <p>
            By clicking submit, you agree to our <a href="#">Privacy Policy</a>.
          </p>
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
  max-width: 500px;
  width: 95%;
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
    margin-bottom: 1rem;
    text-align: center;

    h2 {
      color: #003f5c;
      font-family: 'DM Serif Text', serif;
      font-size: 1.5rem;
    }

    p {
      color: #3a5070;
      font-size: 1rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .inputGroup {
      position: relative;

      select,
      textarea,
      input {
        width: 100%;
        padding: 0.7rem 0.5rem 0.7rem 2.5rem;
        font-size: 1rem;
        border: none;
        border-bottom: 2px solid #ccc;
        outline: none;
        background: transparent;
        transition: border-color 0.3s ease;
      }

      textarea {
        resize: none;
        border-radius: 4px;
        border: 1px solid #ccc;
        background: #f9f9f9;
        padding: 0.7rem 0.5rem 0.7rem 2.5rem;
      }

      textarea:focus {
        border: 1px solid #6d4aff;
      }

      select {
        background-color: transparent;
        font-size: 1rem;
        border-radius: 4px;
        appearance: none;
        cursor: pointer;
      }

      input:focus,
      select:focus {
        border-bottom: 2px solid #6d4aff;
      }

      input::placeholder,
      textarea::placeholder {
        color: #666;
        font-size: 0.9rem;
      }

      .inputIcon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1rem;
        color: #000000;
      }
    }

    button {
      background: #6d4aff;
      color: white;
      border: none;
      padding: 1rem;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #5831d1;
      }
    }

    p {
      font-size: 0.8rem;
      color: #888;
    }
  }

  .newsletter {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 400px;

    .content {
      h2 {
        font-size: 1.3rem;
      }

      p {
        font-size: 0.9rem;
      }
    }

    form {
      gap: 0.75rem;

      button {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    max-width: 90%;

    .content {
      h2 {
        font-size: 1.2rem;
      }

      p {
        font-size: 0.8rem;
      }
    }

    form {
      gap: 0.5rem;

      button {
        font-size: 0.8rem;
        padding: 0.8rem;
      }

      textarea {
        font-size: 0.9rem;
      }
    }
  }
`;
