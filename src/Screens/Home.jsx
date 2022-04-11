import React from "react";
import Project from "../Components/Project";
import title from "../Images/SpaceCrush/Title.PNG";
import game1 from "../Images/SpaceCrush/Gameplay1.PNG";
import rules from "../Images/SpaceCrush/Rules.PNG";
import boss from "../Images/SpaceCrush/Boss.PNG";
import levels from "../Images/SpaceCrush/Levels.PNG";
import demo from "../Images/SpaceCrush/SpaceCrush.mp4";
import Initial from "../Images/PlantGame/Initial.PNG";
import Code1 from "../Images/PlantGame/Code1.PNG";
import SO from "../Images/PlantGame/SO.PNG";
import Current from "../Images/PlantGame/Current.jpg";
import GamePlay from "../Images/PlantGame/GamePlay.jpg";
import plantDemo from "../Images/PlantGame/plantDemo.mp4";
import arrow from "../Images/arrow.png";

export default function Home() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  reveal();

  return (
    <>
      <div id="homepage">
        <section id="bio">
          <h1 id="info">
            Kenny Chavarriaga
            <br />
            <span id="title">Unity Programmer</span>
          </h1>
        </section>
        <img src={arrow} alt="arrow" id="arrow" />
      </div>
      <section id="projects-container">
        <Project
          title="Space Crush"
          thumbnail={title}
          img1={game1}
          img2={rules}
          img3={levels}
          img4={boss}
          demo={demo}
          features1={[
            "Worked with persistent data throughout scenes",
            "Taking a concept from idea to product.",
            "10 Level progression including a boss battle with a health bar.",
          ]}
          features2={[
            "Implemented Unity Ads.",
            "Best practices for OOP.",
            "Unity 2D sprite animations and particle effects.",
          ]}
          description="The biggest challenges I've faced during this game's development was implementing a singleton pattern to 
          have an object to store the player's progress and unlocking levels as you finished, as well as working more closely with Unity UI to make
          the experience more immersive. I really enjoyed creating the different enemies despite my drawing skills, and felt that making the camera shake, having the background move infinitely, 
          and having particles go all over the screen really makes it more of a seamless experience.
          "
        />
        <Project
          title="Idle Bonsai"
          thumbnail={Current}
          img1={Initial}
          img2={Code1}
          img3={GamePlay}
          img4={SO}
          features1={[
            "Inventory that handles of adding, removing, and using complex items.",
            "Working with Unity's Cinemachine to create different perspectives and give the player a better sense of environment.",
          ]}
          features2={[
            "Using scriptable objects to create reusable code and deliver dynamic experiences.",
            "Heavily communicating with UI components to update displays with the current state of the game.",
            "Play testing and optimization targeted for mobile platforms.",
          ]}
          demo={plantDemo}
          description="I wanted to make a game follow a more calm and relaxing approach, something to kick back and just play to let your mind wander, I was inpsired by another plant game
          I've played on itch.io and wanted to do something similar but with a twist. I love the art of bonsai and have recently started diving into it and thought it would be a perfect chance
          to implemet that theme with a game to grow plants. My first thought was to grow plants with a watering timer making them more valuable, and selling them to make a profit and to be able to
           purchase more exciting plants.  "
        />
      </section>
      <footer>
        <p>©Kenny Chavarriaga</p>
        <p>Kenny.Chavarriaga@gmail.com</p>
        <p>401-369-2607</p>
      </footer>
    </>
  );
}
