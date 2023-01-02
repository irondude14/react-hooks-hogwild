import React, { useState } from 'react';
import Filtering from './Filtering';
import HogCard from './HogCard';

export default function HogsContainer({ hogs }) {
  const [filterBy, setFilterBy] = useState(false);
  const [sortState, setSortState] = useState('none');

  let filteredHogs = hogs
    .filter((hog) => {
      return hog.greased === filterBy;
    })
    .sort((hogA, hogB) => {
      if (sortState === 'none') {
        return true;
      } else if (sortState === 'name') {
        return hogA.name.toUpperCase().localeCompare(hogB.name.toUpperCase());
      } else if (sortState === 'weight') {
        return hogA.weight - hogB.weight;
      }
    });

  const displayHogs = filteredHogs.map((hog) => {
    return <HogCard hog={hog} />;
  });

  return (
    <div>
      <Filtering
        setFilterBy={setFilterBy}
        hogs={hogs}
        setSortState={setSortState}
      />
      <div>{displayHogs}</div>
    </div>
  );
}
