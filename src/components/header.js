import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./header.less"

const Header = () => (
  <header>

    <div>
        <nav>
          <div class="header-logo">
            <StaticImage
            src="../images/headerLogo.png"
            formats={["PNG"]}
            alt="Clay Park Logo"
            />
          </div>
          <div class="header-links">
            <Link to="#header-top">🏡 Home</Link>
            <Link to="#about">👩🏻‍💻 About</Link>
            <Link to="#work">🏢 Work</Link>
            <Link to="#projects">📝 Projects</Link>
            <Link to="#contact">📧 Contact</Link>
            <button>Resume</button>
          </div>
        </nav>
    </div>
  </header>
)
export default Header
