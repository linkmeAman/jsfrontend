import React from 'react';
import { CgMouse } from 'react-icons/cg';
import './Home.css';
import Product from '../../product/Product';
import MetaData from '../MetaData';

const Home = () => {
  // Dummy product data (replace with actual product data fetched from an API or database)
  const products = [
    {
      _id: '1',
      name: 'Random 1',
      images: [{ url: 'https://source.unsplash.com/random/1' }],
      price: 400,
      category: 'Cloth',
      rating: 4.5,
      description: 'Description of product 1',
    },
    // {
    //   _id: '2',
    //   name: 'Random 2',
    //   images: [{ url: 'https://source.unsplash.com/random/2' }],
    //   price: 500,
    //   category: 'Electronics',
    //   rating: 4.2,
    //   description: 'Description of product 2',
    // },
    // Add more product objects as needed
  ];
  // console.log("Products : ",Product);


  function renderProducts(numTimes) {
    const mappedProducts = products.map((product) => (
      
      <Product key={product._id} product={product} />
    ));
  
    // Repeat the mapped products the specified number of times
    return Array.from({ length: numTimes }, (_, index) => (
      <React.Fragment key={index}>{mappedProducts}</React.Fragment>
    ));
  }


  return (
    <>
      <MetaData title="E-commerce" />
      <div className="banner">
        <p>Welcome to E-commerce</p>
        <h1>FIND AMAZING PRODUCTS</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h1 className="homeHeading">Featured Products</h1>
      <div className="container" id="container">
      {renderProducts(8)}
      </div>
      {/* <div className="container" id="container">
        <Product product={products}/>
        <Product product={products}/>
        <Product product={products}/>
        <Product product={products}/>
        <Product product={products}/>
        <Product product={products}/>
        <Product product={products}/>
        <Product product={products}/>
      </div> */}
    </>
  );
};


function renderProducts(numTimes) {
  const mappedProducts = products.map((product) => (
    
    <Product key={product._id} product={product} />
  ));

  // Repeat the mapped products the specified number of times
  return Array.from({ length: numTimes }, (_, index) => (
    <React.Fragment key={index}>{mappedProducts}</React.Fragment>
  ));
}

export default Home;
