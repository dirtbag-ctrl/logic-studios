import React from "react";

// icons
import CallMadeIcon from "@material-ui/icons/CallMade";
export default function AppButton({
  label,
  bgColor,
  color,
  width,
  url,
}) {
  return (
    <a
      className="btn"
      style={{
        borderRadius: "25px",
        backgroundColor: bgColor,
        color: color,
        textTransform: "none",
        width: width,
        padding: "6px 20px",
        height: "8px",
        textAlign: "center",
        textDecoration: "none",
      }}
      href={url}
      target="#"
    >
      {label}
      <CallMadeIcon style={{ fontSize: "16px" }} />
    </a>
  );
}
