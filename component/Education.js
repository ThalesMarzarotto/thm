import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'

import styles from './Education.module.css'

//completed for conversion

function Details  ({type, time, place, info}) {


  const ref = useRef(null)

  return (

    <li ref={ref} className={styles.my_custom_class}>
           


         
      <div className={styles.roundedWrapper}>
       
      </div>
        <div         
         className={styles.detailWrapper}
        >
            <h3 className={styles.infoType}>
                {type}
            </h3>
            <span className={styles.detailInfo}>
                {time} | {place}
            </span>
            <p className={styles.detailInfoPlus}>
                {info}
            </p>
        </div>


    </li>
  )

}



function Education() {


    const ref = useRef(null);
     const {scrollYProgress} = useScroll(

        {target:ref,
        offset:['start end', 'center center']}
     )



  return (
    <div className={styles.root}>


    <h2 className={styles.root2}>Formação Acadêmica</h2>
    

    <div ref={ref} className={styles.main}>




        <ul className={styles.list}>

     
  

   
       <Details     
       type='Atuação em Cirurgia Oncológica Digestiva'
       place={"Colégio Brasileiro de Cirurgia Digestiva"}
       time= '2022-2023'

       />  
       <Details     
       type='Membro Titular do Colégio Brasileiro de Cirurgia Digestiva'
       time= '2022'

       />  
    
   
       <Details     
       type='Membro Titular do Colégio Brasileiro de Cirurgiões'
       time= '2022'

       />  
    
   
       <Details     
       type='Título de Especialista em Cirurgia Geral'
       time= '2021'

       />  

     <Details     
       type='Residencia em Cirurgia do Aparelho Digestivo'
       time= ' 2021 - 2023'
       place='Santa Casa de Misericórdia de Porto Alegre - UFCSPA/ISCMPA'

       />

       <Details     
       type='Residência Médica em Cirurgia Geral'
       time= '2005-2007'
       place='Hospital de Clínicas de Passo Fundo, RS'
         

       />
    
     
    
       <Details     
       type='Graduação em Medicina'
       time= '1998-2004'
       place='Universidade Federal do Rio Grande do Sul, Porto Alegre, RS'

       />
    

      </ul>
  

    </div>


  </div>
  )
}


export default Education
