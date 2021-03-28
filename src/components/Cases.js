import React from "react";
import { useHistory } from "react-router-dom";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

// icons
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

//case study images array
const caseStudies = [
  {
    id: 1,
    subTitle: "Zyania Alonzo",
    title: "An e-commerce store.",
    img: "zyaniaalonzo",
    url: "/case/zyaniaalonzo",
  },
  {
    id: 2,
    subTitle: "Irielivity",
    title: "Coming soon.",
    img: "irielivity",
    url: "/case/zyaniaalonzo",
  },
  {
    id: 3,
    subTitle: "AirPods",
    title: "Coming Soon.",
    img: "carpenter",
    url: "/case-studies",
  },
  {
    id: 4,
    subTitle: "AirPods",
    title: "Coming Soon.",
    img: "carpenter",
    url: "/case-studies",
  },
];

export default function Cases() {
  // router dom history
  let history = useHistory();
  // gsap scroll to animation effect
  gsap.registerPlugin(ScrollToPlugin);

  // handles routing on cases clicked
  const handleOnCaseClicked = (url) => {
    history.push(url);
  };

  // grabs cases container
  const casesContainer = document.getElementById("case-container");

  // scroll left to next cases
  const nextCase = () => {
    gsap.to(casesContainer, {
      duration: 0.9,
      scrollTo: { x: "+=1300", autoKill: true },
      ease: "power2.easeIn",
    });
  };

  // scrolls right to previous cases
  const prevCase = () => {
    gsap.to(casesContainer, {
      duration: 0.9,
      scrollTo: { x: "-=1300", autoKill: true },
      ease: "power2.easeIn",
    });
  };

  return (
    <section className="cases" id="case-container">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev">
            <CasesPrev onClick={prevCase} />
          </div>
          <div className="cases-arrow next">
            <CasesNext onClick={nextCase} />
          </div>
        </div>
        <div className="row" id="rows">
          {/*traverse through case studies array */}
          {caseStudies.map((caseItem) => (
            <div
              className="case"
              key={caseItem.id}
              onClick={() => handleOnCaseClicked(caseItem.url)}
            >
              <div className="case-details">
                <span>{caseItem.subTitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img
                  src={require(`../assets/${caseItem.img}.jpg`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
