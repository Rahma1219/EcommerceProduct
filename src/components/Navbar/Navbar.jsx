import { Link } from "react-router-dom";
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
                <div id="bg3"> 
                    <ul className='Sidebar'>
                        <li onClick={hiddenSidebar} id='closeicon'><a href="#"><img src={CLoseIcon}></img></a></li>
                        <li><Link to='/collections'>Collections</Link></li>
                        <li><Link to='/men'>Men</Link></li>
                        <li><Link to='/women'>Women</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li> <Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            ) : null
            }

            <div className='nav'>
                <ul>
                    <div className="leftnav2">
                    <li onClick={ShowSidebar} className='menubtn'><a href="#" id='showicon'><img id='dd' src={MenuIcon}></img></a></li>
                    <img src={Logo} id='logo'></img>
                    </div>
                 
                    <div className='leftnav'>
                        <li className='hide'>
                            <Link to='/collections'>Collections</Link>
                        </li>
                        <li className='hide'>
                            <Link to='/men'>Men</Link>
                        </li>
                        <li className='hide'>
                            <Link to='/women'>Women</Link>
                        </li>
                        <li className='hide'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className='hide'>
                            <Link to='/contact'>Contact</Link>
                        </li>
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
        </nav>




    )
}
export default Navbar