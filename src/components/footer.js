import * as React from "react"
import { Link } from "gatsby"
import "./footer.less"

const Footer = () => (
  <footer>
    <div>
      <h6>
          Created By Clay Park
      </h6>
      <h6>
        <Link to="https://github.com/claypark-dev/clay-park-resume">
          Link to repo here!
        </Link>
      </h6>
    </div>
  </footer>
)


export default Footer
