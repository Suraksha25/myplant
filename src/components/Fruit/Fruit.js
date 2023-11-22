import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import './Fruit.css'
function Fruit() {
  return (
    <div className='back1'>
    <div >
    <h1 className='text-center display-2 heading1'>Fruits</h1>
    <p className='text-center'></p>
    
    <ul className="uls list-inline justify-content-center row col-lg-3 col-md-12 col-sm-3  mx-auto">
    <li className="list-inline-item col">
      <Link className=" active btn btn-dark "  to="lemon">Lemon</Link>
    </li>
    <li className="list-inline-item col">
      <Link className=" active btn btn-dark "  to="lemon">Apple</Link>
    </li>
    <li className="list-inline-item col">
      <Link className=" active btn btn-dark "  to="lemon">Mango</Link>
    </li>
    </ul>
    <Carousel>
        <Carousel.Item data-bs-interval="20">
        <img
          className="d-block m-auto w-50 " 
          
          src="https://images5.alphacoders.com/649/649956.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item data-bs-interval="20">
        <img
          className="d-block m-auto w-50 " 
          
          src="https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
      </Carousel.Item >
      <Carousel.Item data-bs-interval="20">
        <img
          className="d-block  m-auto w-50"
          src="https://a-z-animals.com/media/2022/12/Shutterstock_2083900789-1024x682.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      
    </Carousel>
  <Outlet/>
</div>
</div>
  )
}

export default Fruit