import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import './Vegetable.css'
function Vegetable() {
    
  return (
    <div className='back2'>
        <div >
        <h1 className='text-center display-2 heading2'>Vegetables</h1>
        <p className='text-center'></p>
        
        <ul className="uls list-inline justify-content-center row col-lg-3 col-md-12 col-sm-3  mx-auto">
        <li className="list-inline-item col">
          <Link className=" active btn btn-dark "  to="tomato">Tomato</Link>
        </li>
        <li className="list-inline-item col">
          <Link className=" active btn btn-dark "  to="tomato">Cabbage</Link>
        </li>
        <li className="list-inline-item col">
          <Link className=" active btn btn-dark "  to="tomato">Chillies</Link>
        </li>
        </ul>
        <Carousel>
        <Carousel.Item data-bs-interval="20">
        <img
          className="d-block m-auto w-50 " 
          
          src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item data-bs-interval="20">
        <img
          className="d-block m-auto w-50 " 
          
          src="https://vagadagro.in/wp-content/uploads/2021/08/vegetable-garden-ideas-1.jpg"
          alt="First slide"
        />
      </Carousel.Item >
      <Carousel.Item data-bs-interval="20">
        <img
          className="d-block  m-auto w-50"
          src="https://images.squarespace-cdn.com/content/v1/52cdaaf4e4b0b5ef88cb0b93/1424299832396-J1SAOL0E1CF4U9ZK8LQJ/partovi.jpg?format=1000w"
          alt="Second slide"
        />
      </Carousel.Item>
      
    </Carousel>
        <Outlet/>
    </div>
    </div>
  )
}

export default Vegetable