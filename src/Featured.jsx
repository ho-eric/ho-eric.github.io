import React from 'react';
import Featured1 from '/src/Featured1.jsx';
import Featured2 from '/src/Featured2.jsx';


function Featured() {

  return (
    <div>
      <h2> Featured Projects</h2>
      <div className="featuredProjects">
        <div className="proj">
          <a href="https://slice-the-pie.erho20.repl.co/"
            className="projLink"
            target="_blank"
            rel="noreferrer noopener">
            <Featured1/>
          </a>
        </div>
        <div className="proj">
          <a href="https://Fitness-Log.erho20.repl.co"
            className="projLink"
            target="_blank"
            rel="noreferrer noopener">
            <Featured2/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Featured;