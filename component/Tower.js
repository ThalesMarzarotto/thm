'use client';

import Image from "next/image";
import { useEffect } from "react";
import styles from "../src/app/page.module.css"
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// export default function Tower() {

   


//     function changeTheme (){
//         renderer.setClearColor(0xffffff)
//     }



//     function sleepms(ms) {  
//         return new Promise(resolve => setTimeout(resolve, ms));
//       }
    
//       useEffect(() => {
//         const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         const renderer = new THREE.WebGLRenderer();
//         window.addEventListener('resize', function () {
//             console.log("'");
            
//           camera.aspect = window.innerWidth / window.innerHeight;  
//           camera.updateProjectionMatrix();
//           renderer.setSize(window.innerWidth, window.innerHeight);
//         }, false);
    
//         const scene = new THREE.Scene()
//      renderer.setClearColor (0x000319,1)
//         camera.position.z = 5;
    
        
//         let lights = [];
//         lights[0] = new THREE.DirectionalLight(0xffffff, 3);
//         lights[1] = new THREE.DirectionalLight(0xffffff, 3);
//         lights[2] = new THREE.DirectionalLight(0xffffff, 3);
//         lights[0].position.set(0, 200, 0);
//         lights[1].position.set(100, 200, 100);
//         lights[2].position.set(-100, -200, -100);
//         scene.add(lights[0]);
//         scene.add(lights[1]);
//         scene.add(lights[2]);
    
//         const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
//         const faceMaterial = new THREE.MeshPhongMaterial({ color: 0x156289, emissive: 0x072534, side: THREE.DoubleSide, flatShading: true });
//         const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: false, opacity: 0.5 });
    
//         const bigLines = new THREE.Group();
//         const bigFaces = new THREE.Group();
    
       
    
//         async function cameraMove() {
          
        
//           camera.position.z = -25;
//           camera.updateProjectionMatrix();
//         }
    
    
    
//         async function assemblyCubes() {
//           let started = false;
    
    
//         for (let z = 0; z < 4; z++) {
            
//               for (let k = 0; k < 10; k++) {
//             let y = k * 1.5 -z*20;
//             if (k !== 0) {
//               await sleepms(200);
//               if (!started) {
              
//                 started = !started;
//               }
//             }
    
//             for (let i = 0; i < 5; i++) {
//               for (let j = 0; j < 10; j++) {
               
    
//              if (j ===0 || j===9 ||   i===4 ||   k===0|| k===9 ) {
//                let x = -6.75 + 1.5 * j;
//                 let z = 0.75 + 1.5 * i;
    
//                 let newCube = new THREE.Group();
//                let line = new THREE.LineSegments(cubeGeometry, lineMaterial)
//                line.position.set(x,y,z)
//                 bigLines.add(line);
    
//                 let face = new THREE.Mesh(cubeGeometry, faceMaterial);
//                 face.position.set(x, y, z);
//                 bigFaces.add(face);
    
//                 newCube.position.set(x, y, z);
    
//                 let z2 = -0.75 - 1.5 * i;
              
    
//              line = new THREE.LineSegments(cubeGeometry, lineMaterial)
//              line.position.set(x,y,z2)
//                 bigLines.add(line);
    
//                face = new THREE.Mesh(cubeGeometry, faceMaterial);
//                 face.position.set(x, y, z2);
//                 bigFaces.add(face);
//                 } 
                  
               
//                 if (k === 0) {
//                   await sleepms(50);
//                 }
           
    
    
              
             
//               }
//             }
//           }
//         }
        
    
    
    
          
         
           
           
    
    
    
    
    
//         }
    
     
    
    
    
    
   
       
    
    
       
       
        
//         scene.add(bigLines);
//         scene.add(bigFaces);
    
    

        
//         renderer.setSize(window.innerWidth, window.innerHeight);

//         // document.getElementsByClassName("."+styles.main)
//         document.querySelector("."+styles.heroSection3).appendChild(renderer.domElement)
        
    
//         const controls = new OrbitControls(camera, renderer.domElement);
       
