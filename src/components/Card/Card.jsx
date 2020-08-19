import React from "react";
export default function Card(props) {
  const data = props.data;
  const {
    status,
    heading,
    name,
    composition,
    portions,
    weight,
    desription
  } = data;
  const headingHovered = data['heading-hovered-selected']
  const wordForms= data['word-forms'].split(',')
  const desriptionLinkText= data['desription-link']
  const selectedDesctiprion= data['selected-desription']


  return (
    <div className="card">
      <div className="card-block">
        <div className="card__heading"></div>
        <div className="card__name"></div>
        <div className="card__composition"></div>
        <div className="card__offer"></div>
        <div className="card__weight"></div>
      </div>
      <div className="card__description"></div>
    </div>
  );
}
