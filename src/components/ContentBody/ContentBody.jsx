import './ContentBody.css'
import Plus from '/images/icon-plus.svg'
import minus from '/images/icon-minus.svg'
import Cart from '/images/icon-cart.svg'
import { useState } from 'react'
import Imageitem from '../Imageitem/Imageitem'

function ContentBody() {
// const { handleAddtoCart } = useGlobalContext() 
    const [count, setcount] = useState(0);


    function Add() {
        let newValue = count + 1
        setcount(newValue)
    }
    function Minus() {
        let newValue = count - 1
        setcount(newValue)
        if (count<=0) setcount(0)
    }
    
    // function handleAddtoCart(){
    //     // setDivcart(true)

    // }

   

    return (
        <div className='content'>
            <div className='sec1'>
            <Imageitem></Imageitem>

            </div>

            <div className='sec2'>
                <div>
                    <h3 id='heading'>Sneaker Company</h3>
                    <h1 id='title'>Fall Limited Edition Sneakers</h1>
                    <p id='para'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                    <div id='price'>
                        <h1>$125.00</h1>
                        <span id='discount'>50%</span>
                    </div>

                    <p id='price2'><s>$250.00</s></p>

                </div>
                <div className='cart2'>
                    <div className="counter">
                        <button className="b">
                        <div>
                                <button onClick={Minus} id='btn1'><img src={minus} /></button>
                            </div>
                            
                            <div>
                                <strong id="count" >{count}</strong>
                            </div>
                            <div>
                                <button onClick={Add} id="btn2"><img src={Plus} /> </button>
                            </div>
                           
                        </button>

                    </div>
                    <div className='cartbtn'>
                   
                    <button><img src={Cart}></img> Add to cart</button>

                    </div>
                 
                </div>


            </div>


        </div>

    )

}
export default ContentBody