import React from "react";
import { Grid } from "@material-ui/core";

//components
import { default as AppLink } from "../button";

const services = [
  {
    value: 1,
    label: "UI/UX Design",
  },
  {
    value: 2,
    label: "Website Development",
  },
  {
    value: 3,
    label: "Accesibility",
  },
  {
    value: 4,
    label: "Creative Direction",
  },
];

export default function CaseOverview() {
  return (
    <div style={styles.topSpacer}>
      <Grid container spacing={5}>
        <Grid item xs={12} lg={6} md={6}>
          <p className="font-md font-bold">
            zyaniaalonzo.com - An online e-commerce store built for a talented
            artist to display & market her craft.
          </p>
          <div style={styles.leftSpacer}>
            <ul className="list-style text-uppercase font-sm">
              {services &&
                services.map((service) => (
                  <li key={service.value}>{service.label}</li>
                ))}
            </ul>
          </div>
          <div style={{ marginTop: "40px" }}>
            <AppLink
              bgColor="black"
              color="white"
              label="View Live Site"
              width="150px"
              url="https://www.zyaniaalonzo.com"
            />
          </div>
        </Grid>

        <Grid item xs={12} lg={6} md={6}>
          <p className=" font-bold text-uppercase">Challenge</p>
          <p className="">
            Known as the “Internet’s highest honor,” The Webby Awards are the
            leading international award recognizing digital excellence. Founded
            in 1996 during the Web’s infancy, what started as a site with 15
            categories is now a platform with 13,000 entries from nearly 70
            countries worldwide.
          </p>
          <p className="">
            Known as the “Internet’s highest honor,” The Webby Awards are the
            leading international award recognizing digital excellence. Founded
            in 1996 during the Web’s infancy, what started as a site with 15
            categories is now a platform with 13,000 entries from nearly 70
            countries worldwide.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

const styles = {
  topSpacer: {
    marginTop: "50px",
  },
  leftSpacer: {
    marginLeft: "-40px",
  },
};
