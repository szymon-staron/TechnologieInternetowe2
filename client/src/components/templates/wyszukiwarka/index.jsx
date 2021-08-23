import React, { useState } from 'react';

export const Wyszukiwarka = () => {
  const [search, setSearch] = useState('');

  const handleSetSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nazwa potrawy"
        value={search}
        onChange={handleSetSearch}
      />
    </div>
  );
};
