
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { staggerText, staggerReveal, fadeInUp, handleSandwichReturn,  handleSandwich,  staggerRevealClose } from "./Animations.js";

import spicyGarlicShrimp from "../images/GarlicShrimp_WrapWhite.webp";
import basilCrabCake from "../images/BasilCrab_BowlOvhd.webp";
import thaiBBQ from "../images/ThaiBBQFull.webp";
import chickenKatsu from "../images/ChickenKatsu_Halloween.webp";
import koreanCheese from "../images/KoreanCheesesteak_Halloween.webp";
import madMonk from "../images/MadMonk_Hold_Crop2.webp";

const allSandwiches = [
  {name: "Spicy Garlic Shrimp", image: spicyGarlicShrimp},
  {name: "Basil Crab Cake", image: basilCrabCake},
  {name: "Thai BBQ Pork Belly", image: thaiBBQ},
  {name: "Chicken Teriyaki Katsu", image: chickenKatsu},
  {name: "Korean Cheesesteak", image: koreanCheese},
  {name: "Mad Monk", image: madMonk}
];

const Zenwich = ({ state }) => {
  // Create DOM variables
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let sandwichBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    // toggle Menu
    if (state.isClicked === false) {
      staggerRevealClose(reveal2, reveal1);
      // display === none
      gsap.to(menuLayer, 
        { duration: 1, 
          css: { display: "none" } 
        });
    } else if (state.isClicked === true || (state.isClicked === true && state.initial === null)
    ) {
      // display === block
      gsap.to(menuLayer, { 
        duration: 0, 
        css: { display: "block" } 
      });
      // 100% height
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={element => (menuLayer = element)} 
    className='zenwich-menu'>
      <div
        ref={element => (reveal1 = element)}
        className='menu-secondary-background-color'></div>
      <div ref={element => (reveal2 = element)} className='menu-layer'>
        <div
          ref={element => (sandwichBackground = element)}
          className='menu-sandwich-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
                <nav>
                  <ul>
                    <li>
                      <Link 
                      ref={element => (line1 = element)} 
                      to='/sandwiches'>Sandwiches</Link>
                    </li>
                    <li>
                      <Link 
                      ref={element => (line2 = element)} 
                      to='/sides'>Sides</Link>
                    </li>
                    <li>
                      <Link 
                      ref={element => (line3 = element)} 
                      to='/drinks'>Drinks</Link>
                    </li>
                </ul>
              </nav>
              <div className="info">
                <h3>Location:</h3>
                  <p>375 S Rt 59<br/>
                  Aurora, Illinois 60504</p>
                <h3>Hours of Operation:</h3>
                <p>
                  Monday 11:00 am - 7:00 pm<br/>
                  Tuesday 11:00 am - 7:00 pm<br/>
                  Wednesday 11:00 am - 7:00 pm<br/>
                  Thursday 11:00 am - 7:00 pm<br/>
                  Friday 11:00 am - 7:00 pm<br/>
                  Saturday 11:00 am - 7:00 pm<br/>
                  Sunday 11:00 am - 7:00 pm
                </p>
              </div>
              <div className="sandwiches">
                Sandwiches:
                {allSandwiches.map(sandwich => (
                 <span
                 key={sandwich.name}
                 onMouseEnter={() => handleSandwich(sandwich.image, sandwichBackground)}
                 onMouseOut={() => handleSandwichReturn(sandwichBackground)}>
                 {sandwich.name}
               </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Zenwich;






/*
<div className="info">


<h3>Phone Number:</h3>
<ul>630.898.6848</ul>
</div>
*/
