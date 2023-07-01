import React, { useState } from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import AirList from './AirList';
import './Services.css'
const data = MOCK_DATA;


const Services = () => {
  const [searchValue, setSearchValue] = useState('');
  const airList = data;

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value.trim());
  };

  return (
    <div>
      <input className='sersear' type="text" id="elastic" placeholder='...' onChange={handleSearchChange} value={searchValue} />
      <AirList airList={airList} searchValue={searchValue} />
    </div>
  );
};

export default Services;
