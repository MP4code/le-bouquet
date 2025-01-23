import React from 'react';
import '../design/App.css';
import { IoMdHome } from "react-icons/io";
import { FaGift } from "react-icons/fa";
import { LuMessageCircleHeart } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { FaShoppingBasket } from "react-icons/fa";
import Logo from "../img/logo.png"
export default function Header() {
    return (
        <header className="header">
            <img className='logo' src={Logo} alt="Logo" />
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="/le-bouquet">
                        Accueil <IoMdHome /></a></li>
                    <li className="navbar-item"><a href="/le-bouquet/Cadeaux">
                        Cadeaux <FaGift /></a></li>
                    <li className="navbar-item"><a href="/le-bouquet/contact">
                        Contact <LuMessageCircleHeart /></a></li>
                    <li className="navbar-item"><a href="/le-bouquet/livraison">
                        Livraison <TbTruckDelivery /></a></li>
                    <li className="navbar-item"><a href="/">
                        Panier <FaShoppingBasket /></a></li>
                </ul>
            </nav>
        </header>
    );
}
