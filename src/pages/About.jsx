import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShowcaseCard from "/src/ShowcaseCard.jsx"
import ShowcaseCard2 from "/src/ShowcaseCard2.jsx"
import vid from "/src/images/workout.mp4";

function About() {
  return (
    <div className="aboutPage">
      <div className="hobbies">
        <video src={vid} width="300" height="400" autoPlay muted loop />
        <p>
          <strong>About me:</strong>
          <br />
          I graduated from the University of California, Davis in 2021 with a Bachelor's degree in Computer Science.
          <br />
          <br />
          <strong>When I'm not coding, I like to:</strong>
          <br />
          work out at the gym and the outdoors. (Healthy body, healthy mind!) I also really enjoy cooking. I also enjoy cooking - I feel that it is a fun outlet for me that really lets me express my creative side outside of coding.
        </p>
      </div >
      <h2>Skills</h2>
      <div className="skills">
        <p>
        <strong>Programming Concepts:</strong>
          <br />
          I have learned how to develop full-stack Web applications, for instance to let a user search a database over the Web or to present dynamic information provided by a constantly updating online source through asynchronous, distributed software.
          <br />
          I have also used Python for web scraping and data analysis and visualizations.
          <br />
          <br />
          <strong>Programming Languages: </strong>
          <br />
          JavaScript, HTML, CSS, Python, SQL, Java, C#, C++, C.
          <br />
          <br />
          <strong>Spoken Languages: </strong>
          <br />
          English, Mandarin, Cantonese
        </p>
      </div>
      <h2>Education</h2>
      <div className="education">
        <ShowcaseCard/>
      </div>
      <h2>Experience</h2>
      <div className="experience">
        <ShowcaseCard2/>
      </div>
    </div>
  );
}

export default About;