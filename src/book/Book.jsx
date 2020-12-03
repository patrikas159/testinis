import React from 'react';
import './book.css';





export default function Book ()  {
    return(
        <div className='book'>
            <Image/>
            <Title />
            <Author />
            <Price />
        </div>
    )
}


const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/71eJk7GtUOL._AC_UL210_SR210,210_.jpg"
    alt=''/>
const Author = () => <h2>Autorius</h2>;
const Title = () => <h3>Naujas visiskai</h3>;
const Price = () => <p>Tik 15$</p>;
