import React, {useState} from 'react';

const Air = ({airport1, airport2, date1, date2, time1, time2, price1, btn1}) => {
  const [buyTicket,setBuyTicket] = useState(0)
  const resSum =()=>{
    setBuyTicket(buyTicket + 1) 
  }

  return (
      <div className='elastic'>
          <div className="italic">Место вылета: {airport1}</div>
          <div className="italic">Место прилета: {airport2}</div>
          {/* <div className="italic">Начало продаж билетов: {date1}</div>
          <div className="italic">Конец продаж билетов: {date2}</div> */}
          <div className="italic">Время вылета: {time1}</div>
          <div className="italic">Время прилета: {time2}</div>
          <div className="italic">Цена: {price1}$</div>
          <div className="italic">Куплено билетов:{buyTicket}</div>
          <div className="italic_button"><button className='italic_btn' onClick={resSum}>Купить билет:</button></div>
      </div>
  );
};       

export default Air;