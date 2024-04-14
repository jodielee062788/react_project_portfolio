import { useState } from 'react';

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
    console.log(formData); // You can handle form submission logic here
  };

  return (
    <div className='contact d-flex flex-column align-items-center mx-auto'>
      <div className="contact-logo">
        <img src="./img/cat3.png" alt="cat logo" />
        <h1 className='mt-2 ms-2'>Contact</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='mt-4 d-flex flex-column align-items-start'>
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
          <button className='d-flex mx-auto mt-4 fw-bold' type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
