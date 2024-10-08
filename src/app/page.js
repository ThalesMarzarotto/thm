'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import NavBar from "../../component/NavBar";
import { CloseIcon, CoWorkerIcon, DevFocusIcon, Engineer, EngineerIcon, GroupBuildingIcon, InboxCleanup, PredialIcon, SecurityIcon, SpotLight, SpotLight1, SpotLight2 } from "../../component/Icons";
import Tower from "../../component/Tower";
import useThemeSwitcher from "../../component/hooks/useThemeSwitcher";
import Aceternity from "../../component/Aceternity";

export default function Home() {


  useEffect(()=>{
    let aceternity1 = new Aceternity(window,document, "test")
    aceternity1.init()
    let aceternity2 = new Aceternity(window,document, "test2")
    aceternity2.init()
    let aceternity3 = new Aceternity(window,document, "test3")
    aceternity3.init()


  }, [])



  return (
    <main className={styles.main}>


<div className={styles.heroSection}> 
  <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <div className={styles.titleText}>
            <div>
              <span className={`${styles.darkText} ${styles.animated}`}>Administrando </span>
              <span className={`${styles.darkText} ${styles.animated}`}>em </span>
              <span className={`${styles.whiteText} ${styles.animated}`}>Alto </span>
              <span className={`${styles.darkText} ${styles.animated}`}>nivel </span>
              <span className={`${styles.darkText} ${styles.animated}`}> para&nbsp;</span>
              <span className={`${styles.darkText} ${styles.animated}`}>nossos  </span>
              <span className={`${styles.whiteText} ${styles.animated}`}>Clientes </span>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.thm}>
      THM
      </p>
      <p className={styles.description}> Administração desde 1999</p>
   
        <a href="api.whatsapp.com/send?phone=4991072689" className={styles.button}>
          <span className={styles.buttonBackground}></span>
          <span className={styles.buttonContent}>
            Conheca os nossos trabalhos
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
            </svg>
          </span>
        </a>
   
    </div>

<div className={styles.mask}>

</div>

 
<SpotLight className={styles.SpotLight}/>
<SpotLight1 className={styles.SpotLight1}/>
<SpotLight2 className={styles.SpotLight2}/>

</div>


<div className={styles.heroSection3}>
<SpotLight className={styles.SpotLight}/>
<SpotLight1 className={styles.SpotLight1}/>
<SpotLight2 className={styles.SpotLight2}/>
 <div className={styles.heroSection3Text}>
  Todo trabalho é composto de partes
 </div>
</div>



<div className={styles.titleWrapper}>As nossas estão aqui</div>

<div className={styles.heroSection2}>

<SpotLight className={styles.SpotLight}/>
<SpotLight1 className={styles.SpotLight1}/>
<SpotLight2 className={styles.SpotLight2}/>

<div className={styles.try1}>
      <div className={styles.try1IconWrapper}>
      <InboxCleanup/>

      </div>
      <div className={styles.tryText}> 
      <p className={styles.tryTitle}>ção</p> 
        
        O cliente em primeiro lugar.
        <p>Administração é algo <span className={styles.whiteText}>complexo</span> e não economizamos nessa etapa.</p>
        
        
      
      </div>
  </div>
  <div className={styles.try1}>
    <div className={styles.try1IconWrapper}>
        <SecurityIcon/>

        </div>
        <div className={styles.tryText}> 
        <p className={styles.tryTitle}>Transparência</p> 
          
          Conversamos com os proprietários e representantes sempre.
          <p>Democraticamente, buscamos as <span className={styles.whiteText}>melhores</span> soluções.</p>
          
          
        
        </div>
  </div>
  <div className={styles.try1}>
    <div className={styles.try1IconWrapper}>
    <DevFocusIcon/>

        </div>
        <div className={styles.tryText}> 
        <p className={styles.tryTitle}>Trabalho Duro</p> 
          
<p>Focamos em realizar o trabalho no prazo estipulado.</p>

          
        
        </div>
  </div>
  


  
</div>

<div className={styles.divisor2}>Alguns <span className={styles.whiteText}>comentários</span> de nossos clientes</div>


<div className={styles.testimonialsWrapper}>
<div className={styles.testimonials}> 

  <div className={styles.content}> 
    
  Ótima empresa, competente há muitos anos no mercado, com muita experiência, resolvem os problemas se forem solicitados, eu vejo alguns comentários negativos, mas principalmente de pessoas que não sabem como funciona a área de administração e estão com problemas estruturais em seus prédios, que nada tem relação com administração

  
   
  </div>
  <div className={styles.content}> 
  Ótima empresa, excelente trabalho e atendimento, prestativos e organizados
  
   
  </div>
  <div className={styles.content}> 
  Administradora habilidosa em resolver problemas, prestativa e idônea.
  
   
  </div>
  <div className={styles.content}> 
    
  Ótima empresa, competente há muitos anos no mercado, com muita experiência, resolvem os problemas se forem solicitados, eu vejo alguns comentários negativos, mas principalmente de pessoas que não sabem como funciona a área de administração e estão com problemas estruturais em seus prédios, que nada tem relação com administração
  
    
     
    </div>

</div>
</div>
<div className={styles.titleWrapper}>
  Como você pode acessar os nossos serviços?
</div>

<div className={styles.heroSection4}> 

<SpotLight className={styles.SpotLight}/>
<SpotLight1 className={styles.SpotLight1}/>
<SpotLight2 className={styles.SpotLight2}/>

  <div className={styles.cardWrapper}> 
        
      <div className={styles.cardContent}> 
       
        <div className={styles.preText1}> 
          Fase 1
        </div>
      </div>
      <div className={styles.cardContent2}> 
       
        <div className={styles.preText}> 
         Primeiro ouvimos o seu pedido
        </div>
      </div>
      <div  id="test" className={styles.cardColor}>

      </div>
      <div className={styles.cardColor1}>
    
      </div>

      <div className={styles.cardDown}>

      </div>
      <div className={styles.cardUp}>

      </div>
  </div>
  <div className={styles.cardWrapper}> 
        
        <div className={styles.cardContent}> 
         
          <div className={styles.preText1}> 
            Fase 2
          </div>
        </div>
        <div className={styles.cardContent2}> 
         
          <div className={styles.preText}> 
           Solicitamos mais informações pra você, localização do imóvel, informações sobre a construção, número de apartamentos
          </div>
        </div>
        <div  id="test2" className={styles.cardColor}>
  
        </div>
        <div className={styles.cardColor2}>
      
        </div>
  
        <div className={styles.cardDown}>
  
        </div>
        <div className={styles.cardUp}>
  
        </div>
    </div> <div className={styles.cardWrapper}> 
        
        <div className={styles.cardContent}> 
         
          <div className={styles.preText1}> 
            Fase 3
          </div>
        </div>
        <div className={styles.cardContent2}> 
         
          <div className={styles.preText}> 
           Fornecemos uma proposta orçamentária
          </div>
        </div>
        <div  id="test3" className={styles.cardColor}>
  
        </div>
        <div className={styles.cardColor3}>
      
        </div>
  
        <div className={styles.cardDown}>
  
        </div>
        <div className={styles.cardUp}>
  
        </div>
    </div>
</div>

<div id="services" className={styles.titleWrapper}>Nossos serviços</div>
<div className={styles.heroSection2}>
<SpotLight className={styles.SpotLight}/>
<SpotLight1 className={styles.SpotLight1}/>
<SpotLight2 className={styles.SpotLight2}/>


<div className={styles.try1}>
      <div className={styles.try1IconWrapper}>
      <PredialIcon/>

      </div>
      <div className={styles.tryText}> 
      <p className={styles.tryTitle}>Administração</p> 
        
       Administramos imóveis e conjuntos de imóveis
       
        
        
      
      </div>
  </div>
  <div className={styles.try1}>
    <div className={styles.try1IconWrapper}>
        <GroupBuildingIcon/>

        </div>
        <div className={styles.tryText}> 
        <p className={styles.tryTitle}>Compra e Venda de Imóveis</p> 
          
          Mercado Imobiliário
         
          
          
        
        </div>
  </div>
  <div className={styles.try1}>
    <div className={styles.try1IconWrapper}>
    <EngineerIcon/>

        </div>
        <div className={styles.tryText}> 
        <p className={styles.tryTitle}>Obras de Construção civil</p> 
          
<p>Fiscalização, realização, projetos, NBRs e perícias técnicas</p>

          
        
        </div>
  </div>
  


  
</div>

 
    </main>
  );
}
