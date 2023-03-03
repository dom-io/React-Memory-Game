import React, { useEffect, useState } from 'react';
import Card from './Cards';
import accio from '../images/accio.png';
import arresto from '../images/arresto.png';
import bombarda from '../images/bombarda.png';
import confringo from '../images/confringo.png';
import depulso from '../images/depulso.png';
import descendo from '../images/descendo.png';
import diffendo from '../images/diffendo.png';
import expelliarmus from '../images/expelliarmus.png';
import flipendo from '../images/flipendo.png';
import glacius from '../images/glacius.png';
import levioso from '../images/levioso.png';
import transformation from '../images/transformation.png';

function CardsContainer(props) {
  const { handleGameLogic, score, highScore } = props;

  let images = [
    {
      src: accio,
      title: 'Accio',
      backgroundColor: 'rgb(117, 7, 117)',
    },
    {
      src: arresto,
      title: 'Arresto Momentum',
      backgroundColor: 'rgb(218, 218, 19)',
    },
    {
      src: bombarda,
      title: 'Bombarda',
      backgroundColor: 'rgb(192, 13, 13)',
    },
    {
      src: confringo,
      title: 'Confringo',
      backgroundColor: 'rgb(192, 13, 13)',
    },
    {
      src: depulso,
      title: 'Depuslo',
      backgroundColor: 'rgb(117, 7, 117)',
    },
    {
      src: descendo,
      title: 'Descendo',
      backgroundColor: 'rgb(117, 7, 117)',
    },
    {
      src: diffendo,
      title: 'Diffendo',
      backgroundColor: 'rgb(192, 13, 13)',
    },
    {
      src: expelliarmus,
      title: 'Expelliarmus',
      backgroundColor: 'rgb(192, 13, 13)',
    },
    {
      src: flipendo,
      title: 'Flipendo',
      backgroundColor: 'rgb(117, 7, 117)',
    },
    {
      src: glacius,
      title: 'Glacius',
      backgroundColor: 'rgb(218, 218, 19)',
    },
    {
      src: levioso,
      title: 'Levioso',
      backgroundColor: 'rgb(218, 218, 19)',
    },
    {
      src: transformation,
      title: 'Transformation',
      backgroundColor: 'rgb(218, 218, 19)',
    },
  ];

  const [cards, setNewCards] = useState(images);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomId = Math.floor(Math.random() * i);
      [newCards[randomId], newCards[i]] = [newCards[i], newCards[randomId]];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
  }, [score, highScore]);

  return (
    <div className="card-wrapper">
      {cards.map((card) => (
        <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
      ))}
    </div>
  );
}

export default CardsContainer;
