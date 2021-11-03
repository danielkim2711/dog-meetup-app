import React from 'react';

const Card = () => {
  return (
    <div class='card'>
      <div class='card__container card__sedan'>
        <h1>Sedans</h1>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button class='btn btn__sedan'>Learn More</button>
      </div>
      <div class='card__container card__suv'>
        <h1>SUVs</h1>
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button class='btn btn__suv'>Learn More</button>
      </div>
      <div class='card__container card__luxury'>
        <h1>Luxury</h1>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button class='btn btn__luxury'>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