//        camera.position.set(35, 35, 35)
       
    
//       controls.enableZoom = false
//       controls.enableRotate = false
//       controls.rotateSpeed = 0.3; // control the rotate speed
//       controls.autoRotate = true
//       controls.update()
//         function animate() {
//           requestAnimationFrame(animate);
        
          
//           renderer.render(scene, camera);
//           controls.update();
         
//         }
    

//         assemblyCubes();

         
       
       
         
//         animate();
//       }, []);

// return (<>
// <div onClick={()=>changeTheme()}> change theme</div>
// </>)
// }



export default class Tower {


    constructor(window,document){
      
        
        
    }


    updateWindow ( window, document) {
        this.window = window, 
        this.document = document
        this.window = window
        this.document = document
        this.renderer = new THREE.WebGLRenderer();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.scene= new THREE.Scene()
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
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.document.querySelector("."+styles.heroSection3).appendChild(this.renderer.domElement)
        this.renderer.setClearColor (0x000319,1)
        this.camera.position.z = 5;
    
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
       
        this.camera.position.set(35, 35, 35)
           
        this.controls.enableZoom = false
        this.controls.enableRotate = false
        this.controls.rotateSpeed = 0.3; // control the rotate speed
        this.controls.autoRotate = true
        this.controls.update()



        
        let lights = [];
        lights[0] = new THREE.DirectionalLight(0xffffff, 3);
        lights[1] = new THREE.DirectionalLight(0xffffff, 3);
        lights[2] = new THREE.DirectionalLight(0xffffff, 3);
        lights[0].position.set(0, 200, 0);
        lights[1].position.set(100, 200, 100);
        lights[2].position.set(-100, -200, -100);
        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        this.scene.add(lights[2]);
    
        this.cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        this.faceMaterial = new THREE.MeshPhongMaterial({ color: 0x156289, emissive: 0x072534, side: THREE.DoubleSide, flatShading: true });
        this.lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: false, opacity: 0.5 });
    
        this.bigLines = new THREE.Group();
        this.bigFaces = new THREE.Group();

        this.assemblyCubes()
               
        this.scene.add(this.bigLines);
        this.scene.add(this.bigFaces);
    
          this.animate();
    }   
            
      
        async  assemblyCubes() {
          let started = false;
    
    
        for (let z = 0; z < 4; z++) {
            
              for (let k = 0; k < 10; k++) {
            let y = k * 1.5 -z*20;
            if (k !== 0) {
              await this.sleepms(200);
              if (!started) {
              
                started = !started;
              }
            }
    
            for (let i = 0; i < 5; i++) {
              for (let j = 0; j < 10; j++) {
               
    
             if (j ===0 || j===9 ||   i===4 ||   k===0|| k===9 ) {
               let x = -6.75 + 1.5 * j;
                let z = 0.75 + 1.5 * i;
    
                let newCube = new THREE.Group();
               let line = new THREE.LineSegments(this.cubeGeometry, this.lineMaterial)
               line.position.set(x,y,z)
                this.bigLines.add(line);
    
                let face = new THREE.Mesh(this.cubeGeometry, this.faceMaterial);
                face.position.set(x, y, z);
                this.bigFaces.add(face);
    
                newCube.position.set(x, y, z);
    
                let z2 = -0.75 - 1.5 * i;
              
    
             line = new THREE.LineSegments(this.cubeGeometry, this.lineMaterial)
               line.position.set(x,y,z2)
                this.bigLines.add(line);
    
               face = new THREE.Mesh(this.cubeGeometry, this.faceMaterial);
                face.position.set(x, y, z2);
                this.bigFaces.add(face);
                } 
                  
               
                if (k === 0) {
                  await this.sleepms(50);
                }
           
    
    
              
             
              }
            }
          }
        }
        
    
    
    
                 
           
           
    
    
    
    
    
        }
    


        // document.getElementsByClassName("."+styles.main)
            
    
      
       
      
      animate() {
          requestAnimationFrame(this.animate.bind(this));     
          this.renderer.render(this.scene, this.camera);
          this.controls.update();
         
        }
    
         
 








}