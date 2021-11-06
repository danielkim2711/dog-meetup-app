import React from 'react';

const Card = () => {
  return (
    <div className='card'>
      <div className='card__container card__fast'>
        <h1>Fast</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ad nulla
          commodi pariatur inventore enim. Aut maxime expedita quasi quibusdam!
        </p>
        <button className='btn btn__fast'>Learn More</button>
      </div>
      <div className='card__container card__easy'>
        <h1>Easy</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          explicabo mollitia ex fuga aperiam obcaecati doloribus cum rem
          necessitatibus consectetur?
        </p>
        <button className='btn btn__easy'>Learn More</button>
      </div>
      <div className='card__container card__reliable'>
        <h1>Reliable</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam enim
          voluptatum ea porro aut deserunt blanditiis provident odit
          perspiciatis commodi?
        </p>
        <button className='btn btn__reliable'>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
