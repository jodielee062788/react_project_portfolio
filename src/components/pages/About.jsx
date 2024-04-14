import Footer from '../Footer';

export default function About() {
  return (
    <div className="about d-flex flex-column align-items-center mx-auto">
      <div className="logo-about pt-4 ps-3">
        <img src="./img/cat1.png" alt="" />
        <h1 className='ms-2 fw-bold'>About Me</h1>
      </div>
      <div className="about-details p-5">
        <p>I&apos;m <span className="name">Jodie Lee</span> — a dedicated coder and aspiring web developer.
        Whether it&apos;s making things look good on the front-end or figuring out the technical side in back-end,
        I enjoy the whole process and love learning new things.</p>
        <img src="./img/pixil-frame-0.png" alt="" />
        <img src="./img/unnamed.jpg" alt="" />
      </div>
      <Footer />
    </div>
   
  );
}