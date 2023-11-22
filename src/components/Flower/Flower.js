import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import './Flower.css'
function Flower() {
  return (
    <div className='back'>
    <div >
    <h1 className='text-center display-2 heading'>Flowers</h1>
    <p className='text-center'></p>
    
    <ul className="uls list-inline justify-content-center row col-lg-3 col-md-12 col-sm-3  mx-auto">
    <li className="list-inline-item col">
      <Link className=" active btn btn-dark "  to="jasmine">Jasmine</Link>
    </li>
    <li className="list-inline-item col">
      <Link className=" active btn btn-dark "  to="jasmine">Rose</Link>
    </li>
    <li className="list-inline-item col">
      <Link className=" active btn btn-dark "  to="jasmine">Hibiscus</Link>
    </li>
    </ul>
    <Carousel data-bs-ride="carousel">
        <Carousel.Item data-bs-interval="500">
        <img
          className="d-block m-auto w-50 " 
          
          src="https://st.depositphotos.com/1605515/2518/i/450/depositphotos_25183613-stock-photo-sunny-terrace-with-a-lot.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item data-bs-interval="500">
        <img
          className="d-block m-auto w-50 " 
          
          src="https://cdn.shopify.com/s/files/1/1380/2059/articles/Feat_Image-Easy_Flowers_1024x1024.jpg?v=1645521860"
          alt="First slide"
        />
      </Carousel.Item >
      <Carousel.Item data-bs-interval="1000">
        <img
          className="d-block  m-auto w-50"
          src="https://4.imimg.com/data4/RR/MN/MY-8729085/red-rose-plant-500x500.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      
    </Carousel>
  <Outlet/>
</div>
</div>
  )
}

export default Flower