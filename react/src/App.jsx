import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="content">
        <div className="container">
          <h1 className="hello">
            Hello! <span className="wave">👋</span>
          </h1>
          <h1>I'm Brian Donaghey</h1>
          <p>
            I am currently a Senior at the <b>University of Pittsburgh</b> studying Computer Science with a minor in Economics.
            My primary interests lie in <b>full-stack</b> and <b>back-end</b> development. More specifically, I am passionate about
            <b> software development, data engineering, software quality assurance, database management, and artificial intelligence</b>.
            With graduation approaching, I am currently seeking full-time roles in a position where I am challenged and actively learning new things every day.
          </p>

          <div className="nav-cards">
          <a href="index.html" className="nav-card">Home</a>
         {/* <a href="aboutMe.html" className="nav-card">About Me</a> */}
          <a href="../assets/Brian_Donaghey_Resume.pdf" className="nav-card">Resume</a>

          <a href="https://www.linkedin.com/in/brian-donaghey/" className="nav-card with-icon">
            <img src="../assets/linkedin.png" alt="LinkedIn" className="icon" />
            LinkedIn
          </a>

          <a href="https://github.com/briandonaghey21" className="nav-card with-icon">
            <img src="../assets/github.png" alt="GitHub" className="icon" />
            GitHub
          </a>
          </div>


        </div>

        <img src="../assets/brian.png" alt="Brian" className="Brian" />
      </div>
    </>
  )
}

export default App
