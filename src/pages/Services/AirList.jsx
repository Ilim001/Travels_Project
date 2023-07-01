import React from 'react';
import Air from './Air';

const AirList = ({ airList, searchValue }) => {
  const filteredAirList = airList.filter((air) => {
    const searchString = searchValue.toLowerCase();

    return (
      air.departure_airport.toLowerCase().includes(searchString) ||
      air.arrival_airport.toLowerCase().includes(searchString)
    );
  });

  
  return (
    <div>
      {filteredAirList.map((air, index) => (
        <Air
          key={index}
          airport1={air.departure_airport}
          airport2={air.arrival_airport}
          date1={air.departure_date}
          date2={air.arrival_date}
          time1={air.departure_time}
          time2={air.arrival_time}
          price1={air.price}
          
        />
      ))}
    </div>
  );
};

export default AirList;