import React from 'react';
import '../design/App.css';
import { IoMdHome } from "react-icons/io";
import { FaGift } from "react-icons/fa";
import { LuMessageCircleHeart } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { FaShoppingBasket } from "react-icons/fa";

export default function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="/">
                        Accueil <IoMdHome /></a></li>
                    <li className="navbar-item"><a href="/Cadeaux">
                        Cadeaux <FaGift /></a></li>
                    <li className="navbar-item"><a href="/contact">
                        Contact <LuMessageCircleHeart /></a></li>
                    <li className="navbar-item"><a href="/">
                        Livraison <TbTruckDelivery /></a></li>
                    <li className="navbar-item"><a href="/">
                        Panier <FaShoppingBasket /></a></li>
                </ul>
            </nav>
        </header>
    );
}
