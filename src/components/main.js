import React from 'react';
import img1 from './image1.jpg';
import img2 from './image2.jpg';
import img3 from './image3.jpg';

export default function Main() {
  return (
    <div className='container'>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active h-25">
                <img src={img1} className="d-block w-100 h-25" alt="..." />
                </div>
                <div className="carousel-item h-25">
                <img src={img2} className="d-block w-100 h-25" alt="..." />
                </div>
                <div className="carousel-item h-25">
                <img src={img3} className="d-block w-100 h-25" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    </div>
  );
}
