import React, { useState } from 'react';

export default function HogCard({ hog }) {
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div key={hog.name} className='pigTile' onClick={handleShowMore}>
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} />
      {showMore && (
        <ul className='normalText'>
          <li className='hoggyText'>Specialty: {hog.specialty}</li>
          <li className='hoggyText'>Weight: {hog.weight}</li>
          <li className='hoggyText'>Greased: {hog.greased ? 'Yes' : 'No'}</li>
          <li className='hoggyText'>Medal: {hog['highest medal achieved']}</li>
        </ul>
      )}
    </div>
  );
}
