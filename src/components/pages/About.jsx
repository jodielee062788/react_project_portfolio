import Footer from '../Footer';
import ImageToggle from './ImageToggle';

export default function About() {
  return (
    <div className="about d-flex flex-column align-items-center mx-auto">
      <div className="logo-about pt-4 ps-3">
        <img src="./img/cat1.png" alt="cat logo" />
        <h1 className='mt-2 ms-3 fw-bold'>About Me</h1>
      </div>
      <div className="about-details p-5 d-flex align-items-center col-5 mx-auto">
        <p className='text-justify me-5'>I&apos;m <span className="name">Jodie Lee</span> — a dedicated coder and aspiring web developer.
        Whether it&apos;s making things look good on the front-end or figuring out the technical side in back-end,
        I enjoy the whole process and love learning new things.</p>
        <ImageToggle />
      </div>
      <Footer />
    </div>
   
  );
}