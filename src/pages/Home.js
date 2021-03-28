import React, { useEffect, useState } from "react";
import gsap from "gsap";

import Banner from "../components/Banner";
import Cases from "../components/Cases";
import IntroOverlay from "../components/IntroOverlay";

// home animations
// On load timeline GSAP Animations
const tl = gsap.timeline();
const homeAnimation = (completeAnimation) => {
  tl.from(".line span", 1.2, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", 1.5, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", 0, { css: { display: "none" } })
    .from(".case-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true); // set animation completed to true
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  return (
    <>
      {/* remove overlay top when page load is completed */}
      {animationComplete === false ? <IntroOverlay /> : " "}
      <IntroOverlay />
      <Banner />
      <Cases />
    </>
  );
}
