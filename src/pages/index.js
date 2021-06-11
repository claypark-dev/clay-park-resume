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
      <h3><span class="standout">'</span>About Me<span class="standout">':</span></h3>
      <p><span class="standout">{'{ '}</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque, augue aliquam ornare iaculis, nunc risus tincidunt dolor, at ullamcorper sapien quam sit amet massa. Morbi quis finibus magna. Morbi porta tortor sed neque laoreet iaculis. Aenean varius, diam sit amet mattis blandit, massa nisl sagittis nisi, vitae maximus odio quam ac mi. Sed egestas dui felis, eget fringilla augue feugiat sed. Ut nec<span class="standout">{' }'}</span></p>
      </div>
    </div>
    <div id="work">
    <h3>
    <span class="standout">'</span>Work Expereince<span class="standout">':</span>
    </h3>
    <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque, augue aliquam ornare iaculis, nunc risus tincidunt dolor, at ullamcorper sapien quam sit amet massa. Morbi quis finibus magna. Morbi porta tortor sed neque laoreet iaculis. Aenean varius, diam sit amet mattis blandit, massa nisl sagittis nisi, vitae maximus odio quam ac mi. Sed egestas dui felis, eget fringilla augue feugiat sed. Ut nec </p>
    </div>
      </div>
    <div id="projects">
      <h3>Projects - Some Cool Stuff</h3>
      <div class="projects-wrapper">
        <div class="project">
          <h5>
            Portfolio Boiler Plate
          </h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque, augue aliquam ornare iaculis, nunc risus tincidunt dolor, at ullamcorper sapien quam sit amet</p>
          <StaticImage
            src="../images/test-static-image.jpg"
            formats={["JPG"]}
            alt="Personal Photo"
            />
        </div>
        <div class="project">
          <h5>
            A better Spotify Podcasts
          </h5>
          <p>
            Built out of pure spite for the horrible implementation. This pulls in a given users podcasts and organizes the saved podcasts
            in order of most recently updated. You know kind of how you like to normally listn to podcasts.
          </p>
          <StaticImage
            src="../images/test-static-image.jpg"
            formats={["JPG"]}
            alt="Personal Photo"
            />
        </div>
        <div class="project">
        <h5>
            A better Spotify Podcasts
          </h5>
          <p>
            Built out of pure spite for the horrible implementation. This pulls in a given users podcasts and organizes the saved podcasts
            in order of most recently updated. You know kind of how you like to normally listn to podcasts.
          </p>
          <StaticImage
            src="../images/test-static-image.jpg"
            formats={["JPG"]}
            alt="Personal Photo"
            />
        </div>
      </div> 
      
    </div>
    <div id="contact">
      <form>
        <div class="form-name">
          <input type="text" class="form-control" placeholder="Name"></input>
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
