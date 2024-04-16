/* eslint-disable react/prop-types */

export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="logo-text">
        <img src="./img/cat logo.png" alt="" />
        <h2>JCLee</h2>
      </div>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-4 ms-auto">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}
