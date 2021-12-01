import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

class App extends Component {
    componentDidMount() {
        let scene, camera, renderer, cube;
        const backgroundColor = 0xE39469;
        function init() {
            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );

            renderer = new THREE.WebGLRenderer({ antialias: true });

            renderer.setSize(window.innerWidth, window.innerHeight);

            document.body.appendChild(renderer.domElement);

            const geometry = new THREE.BoxGeometry(2, 2, 2);
            // const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );

            const texture = new THREE.TextureLoader().load('images/ocean.jpg')
            const material = new THREE.MeshBasicMaterial({ map: texture });

            cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            // Setting a background color to the scene 
            scene.background = new THREE.Color(0xE39468);


            camera.position.z = 5;
        }

        // Cube rotation 
        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }
        // Center on window resize 
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', onWindowResize, false);
        init();
        animate();
    }
    
    render(){
        return(
            <>
            </>
        )
    }

}
export default App;