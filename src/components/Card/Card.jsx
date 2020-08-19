import React from "react";
import "./card.scss";
import num2str from "../../helpers/num-to-string.js";
import catPhoto from "../../images/Photo.png";
export default function Card(props) {
  console.log(props.data);
  const data = props.data;
  const { status, heading, name, composition, unit, desription } = data;
  const weight = parseFloat(data.weight).toLocaleString("ru-RU");
  const portions = parseInt(data.portions).toLocaleString("ru-RU");
  const mouses = parseInt(data["mouse-count"]);
  const headingHovered = data["heading-hovered-selected"];
  const wordForms = data["word-forms"].replace(" ", "").split(",");
  const desriptionLinkText = data["desription-link"];
  const selectedDesctiprion = data["selected-desription"];

  function getOffer() {
    const mouse = num2str(mouses, wordForms);
    const str =
      mouses === 1 ? (
        mouse
      ) : (
        <>
          <strong>{mouses}</strong> {mouse}
        </>
      );
    return (
      <>
        <strong>{portions}</strong> порций {str}
      </>
    );
  }
  return (
    <div className="card">
      <div className="card__block">
        <div className="card__heading">{heading}</div>
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
      <div className="card__description">
        {desription} <span className="card__link">{desriptionLinkText}.</span>
      </div>
    </div>
  );
}
