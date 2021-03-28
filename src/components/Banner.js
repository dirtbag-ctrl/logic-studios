import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

//landing title in home page
export default function Banner() {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>We craft digital solutions,</span>
            </div>
            <div className="line">
              <span>for end users.</span>
            </div>
          </h2>

          <div className="btn-row">
            <NavLink to="/about" exact>
              More about us <RightArrow />{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
