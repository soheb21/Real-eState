import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi"
import OutsideClickHandler from "react-outside-click-handler"
const Header = () => {
    const [openMenu,setOpenMenu]=useState(false)
    const getMenuStyle=(openMenu)=>{
        if(document.documentElement.clientWidth<=800){
            return {right: !openMenu && "-100%"}
        }
    }
    return (
        <>
            <section className='h-wrapper '>
                <div className="h-container innerWidth flexCenter paddings">
                    <img src="/logo.png" alt="logo" width={100} />
                    <OutsideClickHandler onOutsideClick={()=>setOpenMenu(false)}>
                    <div className="flexCenter h-menu " style={getMenuStyle(openMenu)}>
                        <a href="">Residence</a>
                        <a href="">Our value</a>
                        <a href="">Contact Us</a>
                        <a href="">Get Started</a>
                        <button className='button'>
                        <a href="">Contact</a>
                        </button>
                    </div>
                    </OutsideClickHandler>
                    <div className="menu-icon" onClick={()=>setOpenMenu((prev)=>!prev)}>
                       <BiMenuAltRight size={30} /> 
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header