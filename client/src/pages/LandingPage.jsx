import { useState } from "react";
import { Link } from "react-router-dom";
import wave from "../assets/wave.png";
import docker from "../assets/docker.png";
import pull from "../assets/pull.png";
import push from "../assets/push.png";
import view from "../assets/view.png";
import dash from "../assets/dash.png";

export const LandingPage = () => {
  const [selectedButton, setSelectedButton] = useState("deploy");

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6  dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <img src={wave} alt="wave" className="h-20 w-20 mr-2" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                DockerWave
              </span>
            </a>

            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#about"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center lg:order-2">
              <Link
                to={"/login"}
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Login
              </Link>

              <Link
                to={"/register"}
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Signup
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
              Welcome to DockerWave{" "}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Seamlessly Deploy and Manage Your Container Cluster
            </p>
            <Link
              to="/register"
              className=" inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-2xl bg-blue-500 hover:bg-blue-300 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={docker} alt="docker" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800" id="features">
        <div className="flex flex-col items-center justify-center w-2/3 mx-auto text-center px-4 py-8">
          <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Accelerate how you build, share, and run applications
          </h1>
          <p className="text-gray-500 my-5">
            DockerWave helps developers build, push, pull, and manage docker
            containers anywhere — without tedious environment configuration or
            management.
          </p>
          <div className="my-5">
            <button
              id="build-button"
              className={`group relative h-12 w-48 overflow-hidden rounded-2xl ${
                selectedButton === "deploy" ? "bg-blue-500" : "bg-gray-500"
              } text-lg font-bold text-white mx-5`}
              onClick={() => handleButtonClick("deploy")}
            >
              Deploy
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>

            <button
              id="deploy-button"
              className={`group relative h-12 w-48 overflow-hidden rounded-2xl ${
                selectedButton === "pull" ? "bg-blue-500" : "bg-gray-500"
              } text-lg font-bold text-white`}
              onClick={() => handleButtonClick("pull")}
            >
              Pull
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>

            <button
              id="manage-button"
              className={`group relative h-12 w-48 overflow-hidden rounded-2xl ${
                selectedButton === "manage" ? "bg-blue-500" : "bg-gray-500"
              } text-lg font-bold text-white mx-5`}
              onClick={() => handleButtonClick("manage")}
            >
              Manage
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>

          {selectedButton === "deploy" && (
            <div className="flex items-center justify-between container my-10">
              <div className="text-left text-gray-500 mx-10">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white text-left">
                  Deploy
                </h2>
                <div>
                  <h5 className="font-bold text-lg text-gray-400">
                    Deploy and Push Images
                  </h5>
                  <p className="my-3">
                    Efficiently deploy Docker images to Docker Hub, accelerating
                    your development lifecycle.
                  </p>
                </div>
              </div>
              <div className="">
                <img src={push} alt="push" className="h-96" />
              </div>
            </div>
          )}

          {selectedButton === "pull" && (
            <div className="flex items-center justify-between container my-10">
              <div className="text-left text-gray-500 mx-10">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white text-left">
                  Pull
                </h2>
                <div>
                  <h5 className="font-bold text-lg text-gray-400">
                    Pull Docker Images
                  </h5>
                  <p className="my-3">
                    Effortlessly fetch Docker images from Docker Hub with ease,
                    ensuring seamless integration into your projects.
                  </p>
                </div>
              </div>
              <div className="">
                <img src={pull} alt="pull" />
              </div>
            </div>
          )}

          {selectedButton === "manage" && (
            <div className="flex items-center justify-between container my-10">
              <div className="text-left text-gray-500 mx-10">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white text-left">
                  Manage
                </h2>
                <div>
                  <h5 className="font-bold text-lg text-gray-400">
                    Manage Containers
                  </h5>
                  <p className="my-3">
                    Gain full control over containerized applications
                  </p>
                  <p className="my-3">
                    Easily view container details, delete containers when
                    necessary, and manage container lifecycle with options to
                    stop, start, and more, empowering you to maintain optimal
                    performance.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-5">
                <img src={dash} alt="dashboard" />
                <img src={view} alt="view" />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900" id="about">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              Empowering Your Deployment Journey
            </h2>
            <p className="mb-4">
              DockerWave isn't about reinventing the wheel; it's about
              revolutionizing how you deploy and manage containers. We are a
              team of strategists, designers, and developers dedicated to
              simplifying your deployment process. Whether you're a startup or
              an enterprise, DockerWave is your trusted partner for seamless
              container management. With us, you get the simplicity and speed of
              a small team, coupled with the scalability and reliability you
              need for your projects.
            </p>
          </div>
        </div>
      </section>

      <footer className="p-4 bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 flex items-center">
              <img src={wave} alt="wave" className="h-20 w-20 mr-2" />

              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                DockerWave
              </span>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li>
                    <a href="#" className="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      ReactJS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://github.com/Cyril26"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div
            className="sm:flex sm:items-center sm:justify-between"
            id="contact"
          >
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 DockerWave. All Rights Reserved.
            </span>
            <div
              className="flex mt-4 space-x-6 sm:justify-center sm:mt-0"
              id="contact"
            >
              <a
                href="https://github.com/Cyril26"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
