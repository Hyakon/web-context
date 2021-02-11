import React, { useContext } from "react";
import WorkContext from "../context/WorkContext";

const Work = ({ match }) => {
  const caseStudy = useContext(WorkContext);
  const name = match.params.name.split("-")[0];
  const client = caseStudy.find((client) => client.name === name);
  return (
    <div>
      <h2>{client.title}</h2>
      <p>{client.text}</p>
    </div>
  );
};

export default Work;
