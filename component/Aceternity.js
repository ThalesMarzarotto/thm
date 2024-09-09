import * as THREE from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const frag_material = 

`
 



precision mediump float;
varying vec3 uv; 
uniform vec2 fboSize;
uniform float tick;


float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

void main() {
  vec2 st = gl_FragCoord.xy/fboSize.xy;
  float tick1;
    st *= 250.0; // Scale the coordinate system by 10
    vec2 ipos = floor(st);  // get the integer coords
    vec2 fpos = fract(st);  // get the fractional coords

    // Assign a random value based on the integer coord
  
    vec3 color = vec3(random( ipos*tick ));
     float y = step(0.5,color.x);
    // Uncomment to see the subdivided grid
     color = vec3(y);

    gl_FragColor = vec4(color,1.0);
 
   


}

`


const vertex_shader = 

`
attribute vec3 position;
varying vec3 uv; 

void main(){
   uv = position;
  gl_Position = vec4(position, 1.0);
}


`



export default class  Aceternity{


    constructor(window,document){
      
        
        
    }


    updateWindow ( window, document) {
        this.window = window, 
        this.document = document
        this.window = window
        this.document = document
        this.renderer = new THREE.WebGLRenderer();
        this.camera = new THREE.Camera();
        this.scene= new THREE.Scene()
        this.tgt = this.document.getElementById("test");
    }

    changeTheme(theme) {
      let att = "#" + theme.toString(16)
      
      console.log(att);
      
       
        this.renderer.setClearColor(theme)
    }


    sleepms(ms) {  
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    resize(){
         this.window.addEventListener('resize',  () =>{           
          this.camera.aspect = this.window.innerWidth / this.window.innerHeight;  
          this.camera.updateProjectionMatrix();
          this.renderer.setSize(this.window.innerWidth, this.window.innerHeight);
        }, false);
    }

  
    init(){
        
        this.renderer.setSize(this.tgt.clientWidth, this.tgt.clientHeight);
        this.document.getElementById("test").appendChild(this.renderer.domElement)
      this.clock = new THREE.Clock()
      this.delta = 0 
        this.plane = new THREE.PlaneGeometry(2.0,2.0)
        this.material = new THREE.RawShaderMaterial({
            fragmentShader:frag_material, 
             vertexShader: vertex_shader, 
             uniforms:{
             fboSize: {value: new THREE.Vector2(this.tgt.clientHeight, this.tgt.clientWidth)} ,
             tick: {value: 0.0}
             }
    })
        this.mesh = new THREE.Mesh(this.plane, this.material)
          
        this.scene.add(this.mesh)
        this.clock.start()
         this.animate();

         this.speed = 1
    }   
            
      



        // document.getElementsByClassName("."+styles.main)
            
    
      
       
      
     animate() {
          requestAnimationFrame(this.animate.bind(this))
          this.renderer.render(this.scene, this.camera);         
          this.clock.getElapsedTime()
          console.log(this.clock.getElapsedTime());
          
     
            if(this.clock.getElapsedTime()-this.delta>0.216){
                this.delta  = this.clock.getElapsedTime()
                 this.material.uniforms.tick.value = Math.random()
              
                
            }
            
          
                
            
           
      
         
        }
    
         
 








}