import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <img
        className="element__photo"
        alt={card.name}
        src={card.link}
        onClick={handleClick}
      />
      <button className="element__delete" type="button" aria-label="Удалить" />
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button
            className="element__like"
            type="button"
            aria-label="Нравится"
          />
          <h3 className="element__counter">{card.likes.length}</h3>
        </div>
      </div>
    </article>
  );
}

export default Card;