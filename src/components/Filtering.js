import React from 'react';

export default function Filtering({ setFilterBy, setSortState, hogs }) {
  function handleFilter(event) {
    setFilterBy(event.target.checked);
  }

  function handleSort(event) {
    setSortState(event.target.value);
  }

  // hogs.sort((a, b) => {
  //   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  //   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }
  //   return 0;
  // });

  return (
    <>
      <form>
        <label>Is piggy greased? </label>
        <input type='checkbox' onChange={handleFilter} />
      </form>
      <div>
        <label>Sort by: </label>
        <select defaultValue={'none'} onChange={handleSort}>
          <option value='none'>None</option>
          <option value='name'>Name</option>
          <option value='weight'>Weight</option>
        </select>
      </div>
    </>
  );
}
