'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function Home() {

  function sleepms(ms) {  
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    window.addEventListener('resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight;  
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);

    const scene = new THREE.Scene();
    camera.position.z = 5;

    
    let lights = [];
    lights[0] = new THREE.DirectionalLight(0xffffff, 3);
    lights[1] = new THREE.DirectionalLight(0xffffff, 3);
    lights[2] = new THREE.DirectionalLight(0xffffff, 3);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);

    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const faceMaterial = new THREE.MeshPhongMaterial({ color: 0x156289, emissive: 0x072534, side: THREE.DoubleSide, flatShading: true });
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: false, opacity: 0.5 });

    const bigLines = new THREE.Group();
    const bigFaces = new THREE.Group();

   

    async function cameraMove() {
      
    
      camera.position.z = -25;
      camera.updateProjectionMatrix();
    }



    async function assemblyCubes() {
      let started = false;

      for (let k = 0; k < 10; k++) {
        let y = k * 1.5;
        if (k !== 0) {
          await sleepms(200);
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
           let line = new THREE.LineSegments(cubeGeometry, lineMaterial)
           line.position.set(x,y,z)
            bigLines.add(line);

            let face = new THREE.Mesh(cubeGeometry, faceMaterial);
            face.position.set(x, y, z);
            bigFaces.add(face);

            newCube.position.set(x, y, z);

            let z2 = -0.75 - 1.5 * i;
          

         line = new THREE.LineSegments(cubeGeometry, lineMaterial)
         line.position.set(x,y,z2)
            bigLines.add(line);

           face = new THREE.Mesh(cubeGeometry, faceMaterial);
            face.position.set(x, y, z2);
            bigFaces.add(face);
            } 
              
           
            if (k === 0) {
              await sleepms(50);
            }
       


          
         
          }
        }
      }


      for(let j =0; j<3; j++ ){
        await sleepms(150)
      for(let i =0; i<2; i++ ){
       
        for(let k =0; k<2; k++ ){
        await sleepms(50)
      let cloneBigFaces = bigFaces.clone();
      let cloneBigLines = bigLines.clone()
      cloneBigFaces.translateX(-20*k);
      cloneBigLines.translateX(-20*k);
      cloneBigLines.translateZ(-20*i);
      cloneBigFaces.translateZ(-20*i);
      cloneBigLines.translateY(-20*j);
      cloneBigFaces.translateY(-20*j);
      scene.add(cloneBigLines)
      scene.add(cloneBigFaces);
  
        }
   
   
     



    }
      
   
      }






    }

    assemblyCubes();
    camera.position.z = -50;


    const cube1 = new THREE.Mesh(cubeGeometry, faceMaterial);
    const cube2 = new THREE.Mesh(cubeGeometry, new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    const cube3 = new THREE.Mesh(cubeGeometry, new THREE.MeshBasicMaterial({ color: 0xff0000 }));


    let c_pos = 0


   
   
    
    scene.add(bigLines);
    scene.add(bigFaces);
    // startRotating()
    cube1.position.set(0.75, 0, 0.75);
    cube2.position.set(-0.75, 0, -0.75);
    cube3.position.set(0.75, 0, -0.75);

    scene.add(cube1);
    scene.add(cube2);
    scene.add(cube3);
    

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    async function startRotating() {
      for (let index = 0; index < 1000; index++) {
        await sleepms(50);
        // bigLines.rotateX(60)
        c_pos+=0.5
      
        
      }
    }
   startRotating()
   camera.position.set(35, 35, 35)
   controls.update()

  controls.rotateSpeed = 0.3; // control the rotate speed
  // controls.autoRotate = true
  
    function animate() {
      requestAnimationFrame(animate);
    

      renderer.render(scene, camera);
      controls.update();
     
    }

    animate();
  }, []);

  return (
    <main className={styles.main}></main>
  );
}
