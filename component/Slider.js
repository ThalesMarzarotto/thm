"use client"
import React, { useEffect, useState } from 'react' 
import styles from "./slider.module.css"
import { ArrowLeft, ArrowRight, ContractIcon, ExpandIcon } from './Icons'
import Image from 'next/image'






let startX;

let isDown = true;



let typeCorrelation = {

    "jpg": "photo", 
    "jpeg": "photo", 
    "webm" :"video"
}


// valid file upload on the server side. 
let validTypes = {

    "1A45DFA3": "mkv ,mks, mka, mk3d, webm",
    "FFD8FFDB":"JPG/JPEG",
    "FFD8FFEE":"JPG/JPEG",
    "FFD8FFE0":"JPG/JPEG",
    "49492A00":"TIFF",
    "4D4D002A":"TIFF",
    "FF4FFF51":"JPEG/2000",
    "89504E470D0A1A0A":"PNG",   
    "5249464657454250": "WEBP",// NOTE "52494646????????57454250"
    "FFD8FFE000104A4649460001":"JPG/JPEG",   
    "FFD8FFE1457869660000":"JPG/JPEG", // NOTE "FFD8FFE1????457869660000"  
    "0000000C6A5020200D0A870A":"JPEG/2000", //12 is the biggest sequence    
  

}
   // /flower.webm
//    var reader = new FileReader()

//  let responder = fetch('/test.html').then(data=>data.blob()).then(data=>{
   
//     reader.readAsArrayBuffer(data)
//     console.log(data)

// })
// console.log(responder);

  

// reader.onload =  function(e) {
//     console.log(e.target.result
    
//     )
//     let arr = new Uint8Array(e.target.result)
    
//     let str = ""
//    for (let i = 0; i < 20; i++) {
//     const element = arr[i];

//     str = str.concat(element.toString(16))
    
    
//    }
//    str = str.toUpperCase()
//    console.log(str);

//    let t1 = str.substring(0,8) // len 6
//    let t2 = str.substring(0,15) // len 16
//    let t2a = str.substring(0,8) + str.substring(16,23) // len 16 but...
//    let t3 = str.substring(0,8)+ str.substring(13,23) // len 20
//    let t4 = str.substring(0,23) // len 24

//    let test = [t1,t2,t2a,t3,t4]
//    console.log(test);
//    let isValid = false
//    for (let i = 0; i < test.length; i++) {
//     const element = test[i];
//     console.log(validTypes[element]);
    
//     isValid = validTypes[element] !== undefined? true: false
    
//    }
//    console.log(isValid);
   

// }
  


let nice =0 





export default function Slider ({arr, hash}) {


  
    

const [state, setState]= useState([])
const [active, setActive] = useState(0)

const [scrollBy, setScrollBy] = useState(0)

    
   //"compartimentalize" the slider of images with some configurations 
   // nice 
   // we will inspire ourselves on instagram, slider with clicks and scroll
   // so we need some configurations
//1. size of the slider, meaning how many
//2. 


function moveRight(){
    
    let act = nice+ 1
    
     if (act>arr.length-1) {
        act-=1
        nice = act 
       setActive(nice)

       
       
    } else if (act<0){
        nice = 0

    setActive(nice)
    } else {
        nice = act
        setActive((prev)=>prev+1)
    }

    console.log(active);
  
}



function moveLeft(){
    
    let act = nice- 1
    
    console.log(nice,act, arr.length, "act");

    if (act>arr.length-1) {
        act -=1
        nice = act
      setActive(nice)
    } else if (act<0){
        nice = 0
        setActive(nice)
    } else {
        nice = act
        setActive(nice)
    }

  
}



let scrollLeft = 0 
let walk = 0 
let isDown

  
  
  useEffect(()=>{ 


    setState([...arr])
    console.log("fucked", arr);

  console.log("cont" + hash);
  
      const slider = document.getElementById("cont" + hash)

      console.log(slider);
           let scrollBy =  window.innerWidth>1000? 500: window.innerWidth-12
     console.log(scrollBy);
     
setScrollBy(scrollBy, "hi")
    
      if (slider === null){
        return
      }
      slider.addEventListener('touchstart', (e)=>{
        isDown = true  
        startX = e.changedTouches[0].pageX           
                  
      });    
    slider.addEventListener('touchend', ()=>{
       isDown= false  
 

       if(walk>100) {       
        moveLeft()
       } else if(walk<(-100)) {           
        moveRight()
       }
       walk =0


       
    });
    
    slider.addEventListener('touchmove', (e)=>{
     if(!isDown)return
        const x = e.changedTouches[0].pageX    
        walk = x - startX;    
      
        if (walk >0) {
         if(nice ===0) return

        } else {
        if (nice === arr.length-1) return 
        }
   
     });





    }, []);  










 return(


 
    <div className={styles.main} style={{
        width:  scrollBy+"px", 
        height: 0.8*scrollBy,
        alignItems:"center"

    
    }}>
        <div id={"cont" + hash} className={styles.container} style={{transform:`translateX(${-active*scrollBy}px)`}}>




            {state.map((x, index)=>{


let end = x[0].src.split(".")
        
let tpe = end[end.length-1]
 tpe = typeCorrelation[tpe]




if (tpe === "video") {

   return(

       // above is as image container 
       <div  key={index} className={styles.imageContainer}
       style={{
        width:  scrollBy+"px",
        height: 0.8*scrollBy

   
   }}>
       
        <video src={x[0]}   width={scrollBy} controls autoPlay draggable={false}
           style={{
               width:"100%",
               height:"100%",              
                objectFit: arr[index][3] === true? `contain` :"cover",
              
       
           }}
        >
     
        </video> 

         
       </div>               

   
   )

} else {
    

    
return(
// above is as image container 
<div  key={index} className={styles.imageContainer} style={{
         width:  scrollBy+"px", 
        height: 0.8*scrollBy


    
    }}>

{x[4]=== true? 

<div className={styles.imageBlur}>
 
 <div className={styles.sensibleWrapper}>
 
    <div className={styles.sensibleText}>
    Imagem possivelmente sensível
    </div>
    <div className={styles.sensibleControler} onClick={()=>{
        arr[active][4] = false
        setState([...arr])
    }}>
     Ver mesmo assim
    </div>
 </div>
</div>

: 


""}

<Image className={styles.image} src={x[0]} width={400} height={400} alt='example' draggable={false}

   style={{
       width:"100%",
       height:"100%",
       objectFit: arr[index][3] === true? `contain` :"cover",
     
   }}
>

</Image> 

  
</div>               


)
}

            
     
        })}


        

    </div>
    <div className={styles.controlerButton}
           onClick={(e)=>{
            console.log(arr[active], active);
            
               arr[active][3] = !arr[active][3]
               setState([...arr])
           }}
           >
         
               <ExpandIcon></ExpandIcon>
             

    </div>
    <div className={styles.numberDisplay}
          
           >
         
               {nice+1 +"/"+ (arr.length)}
             

    </div>
 
 
    
    {active === 0? "" :
    
      <div className={styles.arrowLeft} onClick={()=>moveLeft()}>
           
        <ArrowLeft/>

    </div>
    }
    
    {active === arr.length-1? "" :
    
    
    <div className={styles.arrowRight} onClick={()=>moveRight()}>
           <ArrowRight/>
        

    </div>
  
    }

  






</div>




)




}