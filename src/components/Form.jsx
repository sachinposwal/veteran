import React, { useState } from 'react';
import { sendEmail } from './Email';

function Form({ active, setActive }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('✔️ SUCCESS! We will connect with you shortly.');
        setTimeout(() => {
          setFormData({ name: '', email: '', mobile: '' });
          setActive(false); // Close popup after 2 seconds
          setStatus(''); // Clear status
        }, 3000);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('❌ Failed to register, please contact via email.');
        setTimeout(() => setStatus(''), 4000); // Clear status after 4 seconds
      });
  };

  return (
    <>
      {active && (
        <div>
          <div className="overlay" onClick={() => setActive(false)}></div>
          <div className={`popup ${active ? 'active' : ''}`}>
            <button className="close-btn" onClick={() => setActive(false)}>
              &times;
            </button>
            <h2>Fill Your Details</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
            {status && <div className="emailstatus"><p>{status}</p></div>}
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
