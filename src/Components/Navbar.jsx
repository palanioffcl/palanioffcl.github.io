import "./index.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div onClick={() => navigate("/")}>
          <h3 className="header">Palani Ayyappan</h3>
        </div>

        <div className="navbardiv">
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/projects">Projects</Link>
          </div>
          <div>
            <a href="/assets/Palani_SoftwareDeveloper_Resume.pdf">Resume</a>
          </div>
        </div>
      </div>
    </>
  );
}
