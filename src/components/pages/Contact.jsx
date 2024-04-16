import { useState } from 'react';
import Footer from '../Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='contact d-flex flex-column align-items-center'>
        <div className="contact-logo align-items-center justify-content-center">
          <img src="./img/cat3.png" alt="cat logo" className='shadow'/>
          <h1 className='ms-3 mt-2'>Contact</h1>
        </div>
          <form onSubmit={handleSubmit}>
            <div className='d-flex flex-column align-items-start'>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='d-flex flex-column align-items-start mt-3'>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='d-flex flex-column align-items-start mt-3'>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          <div>
            <button className='submitBtn d-flex mx-auto mt-4 shadow' type="submit">SUBMIT</button>
          </div>
        </form>
        <Footer />
    </div>
    
  );
}
