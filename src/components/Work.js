import React, { useEffect, useState } from "react";
import ScrollSnap from "scroll-snap";
import WorkItem from "./WorkItem";

import styles from './Work.module.css'

import hyperviz from '../static/hyperviz.png'
import studicar from '../static/studicar.png'
import cah from '../static/cah.png'
import website from '../static/website.png'

function Work() {

  var container = React.createRef()

  useEffect(() => {
    if (window.innerWidth < 768) {
      return
    }

    const element = container.current;
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: '100%',
      threshold: 0.05,
      duration: 300
    });

    snapElement.bind();

    return function cleanup() {
      snapElement.unbind();
    };

  });

  var works = [
    {
      image: hyperviz,
      title: "HyperViz App",
      description: "Determining the correct hyperparameters for a machine learning model is difficult. Gridsearch algorithms make this easier, but the generated data still has to be analyzed manually. This tool aims to make this as comfortable and easy as possible.",
      live: "https://hyperviz.mfinn.de/",
      github: "https://github.com/F1nnM/HyperViz",
      languages: ["Python", "HTML"],
      technologies: ["Kubernetes", "Docker", "Streamlit", "Hiplot", "SHAP", "XGBoost", "Matplotlib"]
    },
    {
      image: studicar,
      title: "StudiCar",
      description: "This car-sharing app for the DHBW Heidenheim was initially a project by a group of business engineering students, who asked us to implement it. Once they got graded, they left the project and a friend of mine and I continued to work on it. So far it's still WIP and not released.",
      live: "https:/dev.pwa.studicar.mfinn.de/",
      github: "https://github.com/F1nnM/Studicar",
      languages: ["JS", "CSS", "HTML"],
      technologies: ["Vue.js", "Quasar (PWA)", "Node", "MySQL"]
    },
    {
      image: cah,
      title: "Cards against Humanity Clone",
      description: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Cards against Humanity is a popular card game, and the websites offering that game had a lot of bugs or a complicated UI, so I set out to create simple yet complete, bug-free clone of the game to play with friends. I made it publicly available to also bring the joy of this game to others.",
      live: "https://cah.mfinn.de/",
      github: "https://github.com/F1nnM/Yet-another-Cards-Against-Humanity-clone",
      languages: ["JS + Typescript", "CSS", "HTML"],
      technologies: ["React", "Node", "Colyseus", "Docker"]
    },
    {
      image: website,
      title: "This website",
      description: "Well.. It's this exact website.",
      live: "https://mfinn.de/",
      github: "https://github.com/F1nnM/homepage",
      languages: ["JS", "CSS", "HTML"],
      technologies: ["React"]
    }
  ]

  var initVisiblePages = []
  works.forEach((_, i) => {
    initVisiblePages.push(i === 0)
  })
  const [visiblePages, setVisiblePages] = useState(initVisiblePages);

  function setVisible(index, visible) {
    if (visiblePages[index] === visible)
      return
    let newVisiblePages = [...visiblePages];
    newVisiblePages[index] = visible;
    setVisiblePages(newVisiblePages);
  }

  console.log(visiblePages)

  return (
    <div className={styles.container + " d-flex justify-content-between flex-row w-100"}>
      <div className={styles.hideScrollbar + " flex-grow-1 h-100 overflow-auto"} ref={container}>
        {
          works.map((item, index) => {
            return (
              <div className={styles.cardSizingContainer +" d-flex flex-column justify-content-center"}>
                <WorkItem visibilityChanged={visible => setVisible(index, visible)} data={item} ref={item.ref} />
              </div>
            );
          })
        }
      </div>
      <div className="d-flex flex-column h-100 justify-content-center">
        {works.map((data, index) => {
          return (
            <div className={styles.dot + " d-block " + (visiblePages[index] ? styles.filled : '')} />
          )
        })}
      </div>
    </div>
  );
}

export default Work;
