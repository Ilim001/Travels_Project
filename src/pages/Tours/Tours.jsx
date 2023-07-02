import React, {useState} from 'react'
import './Tours.css'

import data from './TemplateData.json'


const Tour = () => {
const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='templateContainer'>
      <div className='searchInput_Container'>
        <input id='searchInput' type='text' placeholder='Search here...' onChange={(event) =>{
          setSearchTerm(event.target.value)
        }}></input>
      </div>
    <div className='template_Container'>
      {
        data
           .filter((val) => {
            if (searchTerm === ''){
              return val
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase()))
            return val;
           })
           .map((val) => {
            return(
              <div className='template' key={val.id}> 
                  <img src={val.image} alt='' />
                  <h3>{val.title}</h3>
                  <p className='price'>{val.price}</p>
              </div>
            )
           })
      }
    </div>
    </div>
  );
}

export default Tour;





{/* <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
