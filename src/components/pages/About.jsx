import Footer from '../Footer';
import ImageToggle from '../UI/ImageToggle';

export default function About() {
  return (
    <div className="about d-flex flex-column align-items-center">
      <div className="logo-about pt-4 ps-3">
        <img src="./img/cat1.png" alt="cat logo" className='shadow'/>
        <h1 className='mt-2 ms-3 fw-bold'>About Me</h1>
      </div>
      <div className="about-details p-5 d-flex align-items-center col-md-10 col-12 col-sm-12 col-lg-9 col-xl-7 mx-auto">
        <p className='text-justify me-5'>I&apos;m <span className="name">Jodie Lee</span> — a dedicated coder and aspiring web developer. With experience in both
          frontend and backend development, I enjoy creating interactive user interfaces as well
          as solving complex backend challenges. I&apos;m passionate about the entire development
          process and always eager to learn and explore new technologies.</p>
        <ImageToggle />
      </div>
      <Footer />
    </div>
   
  );
}