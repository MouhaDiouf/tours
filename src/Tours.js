import React from 'react';
import Tour from './Tour';

function Tours({ tours }) {
  return (
    <section>
      <h2>Our Tours</h2>
      <div className="underline"></div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
