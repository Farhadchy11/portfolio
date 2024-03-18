import farhad from "./farhad.png";
import project from "./project-1.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <div className="left-side">
          <div class="hello">Hello.</div>
          <div class="i">I am</div>
          <div class="farhad">Farhad</div>
          <div class="btn">
            <button className="cv-btn">Download cv</button>

            <button className="linkedin-btn">Linkedin</button>
          
          </div>
        </div>

        <div className="right-side">
          <img className="hero-img" src={farhad} />
        </div>
      </div>

      <div className="about-section">
        <div className="about-text">
          <div className="about-heading">About Me</div>
          <div className="about-body">
            Highly motivated and detail-oriented Front end developer, eager to
            kick-start a career in the dynamic world of web development.
            Possesses a solid foundation in react js and javaScript.
          </div>
        </div>
      </div>

      <div clssName="skills-section">
        <div className="skills">
          <div className="skill-heading">My Skills</div>
          <div class="skillItem">
            {" "}
            <div className="skill-txt-html">Html: </div>{" "}
            <div class="skill t9"> </div>
          </div>
          <div class="skillItem">
            {" "}
            <div className="skill-txt-css">Css:</div>{" "}
            <div class="skill t9"> </div>
          </div>
          <div class="skillItem">
            {" "}
            <div className="skill-txt-js">Javascript:</div>{" "}
            <div class="skill-t-js"> </div>
          </div>
          <div className="skillItem">
            {" "}
            <div className="skill-txt-react">React:</div>{" "}
            <div class="skill-t-react"> </div>
          </div>
        </div>
      </div>

      <div className="project-section">
        <div className="project-heading">MY WORKS</div>

        <div className="projects">
          <div className="project-one">
            <img className="project-img" src={project} />
            <div className="project-name">FARFLIX</div>
            <div className="project-txt">
              • This is an entertainment website. User can watch movies, reads
              blogs and watch quality videos in this site.This website has dark
              and light mode and login/logout features too.
            </div>
            <div className="gitlink-txt">Github Link:</div>
            <button className="project-btn">View project</button>
          </div>

          <div className="project-two">
            <img className="project-img" src={project} />
            <div className="project-name">sBay</div>
            <div className="project-txt">
              • This is an entertainment website. User can watch movies, reads
              blogs and watch quality videos in this site.This website has dark
              and light mode and login/logout features too.
            </div>
            <div className="gitlink-txt">Github Link:</div>
            <button className="project-btn">View project</button>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <form method="post">
          <h3>Contact Me</h3>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="txtName"
                  class="form-control"
                  placeholder="Your Name *"
                  value=""
                />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  class="form-control"
                  placeholder="Your Email *"
                  value=""
                />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  class="form-control"
                  placeholder="Your Phone Number *"
                  value=""
                />
              </div>

              <div class="formCheck">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="checkbox" class="form-check-label">
                  I want you to work on a project with me
                </label>
                <br />
              </div>

              <div class="button">
                <input
                  type="submit"
                  name="btnSubmit"
                  class="btnContact"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
