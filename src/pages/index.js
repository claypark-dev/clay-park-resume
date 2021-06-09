import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./mainpage.less"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div id="about">
      <div class="personal-image">
      <StaticImage
            src="../images/ClayParkPhoto.jpg"
            formats={["JPG"]}
            alt="Personal Photo"
            />
      </div>
      <div class="personal-info">
      <h3>About Me</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque, augue aliquam ornare iaculis, nunc risus tincidunt dolor, at ullamcorper sapien quam sit amet massa. Morbi quis finibus magna. Morbi porta tortor sed neque laoreet iaculis. Aenean varius, diam sit amet mattis blandit, massa nisl sagittis nisi, vitae maximus odio quam ac mi. Sed egestas dui felis, eget fringilla augue feugiat sed. Ut nec </p>
      </div>
    </div>
    <div id="work">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque, augue aliquam ornare iaculis, nunc risus tincidunt dolor, at ullamcorper sapien quam sit amet massa. Morbi quis finibus magna. Morbi porta tortor sed neque laoreet iaculis. Aenean varius, diam sit amet mattis blandit, massa nisl sagittis nisi, vitae maximus odio quam ac mi. Sed egestas dui felis, eget fringilla augue feugiat sed. Ut nec </p>
      </div>
    <div id="projects">
      
      
    </div>
    <div id="contact">
      <form>
        <div class="form-name">
          <input type="text" class="form-control" placeholder="First Name"></input>
          <input type="text" class="form-control" placeholder="Last Name"></input>
        </div>
        <div class="form-email">
          <input type="text" class="form-control" placeholder="Email"></input>
        </div>
        <div class="form-message">
          <textarea rows="3" type="text" class="form-control" placeholder="Drop Your Message Here"></textarea>
        </div>
        <div class="form-submit">
        <button class="square-button">Send</button>
        </div>
      </form>
    </div>
  </Layout>
)

export default IndexPage
