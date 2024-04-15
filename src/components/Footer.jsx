import { useState } from 'react';

export default function Footer() {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const toggleContact = (contactType) => {
    if (contactType === 'phone') {
      setShowPhone(!showPhone);
      setShowEmail(false);
    } else if (contactType === 'email') {
      setShowEmail(!showEmail);
      setShowPhone(false); 
    }
  };

  return (
    <footer className="p-4">
      <div className="logos d-flex justify-content-center">
        <img 
            src="./img/telephone.png" 
            alt="phone logo" 
            onClick={() => toggleContact('phone')}  
          />
          <img 
            src="./img/envelope.png" 
            alt="email logo" 
            onClick={() => toggleContact('email')}  
          />
        <a href="https://github.com/jodielee062788" target="_blank" title="Github"  rel="noreferrer">
          <img src="./img/github.png" alt="github logo" />
        </a>
        <a href="https://www.twitter.com/jodieleeleelee" target="_blank" title="Twitter" rel="noreferrer">
          <img src="./img/twitter.png" alt="twitter logo" />
        </a>
        <a href="https://www.instagram.com/jodieleely" target="_blank"  title="Instagram" rel="noreferrer">
          <img src="./img/instagram.png" alt="instagram logo" />
        </a>
        <a href="https://www.linkedin.com/in/jodie-lee-a34245263/" target="_blank"  title="LinkedIn" rel="noreferrer">
          <img src="./img/linkedin.png" alt="linkedin logo" />
        </a>
      </div>

      {showPhone && (
        <div className="d-flex justify-content-center mt-2">
          <div className="contact-details text-center p-2 shadow">
            <p className="m-0 text-dark">Phone: +61410861559</p>
          </div>
        </div>
      )}

      {showEmail && (
        <div className="d-flex justify-content-center mt-2">
          <div className="contact-details text-center p-2 shadow">
            <p className="m-0 text-dark">Email: jodielee062788@gmail.com</p>
          </div>
        </div>
      )}
    </footer>
  );
}

