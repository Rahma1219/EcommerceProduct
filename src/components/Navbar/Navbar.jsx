
import './Navbar.css'
import Logo from '/images/logo.svg'
import cart from '/images/icon-cart.svg'
import Man from '/images/image-avatar.png'
import MenuIcon from '/images/icon-menu.svg'
import CLoseIcon from '/images/icon-close.svg'
import { useState } from 'react'
// import Cart from '../Cart/Cart'




function Navbar() {
    const [showSidebar, setshowSidebar] = useState(false)
    const [showCart, setshowCart] = useState(false)

    function ShowSidebar() {
        setshowSidebar(true)
    }
    function hiddenSidebar() {
        let Finalresult = !showSidebar
        setshowSidebar(Finalresult)

    }

    function showcartshop() {
        let Finalresult = !showCart
        setshowCart(Finalresult)

    }


    return (
        <nav className='navbar'>
            {showSidebar == true ? (

                <ul className='Sidebar'>
                    <li onClick={hiddenSidebar} id='closeicon'><a href="#"><img src={CLoseIcon}></img></a></li>
                    <li><a href="#Collections">Collections</a></li>
                    <li><a href="#Men ">Men </a></li>
                    <li><a href="#Women">Women</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#Contact">Contact</a></li>

                </ul>) : null
            }

            <div className='nav'>
                <ul>
                    <li onClick={ShowSidebar} className='menubtn'><a href="#" id='showicon'><img id='dd' src={MenuIcon}></img></a></li>

                    <img src={Logo} id='logo'></img>
                    <div className='leftnav'>
                        <li className='hide'><a id='link' href="#Collections">Collections</a></li>
                        <li className='hide'><a href="#Men ">Men </a></li>
                        <li className='hide'><a href="#Women">Women</a></li>
                        <li className='hide'><a href="#about">About</a></li>
                        <li className='hide'><a href="#Contact">Contact</a></li>
                    </div>



                    <div className='rightnav'>
                        {showCart == true ? (
                            <div>
                                <div id='box'>
                                    <p id='hrcart'>Cart</p>
                                    <h3 id='text'>Your cart is empty</h3>



                                </div>
                            </div>

                        ) : null}


                        <button id='btnb'>

                            <p className='notification'>3</p>

                            <img onClick={showcartshop} src={cart} alt="cartshpo" id='cart' />

                        </button>
                        <li>
                            {/* <Cart></Cart> */}

                        </li>



                        <img src={Man} alt="avatar" id='man' />
                    </div>
                </ul>

            </div>


            {/* <button class="toggle-sidebar"><img src={MenuIcon}></img></button> */}
        </nav>




    )
}
export default Navbar