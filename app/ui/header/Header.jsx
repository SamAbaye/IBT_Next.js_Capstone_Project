import React from 'react'
import Link from 'next/link'
import favIcon from '../../favicon.ico'
import Image from 'next/image'
import './Header.css'
function Header() {

    return (
        
            <header className="header">
                <div className="header">
                    <div className="logo">
                        <Image src={favIcon.src} alt="logo" width={50} height={50}/>
                        <h3>
                            Addis <br />
                            Eats
                        </h3>
                    </div>
                    <div className="nav-menu">
                        <ul className="menu-list">
                            <li>
                            <Link href="/home">Home</Link>
                            </li>
                            <li>
                            <Link href="/menu">Menu</Link>
                            </li>
                            <li>
                            <Link href="/cart">Order & Cart</Link>
                            </li>
                            <li>
                            <Link href="/checkout">Delivery & Checkout</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="cart-items">
                        <li className="count">items</li>
                        <li className="total-price">total</li>
                    </ul>

                    <ul className="auth">
                        <li className="login">
                            <Link href="/login"> Login </Link>
                        </li>
                        <li className="signup">
                            <Link href="/signup">Signup</Link>
                        </li>
                    </ul>
                </div>
            </header>

    );
}

export default Header