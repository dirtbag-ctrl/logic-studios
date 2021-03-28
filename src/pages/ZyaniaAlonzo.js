import React from "react";
import { Divider } from "@material-ui/core";
import { motion } from "framer-motion";

// components
import { CaseIntroImg, CaseOverview } from "../components/case-studies";
// import SmoothScroll from "../components/smooth-scroll";
import file from "../assets/video.mp4";

export default function ZyaniaAlonzo() {
  return (
   
      <div className="page">
        <div className="row">
          <CaseIntroImg />
        </div>
      </div>
   
  );
}
const styles = {
  dividerTop: {
    backgroundColor: "black",
    marginTop: "100px",
    marginBottom: "80px",
  },
  dividerBottom: {
    backgroundColor: "black",
    marginTop: "80px",
    marginBottom: "100px",
  },
  bottomSpacer: {
    marginBottom: "-16px",
  },
  topSpacer: {
    marginTop: "-10px",
  },
};
