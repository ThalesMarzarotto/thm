import Link from 'next/link'
import React from 'react'


import styles from './footer.module.css'

function Footer() {
  return (
    
    <footer className={styles.main}>

      <div></div>
      
      <div className={styles.enderecos}> 
      <div className={styles.title}> Endereço Matriz</div>

      Rua Mal. Floriano Peixoto, 240L, Sala 33, Shopping Itajoara, Centro, Chapecó/SC


      </div>

     
      
      <div className={styles.enderecos}> 
      <div id='contatos' className={styles.title}> Contatos</div>
      <p>recepcaothm@gmail.com
  </p>
<a className={styles.phoneNumber} href='api.whatsapp.com/send?phone=4991072689'>
Chapecó, SC - (49) 9 9107 2689
</a>


<a className={styles.phoneNumber} href='api.whatsapp.com/send?phone=5194244306'>
Porto Alegre, RS (51) 99424-4306
</a>



<div></div>

</div>
      
  </footer>
  )
}

export default Footer