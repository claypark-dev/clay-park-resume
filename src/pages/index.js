import * as React from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./mainpage.less"
import Layout from "../components/layout"
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showKadro: true
    };
  }
  

  render(){

    return(<Layout>
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
        <p><span class="standout">{'{ '}</span>
        Hi! My Name is Clay a full stack software engineer based out of Raleigh NC. Originating from Florida I made the monstorous trip to North Carolina for better career prospects and less humidity.
        There I was very happy to receive my Computer Science Degree from North Carolina State University pandemic and all.
        <br />
        Through all of my coding adventures I have learned more than anything else that my favorite aspect of computer science is being able to learn and apply skills so rapidly.
        Whether that is developing full stack ecommerce sites for companies all over the world, doing 3d animations all through code, developing styling and designing themes/comps, or using
        deep learning to tell the difference between a dog and a cat better than I can.
        <span class="standout">{' }'}</span></p>
        </div>
      </div>
      <div id="work">
      <h3>
      <span class="standout">'</span>Work Expereince<span class="standout">':</span>
      </h3>
      <div class="popup">
        <div class="swappable">
          <span onClick={() => this.setState({showKadro : true})}><span class="standout-small">[</span>Kadro<span class="standout-small">]</span></span>
          <span onClick={() => this.setState({showKadro : false})}><span class="standout-small">[</span>NC State<span class="standout-small">]</span></span>
        </div>
        {this.state.showKadro ? 
          <p class="kadro-view fadeIn">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque, augue aliquam ornare iaculis, nunc risus tincidunt dolor, at ullamcorper sapien quam sit amet massa. Morbi quis finibus magna. Morbi porta tortor sed neque laoreet iaculis. Aenean varius, diam sit amet mattis blandit, massa nisl sagittis nisi, vitae maximus odio quam ac mi. Sed egestas dui felis, eget fringilla augue feugiat sed. Ut nec </p>
          :
          <p class="state-view fadeIn">Woop</p>
      }      
      </div>
        </div>
      <div id="projects">
        <h3>'Projects - Some Cool Stuff'</h3>
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
    </Layout>);
  }
}
export default IndexPage

