import React from "react";
import { Divider, Grid } from "@material-ui/core";

import projectImg from "../../assets/img-3.jpg";
export default function CaseIntroImg() {
  return (
    <div className="project-intro-wrapper"> 
      <p className="text-left project-name">Zyania Alonzo - Ecommerce </p>
      <Divider style={{ backgroundColor: "black" }} />
      <div className="project-details">
        <p>11.12.21</p>
        <p>5 min read</p>
        <p>View</p>
      </div>

      <Grid container spacing={1}>
        <Grid item lg={2} md={2} sm={2}></Grid>
        <Grid item lg={10} md={10} sm={10} xs={12}>
          <img src={projectImg} alt="" width="100%" />
        </Grid>
      </Grid>
    </div>
  );
}
