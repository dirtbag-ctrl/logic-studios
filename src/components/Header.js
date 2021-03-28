import React, { useEffect } from "react";
import { TimelineMax, Expo } from "gsap";
import {
  AppBar,
  makeStyles,
  Toolbar,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory()
  useEffect(() => {
    // TweenMax.from(".navbar", 2, {
    //   left: "-20%",
    //   ease: Expo.easeInOut,
    //   delay: 0.4,
    // });

    var t1 = new TimelineMax({ paused: true });

    t1.to(".nav1", 1.8, {
      width: "100%",
      ease: Expo.easeInOut,
    });

    t1.staggerTo(
      ".nav-item a",
      0.6,
      { top: "0px", ease: Expo.easeInOut },
      0.1,
      "-=0.8"
    );

    t1.reverse();

    // grabs open and close menu links
    const openMenu = document.querySelector(".menu-open");
    const closeMenu = document.querySelector(".menu-close");

    // open and click action for menu
    openMenu.addEventListener("click", () => {
      t1.reversed(!t1.reversed());
    });
    closeMenu.addEventListener("click", () => {
      t1.reversed(!t1.reversed());
    });

    // grabs all nav links
    const navItems = document.getElementById("nav-items").querySelectorAll("a");

    // on click action for when links are clicked
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        t1.reversed(!t1.reversed());
      });
    });
  }, []);
  return (
    <>
      <div className={classes.root}>
        <HideOnScroll>
          <AppBar
            position="fixed"
            style={{ backgroundColor: "white", boxShadow: "none", zIndex: 5 }}
          >
            <Toolbar>
              <p className="app-name" onClick={() => history.push("/")}>Logic Studios</p>
              <p className="menu-open">Menu</p>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </div>
      <div className="nav-container">
        <div className="nav1">
          <div className="menu-close-wrapper">
            <p className="menu-close">Close</p>
          </div>
          <div className="nav-items" id="nav-items">
            <div className="nav-item">
              <Link to="/">Home</Link>
              <div className="nav-item-wrapper"></div>
            </div>
            <div className="nav-item">
              <Link to="/project/zyaniaalonzo">Portfolio</Link>
              <div className="nav-item-wrapper"></div>
            </div>
            <div className="nav-item">
              <Link to="#">About</Link>
              <div className="nav-item-wrapper"></div>
            </div>
            <div className="nav-item">
              <Link to="#">Contact</Link>
              <div className="nav-item-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
