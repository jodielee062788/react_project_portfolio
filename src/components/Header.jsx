import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <div className="logo-text">
        <img src="./img/cat logo.png" alt="" />
        <h1>JCLee</h1>
      </div>
      <nav>
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;
