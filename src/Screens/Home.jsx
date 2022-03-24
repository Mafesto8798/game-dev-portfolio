import React from "react";
import Nav from "../Components/Nav";
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
import Current from "../Images/PlantGame/Current.PNG";
import GameplayPlant from "../Images/PlantGame/GamePlayPlant.PNG";
import plantDemo from "../Images/PlantGame/plantDemo.mp4";

export default function Home() {
  return (
    <>
      <Nav />
      <div id="homepage">
        <section id="bio">
          <h1 id="info">
            Welcome! I'm <span id="title">Kenny Chavarriaga</span>, I have been
            developing games in Unity for over a year now and have learned so
            much about the process of taking a game from idea to a completed
            project. I feel like combining my skills in web development with
            game development will help me showcase my work.
          </h1>
        </section>
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
            "Space shooter styled game where you blast aliens by tapping on them",
            "Taking a concept from idea to product",
            "10 Level progression including a boss battle with a health bar",
          ]}
          features2={[
            "Originally had a score system but felt with random enemies the scores will not be consistent",
            "Unity 2D sprite animations and particle effects",
          ]}
          description="The biggest challenges I've faced during this game's development was implementing a singleton pattern to 
          have an object to store the player's progress and unlocking levels as you finished, as well as working more closely with Unity UI to make
          the experience more immersive.
          "
        />
        <Project
          title="Idle Bonsai"
          thumbnail={Current}
          img1={Initial}
          img2={Code1}
          img3={GameplayPlant}
          img4={SO}
          features1={[
            "Inventory that takes care of adding, removing, and using items.",
            "Working with Unity's Cinemachine to create different perspectives and give the player a better sense of environment.",
          ]}
          features2={[
            "Using scriptable objects to create reusable code and deliver dynamic experiences.",
            "Heavily communicating with UI components to display various pieces of data.",
            "Worked on targeting mobile platforms and uploaded to Google Play Store.",
          ]}
          demo={plantDemo}
          description="I've always appreciated relaxing idle games where you do not have to lose or really master mechanics, and felt that making something
          that can be just enjoyable. I knew I wanted to have currency and a store to add choices and interactions to the game."
        />
      </section>
    </>
  );
}
