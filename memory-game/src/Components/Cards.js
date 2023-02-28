import React from 'react';

function Card(props) {
  const {
    card: { src, title, backgroundColor, borderStyle },
    handleGameLogic,
  } = props;

  const cardDesign = {
    backgroundColor: backgroundColor,
    border: borderStyle,
  };

  return (
    <button
      className="card"
      style={cardDesign}
      onClick={handleGameLogic.bind(this, title)}
    >
      <figure>
        <img src={src} alt={title} />
        <title>{title}</title>
      </figure>
    </button>
  );
}

export default Card;
