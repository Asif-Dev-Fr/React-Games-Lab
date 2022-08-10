import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import * as ProjectsList from "../../assets/data/projectsList.json";

const Homepage = () => {
  const [projects] = useState(ProjectsList);
  return (
    <div className="homepage">
      {Object.entries(projects.list).map((project, key) => (
        <React.Fragment key={"project_" + key}>
          <Link to={project[1].path} className={key !== 0 ? "mt-2" : ""}>
            <Button variant="dark">{project[1].title}</Button>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Homepage;
