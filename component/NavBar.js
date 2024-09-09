"use client"
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter} from 'next/navigation'
import {TwitterIcon,  InstagramIcon, WhatsAppIcon, LinkedInIcon, SunIcon, MoonIcon, CloseIcon, BarsIcon}from './Icons'
import styles from "./navbar.module.css"
import useThemeSwitcher from './hooks/useThemeSwitcher'




function NavBar() {


   const router = useRouter()
    const [isOpen, setIsOpen]= useState(false)    
    const [mode, setMode] = useThemeSwitcher()

 
    const handleClick = () => {
    setIsOpen(!isOpen)
    }


    const routeAndClose=(path)=>{
     router.push(path)
     handleClick()
    }




  return (
    <div className={styles.main} >
        


      { isOpen? 
      <div className={styles.menuControler} onClick={handleClick}>
         <CloseIcon></CloseIcon>
      </div>

      :
      <div className={styles.menuControler} onClick={handleClick}>  
      <BarsIcon></BarsIcon>
      </div>
        
        
        }
   


    <div className={styles.computerMenu}>
    <nav className={styles.computerMenuWrapper}>
      <div className={styles.computerMenuOption} onClick={()=>routeAndClose("/")}>
        Home
        </div>
        <div className={styles.computerMenuOption} onClick={()=>routeAndClose("/locais")}>
        Sobre 
        </div>
        <div className={styles.computerMenuOption} onClick={()=>routeAndClose("/info")}>
        Orcamentos
        </div>
        <div className={styles.computerMenuOption} onClick={()=>routeAndClose("/info")}>
        Portal
        </div>
     </nav> 
    
   <nav className={styles.computerMenuWrapper}>
   <a href={'https://www.instagram.com/dredujorgens/'}  className={styles.mobileMenuIcon}      >
           <InstagramIcon/>       
        </a>
        <a href={'https://api.whatsapp.com/send?phone=555191999640&text=%22Ol%C3%A1,%20gostaria%20de%20saber%20mais%22'} className={styles.mobileMenuIcon}  >
          	<WhatsAppIcon/>
        </a>
    

     <button
     onClick={()=> setMode(mode==='light'? "dark": "light")}
     className={styles.mobileMenuIcon}
     
     >
        {(mode==='dark')?  
        <MoonIcon/> :
         <SunIcon/>     
        } 
     </button>
    </nav>


    </div>


    {(isOpen ? 
    
        <div     



      className={styles.mobileMenu}>
          <div className={styles.menuControler} onClick={handleClick}>
         <CloseIcon></CloseIcon>
      </div>
    <nav className={styles.mobileMenuWrapper}>
    
        <div className={styles.mobileMenuOption} onClick={()=>routeAndClose("/")}>
        Home
        </div>
        <div className={styles.mobileMenuOption} onClick={()=>routeAndClose("/locais")}>
        Locais de Atendimento
        </div>
        <div className={styles.mobileMenuOption} onClick={()=>routeAndClose("/info")}>
        Info
        </div>
   
      
     </nav> 
    
   <nav className={styles.mobileMenuWrapper1}>
        <a href={'https://www.instagram.com/dredujorgens/'}  className={styles.mobileMenuIcon}      >
           <InstagramIcon/>       
        </a>
        <a href={'https://api.whatsapp.com/send?phone=555191999640&text=%22Ol%C3%A1,%20gostaria%20de%20saber%20mais%22'} className={styles.mobileMenuIcon}  >
          	<WhatsAppIcon/>
        </a>
    

     <button
     onClick={()=> setMode(mode==='light'? "dark": "light")}
     className={styles.mobileMenuIcon}
     
     >
        {(mode==='dark')?  
        <MoonIcon/> :
         <SunIcon/>     
        } 
     </button>
    </nav>


    </div>

    :
    
    
    null
    
    )}


{/* <div className='absolute left-[48%] top-[25%] top-2 translate-x[-50%]'>    
<Logo/>
</div> */}
  
    </div>

  )
}

export default NavBar