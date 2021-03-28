import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// components
import Header from "./components/Header";

// stylesheet
import "./styles/App.scss";

// pages
import { Home, CaseStudies, ZyaniaAlonzo } from "./pages";

// set time out for when grabbing device size
function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  // Prevent white flash screen when reloaded
  gsap.to("body", 0, { css: { visibility: "visible" } });

  // set dimensions based on vh
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    // Grab inner height of window for mobile when dealing with vh
    let vh = dimensions.height * 0.01;
    // Set CSS variable vh
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debouncedHandleReize = debounce(function HandleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    });

    // resize window depending on device screen
    window.addEventListener("resize", debouncedHandleReize);

    // clean up to remove event lister
    return () => {
      window.removeEventListener("resize", debouncedHandleReize);
    };
  });

  return (
    <Router>
      <div>
        <Header />
        <Route
          render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" render={() => <Home />} />
              <Route
                exact
                path="/project/zyaniaalonzo"
                render={() => <ZyaniaAlonzo />}
              />
              <Route
                exact
                path="/case-studies"
                render={() => <CaseStudies />}
              />
            </Switch>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
