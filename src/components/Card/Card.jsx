import React, { useState } from "react";
import "./card.scss";
import num2str from "../../helpers/num-to-string.js";
import catPhoto from "../../images/Photo.png";

export default function Card(props) {
  const data = props.data;
  const { heading, name, composition, unit, desription } = data;
  const defultStatus = data.status;
  const weight = parseFloat(data.weight).toLocaleString("ru-RU");
  const portions = parseInt(data.portions).toLocaleString("ru-RU");
  const mouses = parseInt(data["mouse-count"]);
  const headingHovered = data["heading-hovered-selected"];
  const wordForms = data["word-forms"].replace(" ", "").split(",");
  const desriptionLinkText = data["desription-link"];
  const selectedDesctiprion = data["selected-desription"];

  const [status, setStatus] = useState(defultStatus);
  const [isHovered, setIsHovered] = useState(false);

  function getOffer() {
    const mouse = num2str(mouses, wordForms);
    let str;
    if (mouses === 1) {
      str = mouse;
    } else {
      str = (
        <>
          {" "}
          <strong>{mouses}</strong> {mouse}{" "}
        </>
      );
    }
    return (
      <>
        <strong>{portions}</strong> порций {str}
      </>
    );
  }

  function getCardClass() {
    const classes = [];
    classes.push("card");
    status === "active" && classes.push("card_active");
    status === "disabled" && classes.push("card_disabled");
    return classes.join(" ");
  }

  function toggleStatus() {
    switch (status) {
      case "default":
        setStatus("active");
        break;
      case "active":
        setStatus("default");
        break;
      default:
        break;
    }
  }

  function getDesctiption() {
    switch (status) {
      case "active":
        return selectedDesctiprion;
      case "disabled":
        return <>Печалька {composition} закончился.</>;
      default:
        return (
          <>
            {" "}
            {desription}{" "}
            <span className="card__link" onClick={() => toggleStatus()}>
              {desriptionLinkText}.
            </span>{" "}
          </>
        );
    }
  }

  function getHeadingClasses() {
    const classes = [];
    classes.push("card__heading");
    status === "active" && isHovered && classes.push("card__heading_hovered");
    return classes.join(" ");
  }

  function getHeading() {
    return isHovered && status === "active" ? headingHovered : heading;
  }

  return (
    <div
      className={getCardClass()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card__block" onClick={() => toggleStatus()}>
        <div className={getHeadingClasses()}>{getHeading()}</div>
        <div className="card__name">{name}</div>
        <div className="card__composition">{composition}</div>
        <div className="card__offer">{getOffer()} в подарок</div>
        <div className="card__image-wrapper">
          <img className="card__image" src={catPhoto} alt="cat" />
        </div>
        <div className="card__weight">
          <div className="card__weight-value">{weight}</div>
          <div className="card__unit">{unit}</div>
        </div>
      </div>
      <div className="card__description">{getDesctiption()}</div>
    </div>
  );
}
