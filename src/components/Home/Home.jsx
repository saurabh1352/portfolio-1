import React, { useEffect } from 'react'
import "./Home.css"
import * as THREE from 'three';

import moonImage from "../../images/moon.jpg"
import TimeLine from "../TimeLine/TimeLine"
import venusImage from "../../images/venus.jpg"
import space from "../../images/space.jpg"
import { Typography } from '@mui/material'
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
export default function Home() {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(space);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.querySelector(".homeCanvas")
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonmaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonmaterial)
    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusmaterial = new THREE.MeshStandardMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusmaterial);
    venus.position.set(8, 5, 5);
    const pointLight = new THREE.PointLight(0xfffff, 1)
    const pointLight2 = new THREE.PointLight(0xfffff, 0.1)

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);
    const lighthelper = new THREE.PointLight(pointLight);
    ;

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.add(lighthelper);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });
    camera.position.set(4, 4, 8);
    function animate() {
      requestAnimationFrame(animate);

      moon.rotation.x += 0.01;
      moon.rotation.z += 0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();


  }, [])

  return (<div className='home'>
    <canvas className='homeCanvas'></canvas>
    <div className="homeContainer">
      <Typography variant="h3">TIMELINE</Typography>
      <TimeLine timeline={[1, 2, 3, 4]} />

    </div>
    <div className="homeSkills">
      <Typography variant="h3">SKILLS</Typography>
      <div className="homeCubeSkills">
        <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfd6dZys09V6kfgcJYuuNAWooM5Qn4PfSFg&usqp=CAU" alt='Face1' />
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfd6dZys09V6kfgcJYuuNAWooM5Qn4PfSFg&usqp=CAU" alt='Face2' />
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Z3R59-G8DDtafOA4Xg_hy2KXQePu6QmBw90Szc85n1eJjrlT-yn-ePmpq3jmU2iQO28&usqp=CAU" alt='Face3' />
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfd6dZys09V6kfgcJYuuNAWooM5Qn4PfSFg&usqp=CAU" alt='Face4' />
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAC_WueCSCX7Nk4XA5Zo7S3jd7Wy-HPkBJvyWik3zrcnnp2xmLybp6MQx9WvoaKGpyE0&usqp=CAU" alt='Face5' />
        </div>
        <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvL8UCYDv9oJO5MTS5W_TWh8U3byxRQcbW4A&usqp=CAU" alt='Face6' />
        </div>
      </div>
      <div className="cubeShadow"></div>
      <div className="homeSkillsBox">
      <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
      </div>
    </div>


  </div>)


}
