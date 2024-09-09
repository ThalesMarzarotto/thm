"use client"
import React, { useState } from 'react'
import {  useRouter} from 'next/navigation'
import { WhatsAppIcon, SunIcon, MoonIcon, CloseIcon, BarsIcon}from './Icons'
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


    function scrollTo(ele){
         document.getElementById(ele).scrollIntoView({behavior:"smooth"})
         setIsOpen(!isOpen)
    }


  return (
    <div className={styles.main} >
        


       
      <div className={styles.menuControler} onClick={handleClick}>
        { isOpen?
         <CloseIcon></CloseIcon> :<BarsIcon></BarsIcon> }
      </div>

     
      
        
        
       
   


    <div className={styles.computerMenu}>
    <nav className={styles.computerMenuWrapper}>
      <div className={styles.computerMenuOption} onClick={()=>routeAndClose("/")}>
        Home
        </div>
        <div className={styles.computerMenuOption} onClick={()=>scrollTo("services")}>
        Sobre 
        </div>       
        <a href={"https://portal.thmcondominios.com.br/#/login"} className={styles.computerMenuOption} onClick={()=>routeAndClose("/info")}>
        Portal
        </a>
        <div className={styles.computerMenuOption} onClick={()=>scrollTo("contatos")}>
        Contato
        </div>   
        <a href={"https://portal.thmcondominios.com.br/#/login"} className={styles.computerMenuOption} onClick={()=>routeAndClose("/locais")}>
        2ª Via de Boleto
        </a> 
     </nav> 
    
   <nav className={styles.computerMenuWrapper}>

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
        <div className={styles.mobileMenuOption} onClick={()=>scrollTo("services")}>
        Sobre
        </div>
        <a href={"https://portal.thmcondominios.com.br/#/login"} className={styles.mobileMenuOption} onClick={()=>routeAndClose("/info")}>
        Portal
        </a>
        <div className={styles.mobileMenuOption} onClick={()=>scrollTo("contatos")}>
        Contato
        </div>
        <a href={"https://portal.thmcondominios.com.br/#/login"} className={styles.mobileMenuOption}>
         2ª Via de Boleto
        </a>
   
      
     </nav> 
    
   <nav className={styles.mobileMenuWrapper1}>
      
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
    
    
   ""
    
    )}


{/* <div className='absolute left-[48%] top-[25%] top-2 translate-x[-50%]'>    
<Logo/>
</div> */}
  
    </div>

  )
}

export default NavBar