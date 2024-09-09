"use client"
import React, { useEffect, useState } from 'react'
import Tower from '../Tower'
import Aceternity from '../Aceternity'


let aceternity = new Aceternity()
 let tower= new Tower()
function useThemeSwitcher(arg) {
         
    
    const [mode, setMode] = useState("")

     useEffect(()=>{
        let userPref = window.localStorage.getItem("theme") 



aceternity.updateWindow(window,document)

aceternity.init()
              tower.updateWindow(window, document)
              tower.resize()
              tower.init()
                if(userPref){
                    setMode(userPref)
                } else {                    
                    setMode("dark")
                }      

          
              
                
       },[])

       useEffect(()=>{   

        
            if(mode === "dark"){
                window.localStorage.setItem('theme', 'dark')
                document.documentElement.setAttribute('data-theme', 'dark')                            
                tower.changeTheme(0x020617)    
            } 
            if(mode === "light"){
                window.localStorage.setItem('theme', 'light')
                document.documentElement.setAttribute('data-theme', 'light')  
                tower.changeTheme(0xffffff)    
 
              

               
            }   
      },[mode])
          
 
 
  return (
   [mode, setMode]
  )

}

export default useThemeSwitcher