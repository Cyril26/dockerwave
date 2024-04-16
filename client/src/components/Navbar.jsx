import { Link, useNavigate } from "react-router-dom";
import httpClient from "../httpClient";
import wave from "../assets/wave.png";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      await httpClient.delete("/logout");
      navigate("/");
    } catch (error) {
      console.log("logout error", error);
    }
  };

  return (
    <nav className="flex items-center bg-gray-800 flex-wrap px-5">
      <Link to="/dashboard" className="p-2 mr-4 inline-flex items-center">
        <img src={wave} alt="wave" className="h-20 w-20 mr-2" />
        <span className="text-xl text-white font-bold tracking-wide">
          DockerWave
        </span>
      </Link>
      {
        <button
          className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
          data-target="#navigation"
          onClick={() => handleLogoutClick()}
        >
          Logout
        </button>
      }
      <div
        className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            {<button onClick={() => handleLogoutClick()}>Logout</button>}
          </div>
        </div>
      </div>
    </nav>
  );
}
