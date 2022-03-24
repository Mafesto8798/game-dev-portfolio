import React from "react";

export default function Project({
  title,
  thumbnail,
  img1,
  img2,
  img3,
  img4,
  demo,
  features1,
  features2,
  description,
}) {
  return (
    <>
      <div className="project-container">
        <h1 id="project-title">{title}</h1>
        <a href={thumbnail} target="_blank" rel="noreferrer">
          <img src={thumbnail} alt="screenshot" id="project-thumbnail" />
        </a>
        <section className="two-column-split">
          <ul>
            {features1.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
          <ul>
            {features2.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
        </section>
        <div id="screenshot-gallery">
          <a href={img1} target="_blank" rel="noreferrer">
            <img src={img1} alt="screenshot" className="project-screenshot" />
          </a>
          <a href={img2} target="_blank" rel="noreferrer">
            <img src={img2} alt="screenshot" className="project-screenshot" />
          </a>
          <a href={img3} target="_blank" rel="noreferrer">
            <img src={img3} alt="screenshot" className="project-screenshot" />
          </a>
          <a href={img4} target="_blank" rel="noreferrer">
            <img src={img4} alt="screenshot" className="project-screenshot" />
          </a>
          <video controls className="project-screenshot">
            <source src={demo} type="video/mp4" />
          </video>
        </div>
        <div id="project-description">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
