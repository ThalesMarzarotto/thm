import Link from 'next/link'
import React from 'react'


import styles from './footer.module.css'

function Footer() {
  return (
    
    <footer className={styles.main}>

      <div></div>
      
      <div className={styles.enderecos}> 
      <div className={styles.title}> Endereços</div>

      Rua Mal. Floriano Peixoto, 240L, Sala 33, Shopping Itajoara, Centro, Chapecó/SC


      </div>

     
      
      <div className={styles.enderecos}> 
      <div id='contatos' className={styles.title}> Contatos</div>
      <p>recepcaothm@gmail.com
  </p>
<p>
(49) 3323-0631
</p>
<p>
(49) 3323-0681
</p>
<p>
(49) 99107-3548
</p>
<p>
(49) 99107-2689
</p>
<p>
  (51) 99424-4306
</p>



<div></div>

</div>
      
  </footer>
  )
}

export default Footer