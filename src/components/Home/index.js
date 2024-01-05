import Header from '../Header'

import './index.css'

const Home = () => (
  <div id="homeSection">
    <Header />
    <div className="about-me-card">
      <div className="my-details-container">
        <h2 className="user-role">MernStack Developer</h2>
        <h1 className="user-name-description">
          Hello, My Name <br /> is Ma Javeed
        </h1>
        <p className="user-description">
          A MERN stack developer adeptly combines MongoDB, Express.js, React,
          and Node.js to create dynamic and scalable web applications. They
          excel in both frontend and backend development within the MERN
          framework, ensuring seamless integration and high-performance
          solutions for diverse project needs.
        </p>
        <div>
          <a href="#projectSection" className="projects-btn">
            Projects
          </a>
          <a
            href="www.linkedin.com/in/ma-javeed"
            target="_blank"
            className="linkedin-btn"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="image-container">
        <img
          className="profile-image"
          src="https://res.cloudinary.com/daqedhqtx/image/upload/v1704381816/image_wpfwpz.jpg"
          alt="eating a sandwich."
        />
      </div>
    </div>
  </div>
)

export default Home
