import React from "react";
import { Link, Route } from "react-router-dom";
import Work from "../components/Work";
import WorkContext from "../context/WorkContext";

const Works = ({ match }) => {
  const caseStudy = [
    {
      name: "Platon",
      title: "Le Challenge",
      text: `Platon a décidé de se lancer à l'époque malgré une crise économique difficile.  
      Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.`,
    },
    {
      name: "Solane",
      title: "Solane est le premier vendeur de fraises du Poitou-Charentes",
      text: `Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.`,
    },
    {
      name: "Sedal",
      title:
        "Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas",
      text: `Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, "les derniers seront les premiers".`,
    },
  ];
  return (
    <div className="light">
      <h2>Au fil des années, nous avons pu accompagner les meilleurs.</h2>
      <p>
        Découvrez pas à pas comment nous avons été présent pour lancer vos
        marques préférées.
      </p>
      <ul>
        {caseStudy.map((client) => (
          <li key={client.name}>
            <Link to={`${match.url}/${client.name}-study-case`}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Add provider  for Work*/}
      <WorkContext.Provider value={caseStudy}>
        <Route path="/works/:name" component={Work} />
      </WorkContext.Provider>
    </div>
  );
};

export default Works;
