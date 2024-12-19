import { useState } from 'react';
import ResumePreview from './ResumePreview';
import DownloadButton from './DownloadButton';
import './ResumeForm.css';

const ResumeForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      education: '',
      experience: '',
      skills: ''
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Enter a valid email';
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Enter a valid 10-digit phone number';
      }
      if (!formData.education) newErrors.education = 'Education is required';
      if (!formData.experience) newErrors.experience = 'Experience is required';
      if (!formData.skills) newErrors.skills = 'Skills are required';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        alert('Form submitted successfully!');
      }
    };
  
    return (
      <div className="resume-builder">
        <div className="form-preview-container">
          <form className="resume-form" onSubmit={handleSubmit}>
            <h2>Resume Builder</h2>
  
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </label>
  
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>
  
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </label>
  
            <label>
              Education:
              <textarea
                name="education"
                value={formData.education}
                onChange={handleChange}
              ></textarea>
              {errors.education && <span className="error">{errors.education}</span>}
            </label>
  
            <label>
              Experience:
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              ></textarea>
              {errors.experience && <span className="error">{errors.experience}</span>}
            </label>
  
            <label>
              Skills:
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              ></textarea>
              {errors.skills && <span className="error">{errors.skills}</span>}
            </label>
  
            <button type="submit">Submit</button>
          </form>
  
          <ResumePreview data={formData} />
        </div>
  
        <DownloadButton data={formData} />
      </div>
    );
  };
  
  export default ResumeForm;